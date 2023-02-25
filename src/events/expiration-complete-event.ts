import { Subjects } from "./subjects";

interface Expiration {
    subject: Subjects,
    data:{
        orderId: string
    }
}

export interface ExpirationCompleteEvent extends Expiration{
    subject: Subjects.EventExpirationComplete
}

export interface ExpirationComplete extends Expiration{
    subject: Subjects.ExpirationComplete
}