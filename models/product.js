export default class Product {
    constructor(title, price, category) {
        this.title = title;
        this.price = parseFloat(price);
        this.category = category;
    }

    static convertApiData(apiProduct) {
        return {
            id: apiProduct.id,
            title: apiProduct.title, 
            price: apiProduct.price, 
            category: apiProduct.category
        };
    }
}