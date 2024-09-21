
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

const orders = []; // Empty orders array
console.log(orders);

// Function to place an order using a traditional for loop with an index
function placeOrder(customerName, orderedItems) {
    // Check if all products are in stock
    for (let i = 0; i < orderedItems.length; i++) {
      const orderedProduct = orderedItems[i];
      const product = inventory.find(item => item.name === orderedProduct.name);
      
      if (!product) {
        console.error(`${orderedProduct.name} does not exist in the inventory.`);
        return; // Stop processing if a product doesn't exist
      }
      
      if (product.quantity < orderedProduct.quantity) {
        console.error(`Insufficient stock for ${orderedProduct.name}. Remaining stock: ${product.quantity}`);
        return; // Stop processing if stock is insufficient
      }
    }
  
    // Update inventory quantities
    for (let i = 0; i < orderedItems.length; i++) {
      const orderedProduct = orderedItems[i];
      const product = inventory.find(item => item.name === orderedProduct.name);
      product.quantity -= orderedProduct.quantity; // Deduct ordered quantity from inventory
    }
  
    // Add the new order to the orders array with status 'Pending'
    let newOrder = {
      customerName: customerName,
      items: orderedItems,
      status: 'Pending'
    };
  
    orders.push(newOrder);
    console.log(`Order placed successfully for ${customerName}.`);
  }
  
  // Example function call to place an order
  const orderedItems = [
    { name: 'Espresso', quantity: 2 },
    { name: 'Latte', quantity: 1 }
  ];
  placeOrder('Rafael', orderedItems);  // Passing 'Rafael' as the customerName
  


