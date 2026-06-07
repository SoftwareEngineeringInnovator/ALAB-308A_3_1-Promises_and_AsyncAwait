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
  console.log("ID located in Database:", databaseName);

}
// run function
getUserData(8);

