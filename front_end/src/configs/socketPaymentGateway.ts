import { io } from "socket.io-client";

export const socketPaymentGateway = io(`ws://${process.env.NEXT_PUBLIC_WS_PAYMENT_GATEWAY_URL}`)
