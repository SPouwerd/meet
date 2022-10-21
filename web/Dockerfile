FROM node:16 AS builder

WORKDIR /build

COPY yarn.lock .
COPY package.json .
RUN yarn install --frozen-lockfile --cache-folder /build/.yarn-cache --non-interactive

ENV NODE_ENV production

# Move these after yarn install so they don't affect the cache.
# For now, this is done via the dockerfile.
ENV SERVER_URL http://0.0.0.0:3001/
ENV CLIENT_URL /

COPY . .
RUN yarn build

FROM node:16-alpine AS production

ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT 3000

WORKDIR /srv/app
# RUN apk add python3 make g++

COPY yarn.lock .
COPY package.json .
RUN yarn install --frozen-lockfile --cache-folder /build/.yarn-cache --non-interactive --production

COPY --from=builder /build/.output ./.output

CMD ["yarn", "start"]


