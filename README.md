# Getting Started with Gen App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run it following these steps:


## Step 1 Env Variables

Rename the `example.env` file to `.env`. It should look like this

```
NODE_ENV=production

PORT=5000

MONGO_URI=mongodb+srv://kaixiang980117:kaixiang980117@cluster0.12qrlwu.mongodb.net/gen?retryWrites=true&w=majority

JWT_SECRET=abc123

PAYPAL_CLIENT_ID=AS_rsyJlc6JDSCr086x1gUV3Wi0QUU-DicB6F-iDfLR3dRjFpFK07roR1Civ4oeDiNsen88fFW8aoT0t

PAYPAL_APP_SECRET=EF5BIE9SZaFlvNxuxqDwKaG7a0HDFuriI31h5U-I3MQNO4vPCARLQnoJTlt8CAd2_leyZ9mbqPBVOcFB

PAYPAL_API_URL=https://api-m.sandbox.paypal.com

PAGINATION_LIMIT=4
```

## Step 2 Install Dependencies (both frontend and backend)

```
npm run build
```

## Step 3 Run the Production server

```
#Run backend

npm run server
```
Open [http://localhost:5000](http://localhost:5000) to view it in your browser where it will show that the "API is running". Which means backend successfully ran.

## Seeder (Optional)

To be able to delete all datas imported to MongoDB from backend/data/products.js.\
After this, it will not show anything on the webpage.

```
npm run data:delete
```

To import data from backend/data/products.js to MongoDB.

```
npm run data:import
```

## PayPal Sandbox Account

Please copy this for checking out with PayPal after adding items to cart

email

```
sb-aizbw29922362@personal.example.com
```

password

```
#u?8Pi!z
```

## Admin Account to sign into system

Please copy these username in order to sign into the system as Admin

username

```
admin@gmail.com
```

password

```
123456
```

## YouTube Link

```
https://youtu.be/GshH54f-9wI
```
