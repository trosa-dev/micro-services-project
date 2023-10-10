import { io } from "socket.io-client";

export const socketPensionSystem = io(`ws://${process.env.NEXT_PUBLIC_WS_PENSION_SYSTEM_UR}`)
