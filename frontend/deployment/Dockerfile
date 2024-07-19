FROM node:20-alpine as build

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ./../src ./src
COPY ./../index.html ./index.html
COPY ./../vite.config.ts ./vite.config.ts
COPY ./../tsconfig*.json ./

RUN npm run build

FROM nginx:1.22.1

COPY --from=build ./../app/build /usr/share/nginx/html