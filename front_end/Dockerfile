# Base image
FROM node:18-alpine AS build

# Create app directory
WORKDIR usr/src/app

# Bundle app source
COPY . .

RUN npm install --cache

ENV NEXT_PUBLIC_PENSION_SYSTEM_URL=api_pension_system
ENV NEXT_PUBLIC_PENSION_SYSTEM_PORT=3003

ENV NEXT_PUBLIC_PAYMENT_GATEWAY_URL=payments_gateway
ENV NEXT_PUBLIC_PAYMENT_GATEWAY_PORT=3004

ENV NEXT_PUBLIC_WS_PENSION_SYSTEM_UR=localhost:3003
ENV NEXT_PUBLIC_WS_PAYMENT_GATEWAY_URL=localhost:3004

CMD [ "npm", "run", "dev" ]
