// BONUS TASK:
// 1. Create a type alias called CartItem with the following properties:
//    - productId: number
//    - name: string
//    - quantity: number
//    - price: number
//
// 2. Create an array called cart that contains multiple CartItems.
//
// 3. Create a function called calculateTotal that:
//    - takes the cart array
//    - returns the total cost (sum of quantity × price for each item)

// Your code here 👇

type CartItem = {
  productId: number;
  name: string;
  quantity: number;
  price: number;
};

const cart: CartItem[] = [
  {
    productId: 342,
    name: "Peanuts",
    quantity: 32,
    price: 6.42,
  },
  {
    productId: 123,
    name: "Chocolate Bar",
    quantity: 5,
    price: 2.99,
  },
  {
    productId: 456,
    name: "Coffee Beans",
    quantity: 2,
    price: 12.5,
  },
  {
    productId: 789,
    name: "Organic Bananas",
    quantity: 8,
    price: 0.75,
  },
  {
    productId: 234,
    name: "Whole Wheat Bread",
    quantity: 1,
    price: 3.49,
  },
];

const calculateTotal = (cart: CartItem[]) => {
  return cart.reduce((sum, item) => (sum += item.price * item.quantity), 0);
};
