FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json .


RUN npm install


COPY . .


EXPOSE 3000


LABEL description="Node.js API for bank database" \
      version="1.2-beta" \
      author="Tokyo script <tokyo@email.com>" \
      maintainer="Emanuel <emanoel.0@eu.com>" \
      build-date="2025-05-10"


CMD ["npm", "start"]
