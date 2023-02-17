import { Subjects } from "./subjects";

interface Order {
  subject: Subjects;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}

export interface OrderCancelledEvent extends Order {
  subject: Subjects.EventOrderCancelled;
}

export interface OrderCancelled extends Order {
  subject: Subjects.OrderCancelled;
}
