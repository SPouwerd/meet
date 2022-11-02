# Meet App 
## Setup
use this command in after cloning in root directory to install all node-modules:
```cd api && yarn install && cd ../web && yarn install```  

generating prisma client on image && migrating changes on database volume
 ```docker-compose run --rm api yarn prisma generate && docker-compose run --rm api yarn prisma migrate reset --force```

after this you can use ```docker-compose up ``` for spinning up the application on localhost in production mode & a development enveroment on the local network.
