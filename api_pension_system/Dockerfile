# Base image
FROM node:18-alpine AS build

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

RUN npm i prisma -g

# Install app dependencies
RUN npm install

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
#CMD [  "npm", "run",  "start:migrate:prod" ]
CMD [ "npm", "run", "start:dev" ]
