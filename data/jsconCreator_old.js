const lodash = require("lodash");
const path = require("path");
const fs = require("fs");
const { faker } = require("@faker-js/faker");
const { resolve, extend, JSONSchemaFaker } = require("json-schema-faker");
// extend("faker", () => faker);
JSONSchemaFaker.extend("faker", function () {
  return faker;
});
var schemaFolder = path.join(__dirname, "./schemas");
var schemas = [];
fs.readdirSync(schemaFolder).forEach((file) => {
  const schema = require(`${schemaFolder}/${file}`);
  schemas.push(schema);
});

const promises = schemas.map((file) => resolve(file));
Promise.all(promises)
  .then((data) => {
    const result = data.reduce((acc, curr) => {
      const key = Object.keys(curr);
      acc[key] = curr[key];
      return acc;
    }, {});
    console.log("result = ", result);
    writeToFile(result);
  })
  .catch((error) => console.log("error = ", error));
const writeToFile = (data) => {
  fs.writeFile(`${__dirname}/db1.json`, JSON.stringify(data), (err) => {
    if (err) {
      console.log("error = ", err.message);
    } else {
      console.log("Mock data generated to file ./db.json");
    }
  });
};
