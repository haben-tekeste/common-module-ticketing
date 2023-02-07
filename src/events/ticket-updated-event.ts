import { Subjects } from "./subjects";

export interface TicketUpdatedInterface {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
