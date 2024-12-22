import { User} from '../models/userSchema.js'
import {catchAsyncErrors} from '../middlewares/catchAsyncErrors.js'
import ErrorHandler from '../middlewares/error.js'

export const trackCommissionStatus = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id)
    if(user.unpaidCommission > 0){
        return next(new ErrorHandler('You have unpaid commission. Please pay your commission first', 400))
    }
    next();
})