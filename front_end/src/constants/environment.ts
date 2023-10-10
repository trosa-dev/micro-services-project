if (!process.env.NEXT_PUBLIC_JWT_EXPIRATION) throw "NEXT_PUBLIC_JWT_EXPIRATION is not set .env"
export const NEXT_PUBLIC_JWT_EXPIRATION = process.env.NEXT_PUBLIC_JWT_EXPIRATION

if (!process.env.NEXT_PUBLIC_JWT_SECRET) throw "NEXT_PUBLIC_JWT_SECRET is not set .env"
export const NEXT_PUBLIC_JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET

if (!process.env.NEXT_PUBLIC_JWT_REFRESH_TOKEN_SECRET) throw "NEXT_PUBLIC_JWT_REFRESH_TOKEN_SECRET is not set .env"
export const NEXT_PUBLIC_JWT_REFRESH_TOKEN_SECRET = process.env.NEXT_PUBLIC_JWT_REFRESH_TOKEN_SECRET
