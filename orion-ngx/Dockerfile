#stage 1
FROM node:16 as build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build


#stage 2
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/Orion /usr/share/nginx/html