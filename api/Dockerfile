FROM node:16 AS temp-production

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn install \
    --frozen-lockfile \
    --non-interactive \
    --cache-folder /build/.yarn-cache

COPY prisma prisma
RUN yarn generate

COPY . .
CMD yarn production
