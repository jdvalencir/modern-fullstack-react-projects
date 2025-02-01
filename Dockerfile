FROM node:20 AS build	

ARG VITE_BACKEND_URL=https://blog-backend-763294657987.us-central1.run.app/api/v1/tedt
ARG TIMESTAMP

WORKDIR /build

COPY package.json .
COPY package-lock.json .

RUN npm i 

COPY . .

RUN npm run build

FROM nginx AS final 

WORKDIR /usr/share/nginx/html

COPY --from=build /build/dist .
