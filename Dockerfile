## Use Node Slim image
FROM node:latest AS build

## Copy source code
COPY . .

## Start the application
CMD ["node", "dist/enlight-front-app/server/main.js"]
