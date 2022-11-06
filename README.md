# Meet App 
## Usage
generating prisma client on image && migrating changes on database volume
 ```docker-compose run --rm web yarn install && sudo docker-compose run --rm api yarn install && sudo docker-compose run --rm api yarn fresh```

after this you can use ```docker-compose up ``` for spinning up the application on localhost in production mode & a development enveroment on the local network.