# React App practical

This project built with

```sh
node: 18.12.0
npm:  8.19.2
react 18.2.0
```

### START API : json-Server
 Go to `json-server` folder 
 ```
 cd praoshealth-react/json-server
 ```
 install dependency using `npm install` command.
 After successfully install dependency start server using `npm start` command
APi server will run on [http://localhost:3010](http://localhost:3010)

### REACT Project Setup
Go to folder
```
> cd praoshealth-react
```
Run this command to copy env file
```
> cp example.env .env
```
Now, you can change  `REACT_APP_API_URL` Param As per our JSON-API base URL in `.env` file

### `npm install`
##### To install dependency run above command 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

-`How did you decide which technologies to use as part of your solution?`
- As per task definition we need one single page application which is to build fast, scalable, and simplified user interface.

- Here is list of packages we used to decide

    - `craco`- Get all the benefits of Create React App and customization without using 'eject' by adding a single configuration

    - `eslint`- Follow patterns found in ECMAScript/JavaScript code

    - `redux` package for global state management and easy code manage and `@reduxjs/toolkit`  which takes advantage of React Redux's integration with React components.
    
    - We are using `lazy routing` to boost the performance 
    - Added `404` error router to handle dummy route
    


`Are there any improvements you could make to your submission?`
`What would you do differently if you were allocated more time?`
##### Still there are some improvement in this submission
- We can add Global error handling with `Error Boundary`
    - For prevent app crashes by catching Javascript errors at the higher application level
- We can add lazy-search in candidate select box
    - If there are more than X candidate record, So we will load limited record using `lazy-auto-search`
- We can improve validation
    - We can Improve client side validation with `JOI` library for batter prevention, Like currently We Allow all character in comment section, Using `JOI regex` we can set validation
- Memorize function to improve performance
    - `UseMemo` and `memo` Use for Memorize lengthy calculation function, We can use this react functionality to improve performance
- We can Implement cashing to prevent API calling
    - Currently Every candidate selection we are calling API, Using cashing functionality we can prevent Extra API call 
- We can add lazy loading on question list
    - Currently there are limited questions, But in-case There are more than X record in future than we can Implement lazy loading And pagination for that to improve performance
- Instead of getting all data in single API, we can only get questions and, click on question we can load video and comment part to improve performance

##### So, i can work on above improvement points if i get more time