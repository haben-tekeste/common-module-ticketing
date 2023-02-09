export enum OrderStatus {
  //when order has been created but tickets
  // is not reserved yet
  Created = "created",

  // the ticket the order is trying to reserve has
  // already been reserved, or when user cancelled order
  // or order expires before payment
  Cancelled = "cancelled",

  // tickets is successfully reserved
  AwaitingPayment = "awaiting-payment",

  // ticket is reserved and user has provided
  // payment successfully
  Completed = "completed",
}
