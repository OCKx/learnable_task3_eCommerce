// Build a simple e-commerce console application

//building project with what we where tought
    //variables
    //control flow
    //objects
    //loops
    //functions
    //arrays

//models to use
//products
//categories
//cart
//order
//user


console.log("WELCOME TO CALLISTUS MARKET PLACE");
console.log("==================================");
const readlineSync = require('readline-sync');

//model: user
const users = [
    {
        id: 11,
        username: "obi",
        password: 1234,
    },
    {
        id: 212,
        username: "Ada",
        password: 6788
    }
]

//model: categories
const categories = [
    {
        id: 1,
        name: 'foodstuffs'
    },
    {
        id: 29,
        name: 'fashion'
    }
]

//model: product
const products = [
    {
        id: 98,
        name: "rice",
        price: 2000,
        description: "foreign rice",
        category: categories[0].name
    },
    {
        id: 478,
        name: "rice",
        price: 2200,
        description: "local rice",
        category: categories[0].name
    },
    {
        id: 4,
        name: "beans",
        price: 3400,
        description: "iron beans",
        category: categories[0].name
    },
    {
        id: 3,
        name: "T shirt",
        price: 1500.45,
        description: "t shirt for men",
        category: categories[1].name
    }
]

//model: cart
const cart = [
    {
        id: 20,
        userid: users[0].id,
        user: users[0].username,
        productID: products[0].id,
        price: products[0].price,
        selectedProduct: products[0].name,
        quantity: 2
    },
    {
        id: 105,
        userid: users[1].id,
        user: users[1].username,
        productID: products[1].id,
        price: products[1].price,
        selectedProduct: products[0].name,
        quantity: 1
    },
    {
        id: 1055,
        userid: users[1].id,
        user: users[1].username,
        productID: products[2].id,
        price: products[2].price,
        selectedProduct: products[2].name,
        quantity: 17
    }
]

//model: order
let totalA = cart[1].price * cart[1].quantity;
let totalB = cart[2].price * cart[2].quantity;
let total = totalA + totalB;
const orders = [
    {
        id: 11346,
        user: cart[0].user,
        userID: `${cart[0].userid}`,
        orderPlaced: `(${cart[0].productID})${cart[0].selectedProduct} - #${cart[0].price}`,
        quantity: cart[0].quantity,
        totalPrice: `#${cart[0].price * cart[0].quantity}`,
        orderCompleted: false,
    },
    {
        id: 44321,
        user: cart[1].user,
        userID: `${cart[1].userid}`,
        orderPlaced: `(${cart[1].productID})${cart[1].selectedProduct} - #${cart[1].price}, (${cart[2].productID})${cart[2].selectedProduct} - #${cart[2].price}`,
        quantity: `${cart[1].selectedProduct} - ${cart[1].quantity}, ${cart[2].selectedProduct} - ${cart[2].quantity}`,
        totalPrice: `${cart[1].selectedProduct} - #${totalA}, ${cart[2].selectedProduct} - #${totalB} = #${total}`,
        orderCompleted: true,
    }
]


//display categories
displayCategories = () => {
    console.log("\nPRODUCTS CATEGORIES");
    for (let items = 0; items < categories.length; items++) {
        const productCate = categories[items].name;
        console.log(`${items + 1}. ${productCate}`);
    }
}

//display all avalaible products
displayProducts = () => {
    console.log("\nLIST OF AVALAIBLE PRODUCTS");
    for (let items = 0; items < products.length; items++) {
        const product = products[items];
        console.log(`${items + 1}. ${product.name} (${product.category}): ${product.description} ----- #${product.price}`);
    }
}

//display cart
displayCart = () => {
    console.log("\nCART");
    for (let items = 0; items < cart.length; items++) {
        const cartItems = cart[items];
        console.log(cartItems);
    }
}

//display orders
displayOrders = () => {
    console.log("\nADMIN PANEL");
    console.log("LIST OF ALL ORDERS");
    for (let items = 0; items < orders.length; items++) {
        const orderList = orders[items];
        console.log(orderList);
    }
}

//search by products name or products categories
search = () => {
    console.log("\nSEARCH BY PRODUCT'S NAME OR CATEGORY");
    let searchItem = readlineSync.question("").toLowerCase();
    console.log("\nSEARCH RESULT");
    for (let items = 0; items < products.length; items++) {
        const product = products[items];
        const searchProduct = products[items].name;
        const searchCategory = products[items].category;
        if (searchItem === searchProduct || searchItem === searchCategory) {
            console.log(product);
        }
    }
}

    
//menu
    //1-to view products
    //2-search for products
    //3-view products by categoris
    //4-add to cart
    //5-login as admin to view orders

cartegoryMenu = () => {
    console.log("\nselect an optionto view it's product");
    let cateBar = readlineSync.questionInt();
    switch (cateBar) {
        case 1:
            for (let items = 0; items < products.length; items++) {
                const element = products[items];
                const seartCart = products[items].category;
                if (seartCart === "foodstuffs") {
                    console.log(element);
                }
            }
            break;
        case 2:
            for (let items = 0; items < products.length; items++) {
                const element = products[items];
                const seartCart = products[items].category;
                if (seartCart === "fashion") {
                    console.log(element);
                }
            }
            break
        default:
            console.log("invalid choice. Please try again.");
    }
}

addToCart = () => {
    console.log("\nADD ITEM TO CART");
    displayProducts();
    const productIndex = readlineSync.questionInt("Enter the product number to add to the cart: ") - 1;
    if (productIndex >= 0 && productIndex < products.length) {
        const quantity = readlineSync.questionInt("Enter the quantity: ");
        if (quantity > 0) {
            const selectedProduct = products[productIndex];
            const cartItem = {
                id: cart.length + 1,
                userid: undefined,
                user: undefined,
                productID: selectedProduct.id,
                price: selectedProduct.price,
                selectedProduct: selectedProduct.name,
                quantity: quantity
            };

            cart.push(cartItem);
            console.log(`Added ${quantity} ${selectedProduct.name}(s) to the cart.`);
            console.log(cart[3]);;
        } else {
            console.log("Invalid quantity. Please try again.");
        }
    } else {
        console.log("Invalid product number. Please try again.");
    }
}


menu = () =>{
    console.log("\nMENU");
    console.log("1 - View by category \n2 - Search \n3 - Add Item to Cart \n4 - View list of oders \n5 - Exit");
    console.log("\nselect an option by it's number");
    let menuBar = readlineSync.questionInt();
    
    switch (menuBar) {
        case 1:
            displayCategories();
            cartegoryMenu();
            break;
        case 2:
            search();
            break;
        case 3:
            addToCart();
            break;
        case 4:
            console.log("\nLOGIN");
            console.log("(username: admin, password: 1234)");
            console.log("\nusername:");
            let username = readlineSync.question("").toLowerCase();
            console.log("password:");
            let password = readlineSync.questionInt();
            if (username === "admin" && password === 1234) {
                displayOrders();
            }
            break;
        case 5:
            console.log("Thanks and Goodbye");;
        default:
            console.log("Invalid choice. Please try again.");
    }
}

eCommerceApp = () => {
    displayProducts();
    menu();
}

eCommerceApp()
