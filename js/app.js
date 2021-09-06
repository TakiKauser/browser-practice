// ৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 

// ১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে। 
const displayLocalStorageCartItems = () => {
    const cartItems = getCart();
    // console.log(cartItems);
    // console.log(Object.keys(cartItems), Object.values(cartItems));
    console.log(Object.keys(cartItems).length)
    for(const item in cartItems){
        // console.log(cartItems.indexOf(item));
        console.log(Object.keys(cartItems)[0], Object.values(cartItems)[0]);
        // console.log(item);
        displayProducts(item.key, item.value);
    }
}
const displayProducts = (product, price) => {
    const ul = document.getElementById("items");

    const li = document.createElement("li");

    li.innerText = `Product: ${product} || Price: ${price}`;

    ul.appendChild(li);
}


const getCart = () => {
    const cart = localStorage.getItem("cartItem");

    let cartObj;

    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    // console.log(cart, cartObj);
    return cartObj;
}
const setLocalStorage = (product, price) => {
    const cart = getCart();
    // const currentCart = {...cart};
    // console.log(cart[product], cart[price]);

    if (isNaN(cart[product]) && cart[price]) {
        cart[product] = price;
        // cart[price] += price;
    }
    else {
        cart[product] = price;
        // cart[price] = price;
    }

    const cartStringified = JSON.stringify(cart);
    console.log(cartStringified);
    localStorage.setItem("cartItem", cartStringified);
}

const getInputData = () => {
    const productField = document.getElementById("product-name");
    const priceField = document.getElementById("product-price");

    const product = productField.value;
    const price = priceField.value;

    displayProducts(product, price);
    setLocalStorage(product, price);

    productField.value = "";
    priceField.value = "";
}

document.getElementById("cart-item").addEventListener("click", () => {
    getInputData();
});
displayLocalStorageCartItems();