## Project Introduction

This imaginery restaurant allows a user to register or login to add items from a menu and place an order with them, and will receive an SMS when the order is confirmed, and another when it is ready for pickup. The ordering system is supported in the backend with NodeJS (Express Server and EJs templating) and POSTGRESQL for the database, and in the frontend with SASS pre-processor, HTML5 & JQuery. Realtime order updates are sent to both owner of the restaurant and the customer using the Twilio SMS API whenever an order is placed, confirmed and ready for pickup.

## Illustration

Below are some of the routes a user can visit.
!['Home Page'](https://github.com/aaron3993/Aa-So-Sa/blob/master/documentation/home.png)
!['Menu Page'](https://github.com/aaron3993/Aa-So-Sa/blob/master/documentation/menu.png)
!['Order Page'](https://github.com/aaron3993/Aa-So-Sa/blob/master/documentation/new_order.png)
!['Completed Order Page'](https://github.com/aaron3993/Aa-So-Sa/blob/master/documentation/completed_order.png)
!['Admin Page'](https://github.com/aaron3993/Aa-So-Sa/blob/master/documentation/admin.png)

## Entity Relation Diagram

!['Entity Relation Diagram'](https://raw.githubusercontent.com/aaron3993/midterm-project/master/documentation/Database%20ERD.png)

## User Stories

- Users can see the list of available dishes (menu)
- Users can add a dishes to the cart
- Users can see the content of their cart and the details about the dishes, and the order total
- Restaurant owner will receive an SMS notification that an order was made with the order details
- Users will receive a notification that their order is ready
- Users can modify the content of the cart
- Users can place their order
- Users will receive a notification about when their order will be ready
- Users should see the status of their order on the app (approx. time for pickup)
- Restaurant owner can specify how long the order will take to be fulfilled

## Dependencies

1. express
2. bodyParser
3. sass
4. morgan
5. cookieSession
6. node-postgresql

## Setup

1. **Install dependencies**

```sh
npm install
```

2. **Setup database**
   
   Run the schema and seed files in the db folder.

3. **Start the server**

```sh
npm start
```

4. **To access admin page, login as aaron@LHL.com with password as 'password'**
