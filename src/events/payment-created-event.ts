import { Subjects } from "./subjects";

interface Payment {
  subject: Subjects;
  data: {
    id: string,
    stripeId: string,
    orderId: string;
  };
}

interface PaymentCreated extends Payment {
  subject: Subjects.PaymentCreated;
}

interface PaymentCreatedEvent extends Payment {
  subject: Subjects.EventPaymentCreated;
}
