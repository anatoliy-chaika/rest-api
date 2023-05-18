const mongoose = require("mongoose");
// s4ZlBmLujXYFx11L
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Anatoliy:s4ZlBmLujXYFx11L@cluster0.aohegko.mongodb.net/my_contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
