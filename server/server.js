const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

app.use(cors());

connectDB();

app.use(express.json({ extended: false }));

const users = require("./routes/users");
const login=require("./routes/login");

app.use("/api/users", users);
app.use('/api/users/auth',login);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
