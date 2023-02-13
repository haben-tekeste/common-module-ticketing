import { Subjects } from "./subjects";

export interface OrderCancelledEvent {
    subject: Subjects.EventOrderCancelled,
    data:{
        id: string,
        ticket: {
            id: string
        }
    }
}

export interface OrderCancelled {
    subject: Subjects.OrderCancelled,
    data:{
        id: string,
        ticket: {
            id: string
        }
    }
}