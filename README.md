# Frontend Onboarding Project

In this project, you'll be implementing the required frontend pages to make a merchandise store function. This will be using the completed version of the [Backend Onboarding Project](https://github.com/acmucsd/backend-onboarding-project).

If you're looking for the slides for the presentation, check that out [here](https://docs.google.com/presentation/d/1wCQctWiGnaGwL1mQcVN4RsyiP7n8OjJZuGbOiJLCSPU)

## How to Run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## TODOS

### Note

This is a HUGE initial project to do. We're planning 2-3 weeks for each of you to work on this, although it's totally possible to finish this earlier. We **expect** and **want** you to ask us lots of questions! The best developers ask many questions, and understand that there's really no such thing as a *dumb* question.

Your task will be to implement all the pages as seen on [this Figma](https://www.figma.com/file/mcye5UnBFHUc0rGKmMtJ1m/Simple-Merch-Store?node-id=0%3A1).

### Setting up your Database

~below is copied from the backend project~

A diagram detailing the database structure can be found [here](https://dbdiagram.io/d/61db423ef8370f0a2ee93059).

- [ ] `GET /items` - returns a list of all the items
  - Response
    - an array of objects of the following shape
      - `uuid`: the uuid of the item
      - `name`: the name of the item
      - `price`: the price of the item
      - `createdAt`: the time the item was created
- [ ] `POST /item` - creates an item
  - Input (Body, in json or form data)
    - `name`: the name of the item
    - `description`: the description of the item
    - `price`: the price of the item
  - Response:
    - `uuid`: the newly created item's uuid
- [ ] `DELETE /items/:uuid` - deletes an item
  - Response:
    - non 200 status code if there was a failure, 200 status code if it suceeded
- [ ] `POST /order` - creates an order
  - Input (Body, in json or form data)
    - `itemId`: the uuid corresponding with the item
  - Note: to simplify things, we're going to assume that a call to this request assumes the user is going to buy *one* item at a time
  - Response:
    - `uuid`: the newly created order's uuid
- [ ] `GET /orders/:uuid`: returns the information associated with an item. To simplify things, we're not going to ask you to add any auth (though adding auth would be cool!)
  - Input (Body, in json or form data)
    - `user`: the uuid of the current user
  - Response
    - `uuid`: the order's uuid
    - `item`: the item that was purchased with this order
    - `price`: the price of the item that was purchased
    - `createdAt` the time the order was placed
- [ ] `POST /user`: creates a new user
  - Input (Body, in json or form data)
    - `name`: the user's name
  - Response:
    - `uuid`: the uuid of the user (used as an id for other methods)
- [ ] `GET /users`: gets all users (we're not worried about security for the scope of this project)
  - Response:
    - an array of objects of the following shape
      - `uuid`: a user's uuid
      - `name`: a user's name
- [ ] `GET /user/:uuid`: gets information about a user
  - Response:
    - `uuid`: the user's uuid
    - `name`: a user's name
    - `orders`: an array of all the orders associated with a user, each object in this array should have the following shape
      - `uuid`: the order's uuid
      - `item`: the item that was purchased with this order
      - `price`: the price of the item that was purchased
      - `createdAt` the time the order was placed


# Getting Started with Create React App


