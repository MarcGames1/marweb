FROM node:22-alpine3.18

COPY frontend /app/


WORKDIR /app/frontend/
RUN cd /app/frontend
RUN rm -rf node_modules .idea .next

RUN npm install
RUN npm run build

CMD ["npm", "start"]