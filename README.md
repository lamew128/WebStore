# "Web Store"

App deployed: https://webstore-c908a.web.app/

## Overview

"Web Store" is clone of amazon(online store) which allow users to do online shopping simulation. Functions included register/login, adding items to basket, removing items from basket, viewing the basket and subtotal, payment process and viewing the order histories.

## Final Product

!["Screenshot of Home Page"](https://github.com/lamew128/WebStore/blob/main/screenshots/1.PNG)
!["Screenshot of Login Page"](https://github.com/lamew128/WebStore/blob/main/screenshots/2.PNG)
!["Screenshot of adding an item to the basket"](https://github.com/lamew128/WebStore/blob/main/screenshots/3.PNG)
!["Screenshot of Basket Page"](https://github.com/lamew128/WebStore/blob/main/screenshots/4.PNG)
!["Screenshot of Checkout Page"](https://github.com/lamew128/WebStore/blob/main/screenshots/5.PNG)
!["Screenshot of Order history Page"](https://github.com/lamew128/WebStore/blob/main/screenshots/6.PNG)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command in both / and /functions folder.
3. Create a firebase project.
4. Create a file called firebase.js in the src folder with the following code.
```
//import firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //firebase config from the firebase project goes here
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
```
5. Create a stripe account.
6. Create a file called .env in / with the following code.
```
REACT_APP_PK=//stripe publishable key goes here
```
7. Create a file called .env in /functions with the following code.
```
SK=//stripe secret key goes here
```
8. Use ```npm run build```in /functions to setup the backend.
9. Use npm start in / to run the app. default url: http://localhost:3000/

## Tech Stack

## dependencies

*Last updated Octeber 26, 2022*
