#stage 1
FROM node:16 as build
WORKDIR /app
COPY . .
RUN npm run build
RUN npm install

#stage 2
FROM nginx:alpine
COPY --from=build /app/dist/Orion /usr/share/nginx/html