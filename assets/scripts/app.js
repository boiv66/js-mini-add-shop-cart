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

const productList = {
    products: [
        new Product(
            'A Tablet', 
            'https://www.renderhub.com/3dxin/apple-ipad-air-4-rose-gold-color/apple-ipad-air-4-rose-gold-color-01.jpg',
            549.99,
            'Ipad Air 4'
        ),

        {
            title: 'A Smartphone', 
            imgUrl: 'https://cdn.tgdd.vn/Files/2021/09/08/1381074/iphone_1280x720-800-resize.jpg', 
            price: 849.99, 
            description: 'Iphone 13'
        }
        
    ], 
    render() {
        const renderHolder = document.getElementById('app'); 
        const itemList = document.createElement('ul'); 
        itemList.className = 'product-list'; 
        for (const prod of this.products){
            console.log(prod.title);
            const item = document.createElement('li');
            item.className = "product-item";
            item.innerHTML = `
            <div>
                <img src="${prod.imgUrl}" alt="${prod.title}">
                <div class="product-item__content">
                    <h2>${prod.title}</h2> 
                    <h3>$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            `
            itemList.append(item); 
        }
        renderHolder.append(itemList);
    }
}

productList.render(); 