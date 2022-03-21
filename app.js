
const express = require("express");
const {MongoClient} = require('mongodb');
const app = express();
  
app.get("/", (req, res) => {
  res.send("Hello World world!");
});

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function main() {
    const uri = "mongodb+srv://username:zYvs2NMwvRImDpfF@cluster0.9xaed.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    try {
    await client.connect();

    await listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);


console.log("asfas")
  
app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));