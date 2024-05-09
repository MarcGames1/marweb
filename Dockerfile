FROM node:22-alpine3.18

COPY frontend /app/

WORKDIR /app/frontend/

RUN npm install
RUN npm run build

CMD ["npm", "start"]