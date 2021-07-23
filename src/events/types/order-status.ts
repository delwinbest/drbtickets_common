export enum OrderStatus {
  Created = 'created', // When the order has been created but the ticket has not been reserved
  Cancelled = 'cancelled', // When the ticket has already been reserved, or the user cancels the order, or the order time limit expires
  AwitingPayment = 'awaiting:payment', // Wehn the order has succesfully reserved the ticket
  Complete = 'complete', // When the order has reserved the ticket and the user has paid succesfully.
}
