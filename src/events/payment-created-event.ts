import { Subjects } from "./subjects";

interface Payment {
  subject: Subjects;
  data: {
    id: string,
    stripeId: string,
    orderId: string;
  };
}

export interface PaymentCreated extends Payment {
  subject: Subjects.PaymentCreated;
}

export interface PaymentCreatedEvent extends Payment {
  subject: Subjects.EventPaymentCreated;
}
