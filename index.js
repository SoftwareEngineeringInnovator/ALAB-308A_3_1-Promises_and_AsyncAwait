console.log("Project: ALAB-308A_3_1-Promises_and_AsyncAwait");

// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

// Create Async function to get user information using their id
async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  // Get the database location by using their user id

  const databaseName = await central(id);
  console.log("ID", id, "located in Database:", databaseName);

  // Get the database function
  const selectedDatabase = dbs[databaseName];
  console.log("Database for user ID:", id, "is", selectedDatabase);

  // Select the database function using the user's id.
  // const basicInfo = await selectedDatabase(id);

  // Display user information.
  // console.log("Basic User Information:", basicInfo);

  // Select personal infromation from vault
  // const personalInfo = await vault(id); //--> returnedValue = personalInfo

  // Display personal infromation from vault
  // console.log("Personal User Information:", personalInfo); //--> returnedValue = personalInfo

  // implement Promise.all
  const [basicInfo, personalInfo] = await Promise.all(
    [selectedDatabase(id),
    vault(id),
  ]);
console.log("Basic Info:", basicInfo);

console.log("Personal Info:", personalInfo)
}
// run function
getUserData(8);

