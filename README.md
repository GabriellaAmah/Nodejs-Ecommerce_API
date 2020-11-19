# Nodejs-Ecommerce_API

## Overview

This API performs basic **CRUD** operation of an e-commerce web-application which includes :

- Create products
- Read products
- Update products
- Delete products
- Add products to cart

This API also implements **Authentication** and **Authorization** of users.

## Try it out

For a demo check this link
<https://ecommerce-store-api.herokuapp.com>

## Getting Started

These instructions will get a copy of the project up and running on your machine for development.

##### Requirements

To run this project locally, the following tools needs to be installed

- Node.js
- Yarn
- MongoDB

##### Installation

Clone this repository

`git clone https://github.com/GabriellaAmah/Nodejs-Ecommerce_API.git`

Move into the project directory and install its dependencies

`yarn install`

To start the dev API server run this command

`yarn dev`

Navigate to <localhost:3000> to see the API

## Documentation

##### Setting up Config

Navigate to `config.env` file and set up the missing environment variables which includes

- **PORT** : this is optional or you can set it to `3000`
- **MONGO_URL** : use your local MongoDb url which should like this `mongodb://localhost:27017/**Database_name**`
- **SECRET_KEY** : this could be any value e.g "onlineStore"

#### Registration

Since this API makes use of Authentication, you need to be a registered user before you make **CRUD** operations to the API

###### Signup

Make a post request to :

```
/auth/signup
```

Input the following data

- name
- email
- password

###### Login

Make a post request to :

```
/auth/login
```

Input the following data

- email
- password

A **JWT TOKEN** will be provided for you in the response. Intially, the API will save the **JWT TOKEN** in the cookies so you do not have to set it again in the frontend

#### Create products

Make a post request to :

```
/admin/post-product
```

Input the following data

- name
- price
- image (optional)
- category (optional)
- description (optional)

**Images should be uploaded through a file picker from the frontend**

#### Update products

Make a patch request to :

```
/admin/edit/<product_id>
```

Input the following data

- name (optional)
- price (optional)
- image (optional)
- category (optional)
- description (optional)

#### Delete products

Make a delete request to :

```
/admin/delete/<product_id>
```

#### Get products

Make a get request to :

```
/shop/products
```

#### Get products by ID

Make a get request with the ID of the product to :

```
shop/product/detail/<product_Id>
```

#### Get products in the same category

Make a get request with the category included in the query :

```
shop/product?category=<mycategory>
```

#### Add product to Cart

Make a post request with the ID of the product :

```
/cart/<product_id>
```

#### Get product from Cart

Make a get request to

```
/cart
```

#### Delete a product from Cart

Make a delete request to

```
/cart/delete/<product_id>
```
