# Practical Test - Frontend
Practical test for applicants to the frontend area of Mercado Libre.

## Getting Started
You need to follow the following instructions in order to use or test this project.

### Prerequisites
You need to create the `.env` file. Run the following command on your terminal:

```
cp .env.local .env
```
> If you change the PORT in the `.env` file, also you have to update it in the config file on the client side.
*Path: `client/config/index.js`* 

### Start
You have two possibilities to start the project.

#### First Option
You need to run the following commands on the terminal.

* Start the Server
    - Yarn:
        ```
        yarn server
        ```
    - npm:
        ```
        npm run server
        ```
* Start the Client
    - Yarn:
        ```
        yarn client
        ```
    - npm:
        ```
        npm run client
        ```
        
Now you can open the URL of the project: `http://localhost:3000`.

#### Second Option
This second command will start both (client and server).
You need to run the following command on the terminal.

- Yarn:
    ```
    yarn start
    ```
- npm:
    ```
    npm run start
    ```
    
Now you can open the URL of the project: `http://localhost:3000`.

## Built With
* [ExpressJS](https://expressjs.com) - The framework used to do the server side.
* [ReactJS](https://reactjs.org/) - The framework used to do the client side.

## Author
**Walter Radduo**
