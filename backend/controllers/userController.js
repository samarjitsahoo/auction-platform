import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import {v2 as cloudinary} from "cloudinary";
import { generateToken } from "../utils/jwtToken.js";

export const register = catchAsyncErrors(async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("No files were uploaded", 400));
    }

    const { profileImage } = req.files;
    const allowedFormats = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedFormats.includes(profileImage.mimetype)) {
        return next(new ErrorHandler("Invalid file format", 400));
    }

    const {
        userName,
        email,
        password,
        phone,
        address,
        role,
        bankAccountNumber,
        bankAccountName,
        bankName,
        easypaisaAccountNumber,
        paypalEmail,

    } = req.body;

    if (!userName || !email || !password || !phone || !address || !role) {
        return next(new ErrorHandler("Please fill in all fields", 400));
    }
    if (role === "Auctioneer") {
        if (!bankAccountNumber || !bankAccountName || !bankName) {
            return next(new ErrorHandler("Please fill in all bank details", 400));
        }
        if (!easypaisaAccountNumber) {
            return next(new ErrorHandler("Please provide Eassypaisa account number", 400));
        }
        if (!paypalEmail) {
            return next(new ErrorHandler("Please provide paypal email", 400));
        }
    }
    const isRegistered = await User.findOne({email});
    if(isRegistered){
        return next(new ErrorHandler("User already exists", 400));
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(profileImage.tempFilePath,{
        folder: "auction-platform",
    });
    if(!cloudinaryResponse || cloudinaryResponse.error){
        console.error("Cloudinary error", cloudinaryResponse.error || "Unknown Cloudinary error");
        return next(new ErrorHandler("Failed to upload Image to cloudinary", 500));
    }

    const user = await User.create({
        userName,
        email,
        password,
        phone,
        address,
        role,
        profileImage:{
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        },
        paymentMethods:{
            bankTransfer:{
                bankAccountNumber,
                bankAccountName,
                bankName,
            },
            easypaisa:{
                easypaisaAccountNumber,
            },
            paypal:{
                paypalEmail,
            }
        }
    });
    generateToken(user, "User registered successfully", 201, res);
})

export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please enter email and password", 400));
    }
    const user = await User.findOne({
        email,
    }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid credentials", 401));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid credentials", 401));
    }
    generateToken(user, "User Log in successfully", 200, res);
})

export const getProfile = catchAsyncErrors(async (req, res, next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        user,
    });
});

export const logout = catchAsyncErrors(async (req, res, next) => {
    res.status(200).cookie("token","",{
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: true,
        sameSite: "None"
    }).json({
        success: true,
        message: "Log Out Successfully"
    })
})

export const fetchLeaderboard = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find({moneySpent:{$gt: 0}})
    const leaderboard = users.sort((a,b)=>b.moneySpent-a.moneySpent)
    res.status(200).json({
        success:true,
        leaderboard,
    })
})
