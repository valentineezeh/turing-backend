# Turing-backend

This is the implementation of a ecommerce restful api backend functionalities. It enables users to register, login, order and buy products.

##
API Endpoint: https://turing-ecommerce-backend.herokuapp.com

# Technologies Used
- Backend: Node/Express
- MySQL
- Sequelize
- Libaries: Es6, Babel-CLI, eslint, supertest, express

# Features
- User can create an account and log in
- Authenticated User order for products.
- Authenticated User should be able to update User address.
- Authenticated User should be able to update card details.
- Authenticated User should be able to update account details.
- Authenticated User should be able to create an order.
- Authenticated User should be able to get orders.
- Authenticated User should be able to post product reviews.
- Authenticated User should be able to update account details.
- Unauthenticated User should be able get all departments.
- Unauthenticated User should be able get a particular department.
- Unauthenticated User should be able to access category features.
- Unauthenticated User should be able to access attribute features.
- Unauthenticated User should be able to access product features.
- Unauthenticated User should be able to access shopping features.
- Unauthenticated User should be able to access tax features.
- Unauthenticated User should be able to access shipping features.
- Unauthenticated User should be able pay using stripe.

## API Endpoints

| Endpoint                                             | Functionality                      |
| ---------------------------------------------------- | ---------------------------------- |
| POST /api/customers                                  | Register a customer                |
| POST /api/customers/login                            | Login a customer                   |
| POST /api/customers/facebook                         | Login a customer via facebook      |
| GET /api/customer                                    | Fetch a customer                   |
| PUT /api/customers/address                           | Update a customer address details  |
| PUT /api/customers                                   | Update a customer account details  |
| PUT /api/customers/creditCard                        | Update a customer card details     |
| GET /api/attributes                                  | Fetch all attributes               |
| GET /api/attributes/\<attribute_id>                  | Fetch a attribute by attribute id  |
| GET /api/attributes/values/\<attribute_id>           | Fetch a value by attribute id      |
| GET /api/attributes/inProduct/\<attribute_id>        | Fetch inProduct by attribute id    |
| GET /api/departments                                 | Fetch all department               |
| GET /api/departments/\<department_id>                | Fetch a department by department id|
| GET /api/tax                                         | Fetch all tax                      |
| GET /api/taxs/\<taxId>                               | Fetch a tax by tax id              |
| GET /api/categories                                  | Fetch all categories               |
| GET /api/categories/\<categories_id>                 | Fetch a category by category id    |
| GET /api/categories/inProduct/\<product_id>          | Fetch a category by product id     |
| GET /api/categories/inDepartment/\<department_id>    | Fetch inDepartment by department id|
| GET /api/shipping/regions/                           | Fetch shipping regions             |
| GET /api/shipping/regions/\<shipping_region_id>      | Fetch shipping regions by id       |
| POST /api/orders/                                    | Create Order                       |
| GET /api/orders/\<order_id>                          | Fetch a order by order id          |
| GET /api/orders/inCustomer                           | Fetch a order by customer id       |
| GET /api/orders/shortDetail/\<order_id>              | Fetch a order details by order id  |
| GET /api/shoppingcart/\<generateUniqueId>            | Fetch a generate unique ID         |
| POST /api/shoppingcart/add                           | Add product to shoppinng cart      |
| GET /api/shoppingcart/\<cart_id>                     | Fetch a cart by cart id            |
| PUT /api/shoppingcart/update/\<item_id>              | Update a cart by item id           |
| DELETE /api/shoppingcart/empty/\<cart_id>            | Delete a cart by cart id           |
| GET /api/shoppingcart/moveToCart/\<item_id>          | Move a item in a cart by item id   |
| GET /api/shoppingcart/totalAmount/\<cart_id>         | Fetch total amount of item in cart |
| GET /api/shoppingcart/getSaved/\<cart_id>            | Fetch save item  in cart           |
| GET /api/shoppingcart/saveForLater\<item_id>         | Fetch item saved for later         |
| POST /api/stripe/webhook                             | Create a Stripe webhook            |
| POST /api/stripe/charge                              | Make a Payment charge request      |
| GET /api/products                                    | Fetch all products                 |
| GET /api/products/search                             | Fetch product search result        |
| GET /api/products/inCategory/\<category_id>          | Fetch products via category id     |
| GET /api/products/inDepartment/\<department_id>      | Fetch products via department id   |
| GET /api/products/\<product_id>/reviews/             | Fetch product reviews by product id|
| GET /api/products/\<product_id>/details/             | Fetch product details by product id|
| GET /api/products/\<product_id>/locations/           | Fetch product details by product id|
| POST /api/products/\<product_id>/reviews/            | POST product reviews by product id |
| GET /api/products/\<product_id>                      | Fetch a product by product id      |

[TURING ECOMMERCE API Documentation](https://web.postman.co/collections/4646500-349bb1be-8aa5-445c-b8a6-c3837652ef3f?version=latest&workspace=e2932439-f8f1-4245-88af-4ee27d4e2260#9d690934-5752-4e7d-9be0-06f34519a1ae)

# To Install
- Download or clone
- Open terminal inside the root directory of clone folder
- Type `npm install` to install all dependencies
- `npm start` to run the app
- npm run `start:dev` to run development environment
- `npm test` to run the test suits on the app

##
API Endpoint: https://turing-ecommerce-backend.herokuapp.com

## AUTHOR
[Valentine Ezeh](https://github.com/valentineezeh/turing-backend)

