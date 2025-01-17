import { Widgets } from './dbConnecters';
class Product {
    constructor(id, {name, description, price, soldout, inventory, stores}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.soldout = soldout;
        this.stores = stores;
        this.inventory = inventory;
    }
}

const productDB = {};
const resolvers = {
    getProduct: async ({id}) => {
        try {
            const product = await Widgets.findById(id);
            return product;
        } catch(error) {
            throw new Error(error);
        }
    },
    createProduct: ({input}) => {
        // let id = require('crypto').randomBytes(10).toString('hex');
        // productDB[id] = input;
        // return new Product(id, input)
    }
}

export default resolvers;