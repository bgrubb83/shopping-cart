# Shopping cart web app

A shopping cart web app which meets the following criteria:

- It allows users to see products and their details
- It allows users to add a product to their shopping cart
- It allows users to see products in their shopping cart
- It allows users to remove one product from their cart
- It allows users to remove all products from their cart with a single action
- It allows users to increase and decrease the quantity of an item in the cart

## Tech stack

This web app was built using the following:

[create-react-app](https://create-react-app.dev/)  
[TypeScript](https://www.typescriptlang.org/)  
[Jest](https://jestjs.io/)  
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)  
[Cypress](https://www.cypress.io/)

## Running the web app locally

In order to run the web app locally, first run `npm install` to install all local dependencies. Then run `npn start` to start the packager running, which will build and host the web app on `http://localhost:3000`.

## Tests

Before attempting to run any tests first run `npm install` to install all local dependencies.

The web app features 19 unit tests written with Jest and React Testing Library. To run the unit tests enter `npn test` into the console while in the project root directory, and when prompted enter `a` to run all tests.

The web app also features 10 end to end tests written using Cypress. To run the end to end tests, enter `npx cypress open` into the console while in the project root directory in order to open the Cypress test runnner app. Once the test runner app is open, click the 'Run all specs' button to watch the tests run in the selected web browser.