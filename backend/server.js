const express = require("express");
const cors = require("cors");
const apiRoutes = require("./api");

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors());

// Parse JSON request body
app.use(express.json());

// Mount API routes
app.use("/api", apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
