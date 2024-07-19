import { Message } from "@/model/user";

export interface ApiResponse{
    success:boolean;
    message: string;
    isAppectingMessages?:boolean
    messages?:Array<Message>
}
