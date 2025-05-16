// TASK:
// Create a variable called loadingStatus that can only be one of the following string values:
// - "loading"
// - "success"
// - "error"
//
// Try assigning valid and invalid values to observe how TypeScript enforces literal types.

// Your code here 👇

let loadingStatus: "loading" | "success" | "error" = "loading";

// Valid assignments
loadingStatus = "success";
loadingStatus = "error";

// Invalid assignment (uncomment to see TypeScript error)
// loadingStatus = "complete"; // Error: Type '"complete"' is not assignable to type '"loading" | "success" | "error"'
