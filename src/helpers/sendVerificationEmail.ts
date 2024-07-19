import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";

import { ApiResponse } from "@/types/ApiResponse";


export async function sendVerificationEmail (
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse>{
    try {

        await resend.emails.send({
            from: 'you@example.com',
            to: email,
            subject: 'Mystry message | Verification code',
            react:VerificationEmail({username,otp:verifyCode})
          });
        return{success:true,message:'Verification email send successully'}
        
        
    } catch (emailError) {
        console.error('Error sending verificatioin email',emailError)
        return{success:false,message:'Failed to send verificatioin email'}
        
    }
}


