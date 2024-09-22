
// Task 1- Creating an Inventory Array of Product Objects

const inventory =  [
    { name: "Espresso", price: 5, quantity: 20 },
    { name: "Latte", price: 4, quantity: 50},
    { name: "Cappuccino", price: 4, quantity: 55 },
    { name: "Mocha", price: 5, quantity: 45 },
    ];

// To display array of inventory
console.log(inventory);



// Task 2- Creating an Orders Array of Order Objects

const orders = []; 
console.log(orders);



// Task 3 - Creating a Function to Place an Order

// Function to place an order using a loop with an index
function placeOrder(customerName, orderedItems) {
let processedItems = [];

    // Checking if ordered products are in stock
    for (let i = 0; i < orderedItems.length; i++) {
      let orderedProduct = orderedItems[i];
      let product = inventory.find(item => item.name === orderedProduct.name);

      if (!product) {
        console.log(`Order placed for "${orderedProduct.name}" does not exist`);
      }
      
      else if (orderedProduct.quantity > product.quantity) {
        console.log(`Insufficient stock for ${orderedProduct.name}`);
      }

      else {
        product.quantity -= orderedProduct.quantity; 

        processedItems.push(orderedProduct);
    }}

    if (processedItems.length > 0) {

    // Adding the new order to the orders array with status 'Pending'
    let newOrder = {
      customerName: customerName,
      items: processedItems,
      status: "Pending"
    };

    // Pushing valid orders into the system
    orders.push(newOrder);
    console.log(`Order placed for ${customerName}`);
  }
  else {
    console.log(`No orders processed for ${customerName}`)
  }}
// Calling function to place an order
const orderedItems = [
    {name: "Espresso", quantity: 5},
    {name: "Mocha", quantity: 46},
    {name: "Latt", quantity: 1}
  ];
  placeOrder('Rafael', orderedItems);  // Customer ordering



// Task 4 - Create a Function to Calculate Total for an Order
 
function calculateOrderTotal (order) {
let total = 0 // Assuming initial total to be 0

   order.items.forEach(orderedProduct => {
    let product = inventory.find(item => item.name === orderedProduct.name);

    if (product) {
      total += orderedProduct.quantity * product.price;
    }
  });
  return total;  // Return the total price of the order
}

// Example: Calculate the total for Rafael's order
let total = calculateOrderTotal(orders[0]);
   console.log(`Total for Rafael's order: $${total}`);


// Task 5 - Creating a Function to Mark an Order as Completed

function completeOrder (customerName) {

    // Finding orders by customer name
    let order = orders.find(order => order.customerName === customerName)

    if (order) {
        (order.status = "Completed");
    console.log(`Order for ${customerName} has been completed`);
}
    else {
        console(`No order found for ${customerName}`);
    }
}
completeOrder("Rafael");
