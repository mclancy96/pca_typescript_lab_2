// TASK:
// 1. Define a type (using type alias) for a `User` with the following properties:
//    - `id`: number
//    - `email`: string
//    - `displayName`?: string (optional)
//
// 2. Create two variables of type `User`:
//    - One user with a displayName
//    - One user without a displayName

// Your code here 👇

type User = {
  id: number;
  email: string;
  displayName?: string;
};

const userWithoutName: User = {
  id: 3,
  email: "hi@go.com",
};

const userWithName: User = {
  id: 4,
  email: "there@go.com",
  displayName: "there",
};
