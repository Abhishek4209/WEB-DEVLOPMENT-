class Product{
    name;
    price;
    category;
    description;
    rating;

    addToCart(){
        console.log("Product added to cart");
    }

    removeFromCart(){
        console.log("Product removed from cart");
    }

    displayProduct(){
        console.log('Product display');
    }

    buyProduct(){
        console.log('Product bought');
    }
}

let iphone= new Product();
iphone;
