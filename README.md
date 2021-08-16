# Api Seguros
## _NodeJS Rest Service_

Api Seguros is a rest services based on:
- NodeJS
- Express
- ✨Magic ✨

## Test

Dillinger uses a number of open source projects to work properly:

- Mocha
- Supertest
- Chai


## Installation

Api Seguros requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/jparsoft/seguros.git
cd seguros
npm i
npm start
```

For testing...

```sh
npm test
```
## Docker

Api Seguros is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 3200, the port can be change in the [environment.js](https://github.com/jparsoft/seguros/blob/main/environment.js) file and in
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.


```sh
docker build -t api-seguros-docker .  
docker run -p 3200:3200 api-seguros-docker
```
Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:3200
```

## Endpoints products

_type:get for status, returns date now_
```sh
127.0.0.1:3200/
```
_type:post, returns list sold products_
```sh
request example:
{}
127.0.0.1:3200/products/listSoldProducts
```
_type:post, to sell list of products returns the status code of the transaccion and the list of sold products_
```sh
request example:
[
    {
        "id": 1
    },
    {
        "id": 3
    }
]
127.0.0.1:3200/products/listSoldProducts
```
_type:post, evaluate sold products by the number of days, returns the list of evaluated products_
```sh
request example:
{
    "days":3
}
127.0.0.1:3200/products/evaluateProducts
```

_type:post, finalize day, for recalculate sellIn an price of the list of products_
```sh
request example:
{}
127.0.0.1:3200/products/products/finalizeDay
```
## NOTES
_The api includes a crud endpoint service for manipulate data_
_The api includes a exported [postman file](https://github.com/jparsoft/seguros/blob/main/postman%20exported%20file/Api-seguros.postman_collection.json) for to test endponts_
