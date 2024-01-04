import jsf from "json-schema-faker";
import { schema } from "../data/dataSchema.js";
import fs from "fs";
import chalk from "chalk";
import faker from "faker";

jsf.extend("faker", () => faker);
const json = JSON.stringify(jsf(schema));

fs.writeFile("./db1.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
