import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 4000;

import app from "./main.js"

app.listen(PORT, () => {
  console.log(`App is running at https://localhost:${PORT}`);
})