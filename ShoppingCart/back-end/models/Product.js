const products = [{
    id : "12121",
    name : "Laptop",
    price : 50000,
    currency : "INR",
    description : "Good Laptop",
    rating : 3.5
}];
class Product {
    constructor(id, name, price, currency,description , rating )
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.currency = currency;
        this.description = description;
        this.rating = rating;
    }
    
    addNewProduct(){
        products.push(this);
    }

    static fetchAllProducts()
    {
        return products.map( (item)=> {
            return {
                prod_id : item.id,
                prod_name : item.name,
                prod_price : item.price,
                prod_rating : item.rating
            }
        });
    }

    static fetchProductDetails( productId )
    {
        if( products.length > 0 )
        {
            const productData = products.find( (item) => item.id === productId  ); 
            return productData;
        }
        else
        {
            return null;
        }
    }

}
module.exports = Product;