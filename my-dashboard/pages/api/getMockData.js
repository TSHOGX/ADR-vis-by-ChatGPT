// pages/api/getMockData.js

import fs from "fs";
import path from "path";

export default (req, res) => {
  try {
    // Get the path to the mockData.json file
    const filePath = path.join(process.cwd(), "pages/api/mockData.json");

    // Read the JSON data from the file
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // Send the data as a JSON response
    res.status(200).json(jsonData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
