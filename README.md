# Getting Started with My Create React App, which shows a product list with sort by name and filter by name. After login in with the email and password, you see a tabbar at the top of the page, The first one adds/edits, and the second one is a filter box with the name of the product.                                                                                         for adding a product, type name and price of it. for editing a product click on the edit icon of that specific product, then you see the name and price in the crud box, then click on the edit box


**** For the style I prefer tailwindcss and bootstrap, But you mentioned material UI and some where tailwindcss, so I used both. But for the cleanness of the code, I prefer one of them.

## Available Scripts

# I used json-server and json-server-auth for mock API, so run  first:

### `npm run server`      --> http://localhost:3000

then for the front end     

### `npm  run start`      --->open  http://localhost:3006 to view it in the browser.
**Note: for running in dev mode.**
mac :PORT=3006  react-scripts start
windows : set PORT=3006 &&  react-scripts start

**Note:  for DB server, I created db.json inside the data folder by running jsonGenerator.js file, if you want to create a new one  1. add "type": "module" inside the package.json file 2.go to the data folder and  run node jsonGenerator.js 3. if you want to use new 'db1.json' before running server, change db1.json---> db.json,because serve is using this one**


### `npm test`





