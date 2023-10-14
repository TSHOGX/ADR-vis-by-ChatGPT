const fs = require("fs");
const csv = require("csv-parser");

const inputFile = "quarcnt.csv"; // Replace with the path to your CSV file
const outputFile = "mockData.json";

const mockData = {};
let uniqueDrugCount = 0;

fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (row) => {
    const drugName = row.Concept_name;

    // Check if we have already encountered this drug
    if (uniqueDrugCount >= 10 || mockData[drugName]) {
      return; // Skip this drug if we have already reached 10 or if it's a duplicate
    }

    uniqueDrugCount++; // Increment the unique drug count
    // Loop through the CSV columns (quarters) and add data points
    for (const [key, value] of Object.entries(row)) {
      if (key === "Concept_name") {
        continue; // Skip the row with the "Concept_name" column
      }

      // Extract quarter information (e.g., "04Q1")
      const quarter = key;
      // Skip rows with empty quarters
      if (!quarter) {
        continue;
      }
      // Parse the value to a number (assuming it's numeric)
      const reports = parseFloat(value);

      // If the quarter doesn't exist in mockData, create it
      if (!mockData[quarter]) {
        mockData[quarter] = {};
      }

      // Add the ADR reports for the drug in the quarter
      mockData[quarter][drugName] = reports;
    }
  })
  .on("end", () => {
    // Convert the object into an array of objects
    const formattedData = Object.keys(mockData).map((quarter) => ({
      quarter,
      ...mockData[quarter],
    }));

    // Save the formatted data as JSON
    fs.writeFileSync(outputFile, JSON.stringify(formattedData, null, 2));
    console.log(`Data has been saved to ${outputFile}`);
  });
