let myName: string = "Kim";

let numberOfWheels: number = 4;
let isStudent: boolean = false;

console.log(myName);
const menu = [
    {
      name: "Margherita",
      price: 8,
    },
    {
      name: "Pepperoni",
      price: 10,
    },
    {
      naem: "Hawaiian",
      price: 10,
    },
    {
      name: "Veggie",
      price: 9,
    },
  ];
  
  let cashInRegister = 100;
  let nextOrderId = 1;
  const orderQueue = [];
  
  function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
  }
  
  function placeOrder(pizzaName) {
    const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    if(!selectedPizza) {
        return;
    }
  
    cashInRegister += selectedPizza.price;
    const newOrder = {
      id: nextOrderId++,
      pizza: selectedPizza,
      status: "ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
  }
  
  function completeOrder(orderId) {
    const order = orderQueue.find((order) => order.id === orderId);
    order.status = "completed";
    return order;
  }
  
  addNewPizza({
    name: "Chicken Bacon Ranch",
    cost: 12,
  });
  addNewPizza({
    name: "BBQ Chicken",
    cost: 12,
  });
  addNewPizza({
    name: "Spicy Sausage",
    cost: 11,
  });
  
  placeOrder("Chicken Bacon Ranch");
  completeOrder("1");
  
  console.log("Menu", menu);
  console.log("Cash in register: ", cashInRegister);
  console.log("Order queue: ", orderQueue);