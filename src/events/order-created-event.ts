import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

interface Order {
    subject: Subjects,
    data:{
        id:string,
        status:OrderStatus,
        userId: string,
        expiresAt: string,
        ticket:{
            id:string,
            price:number
        }
    }
}


export interface OrderCreatedEvent extends Order{
    subject: Subjects.EventOrderCreated,
    
}

export interface OrderCreated extends Order{
    subject: Subjects.OrderCreated,
    
}