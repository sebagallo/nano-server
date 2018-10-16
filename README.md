# Example Node.js Server

### What does this do?
Creates an express.js server, communicating with a mongodb instance (which must be provided).

__ATTENTION: DO THIS ON A FRESH MONGODB SERVER__

### Installation

Run `npm install`

### Configuration

You can pass 3 (three) environment variables to configure the mongodb connection:

* DB_URL  (eg: _mongodb://192.168.1.100:69/_)
* DB_USER
* DB_PASS

... or you could edit the `MongodbConfig.js` file

### How to run

After installation, run `npm start`. The server should be available on `http://127.0.0.1:2900`.

Alternatively, there's a docker image available (this project is supposed to be run through docker-compose anyway)

### Tests

After installation, run `npm test`
