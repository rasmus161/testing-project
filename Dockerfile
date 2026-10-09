FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 10000

CMD ["sh", "-c", "sed -i \"s/listen 10000/listen ${PORT:-10000}/\" /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]