class Product{
    title = 'DEFAULT'; 
    imgUrl; 
    description; 
    price;
    constructor (title, imgUrl, des, price){
        this.title = title; 
        this.imgUrl = imgUrl; 
        this.description = des, 
        this.price = price; 
    }
}

class ProductItem{
    constructor(prod){
        this.prod = prod; 
    }
    addToCart(){
       App.addProductToCart(this.prod);
    }
    render(){
        const item = document.createElement('li'); 
        item.className = 'product-item'; 
        item.innerHTML = `
        <div>
            <img src="${this.prod.imgUrl}" alt="${this.prod.title}">
            <div class="product-item__content">
                <h2>${this.prod.title}</h2> 
                <h3>$${this.prod.price}</h3>
                <p>${this.prod.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
        `
        const addCartButton = item.querySelector('button'); 
        addCartButton.addEventListener('click', this.addToCart.bind(this))

        return item;
    }
}
class ShoppingCart{
    item = [];

    set cartItem(value){
        this.item = value; 
        this.total.innerHTML = `<h2>Total: $${this.totalPurchase.toFixed(2)} </h2>`

    }

    get totalPurchase(){
        const sum = this.item.reduce((prev,current) => prev + current.price,0); 
        return sum; 
    }
    
    addProd(product){
        const updatedItem = [...this.item]; 
        updatedItem.push(product); 
        this.cartItem = updatedItem; 
       
    }

    order(){
        console.log('order successfully');
        console.log(this.item);
    
    }

    render(){
        const cart = document.createElement('section'); 
        cart.innerHTML = `
        <h2>Total: $${0}</h2>
        <button>Order Now!</button>
        `;
        cart.className = 'cart'; 
        const orderButton = cart.querySelector('button'); 
        orderButton.addEventListener('click', () => this.order());
        this.total = cart.querySelector("h2");
        return cart; 

    }
}
class ProductList {
    products = [
        new Product(
            'A Tablet', 
            'https://www.renderhub.com/3dxin/apple-ipad-air-4-rose-gold-color/apple-ipad-air-4-rose-gold-color-01.jpg',
            'Ipad Air 4', 
            549.99,
        ),

        new Product(
            'A Smartphone', 
            'https://cdn.tgdd.vn/Files/2021/09/08/1381074/iphone_1280x720-800-resize.jpg', 
            'Iphone 13', 
            849.99
        )
        
    ]; 

    constructor() {}

    render() {
        
        const itemList = document.createElement('ul'); 
        itemList.className = 'product-list'; 
        for (const prod of this.products){
            console.log(prod.title);
            const item = new ProductItem(prod);
            const itemObj = item.render(); 
            
            itemList.append(itemObj); 
        }
        return itemList; 
    }

}

class Shop{
   render(){
        const renderHolder = document.getElementById('app'); 
        this.cart = new ShoppingCart();
        const cartElement = this.cart.render(); 
        const productList = new ProductList(); 
        const prodListEl = productList.render(); 
        
        renderHolder.append(cartElement);
        renderHolder.append(prodListEl);
       
   } 
}

class App{
    static cart; 

    static init(){
        const shop = new Shop(); 
        shop.render(); 
        this.cart = shop.cart;
        

    }

    static addProductToCart(product){
        this.cart.addProd(product);
    }

}

// const shop = new Shop(); 
// shop.render(); 

App.init();
