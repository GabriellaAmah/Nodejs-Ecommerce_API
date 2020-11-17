import http from "http";
// eslint-disable-next-line node/no-extraneous-import
import mongoose from 'mongoose';
import app from "./app.js";

const server = http.createServer(app);
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
server.listen(port, () => {
  console.log(`this server is running on ${port}`);
});
