export const PORT = process.env.PORT || 5000;
export const DLQ_QUEUE_NAME =
  process.env.DLQ_QUEUE_NAME || 'hookspot-delivery-dlq';
export const RETRY_QUEUE_NAME =
  process.env.RETRY_QUEUE_NAME || 'hookspot-delivery';
