import * as fb from 'firebase';

class Product {
    constructor(ownerId, title, description, price, imageSrc = '', promo = false, id = null) {
        this.title = title,
            this.description = description,
            this.price = price,
            this.id = id,
            this.imageSrc = imageSrc,
            this.promo = promo,
            this.ownerId = ownerId
    }
}

export default {
    state: {
        products: [],
        cart: [

        ],
    },
    mutations: {
        addToCart(state, item) {
            state.cart.push(item);
        },
        deleteCartItem(state, item) {
            let index = state.cart.indexOf(item);
            state.cart.splice(index, 1);
        },
        createProduct(state, item) {
            state.products.push(item);
        },
        loadProducts(state, item) {
            state.products = item;
        }
    },
    actions: {
        async fetchProducts({
            commit
        }) {
            const resultProducts = [];
            try {
                const productsVal = await fb.database().ref('products').once('value');
                const products = productsVal.val();
                Object.keys(products).forEach(key => {
                    const product = products[key];
                    resultProducts.push(new Product(
                        product.ownerId,
                        product.title,
                        product.description,
                        product.price,
                        product.imageSrc,
                        product.promo,
                        key
                    ));
                    commit('loadProducts', resultProducts);
                });
                console.log(products);
            } catch (error) {
                console.log(error);
            }
        },
        async srat({
            getters,
            commit
        }, item) {
            const image = item.image;
            try {
                const newproduct = new Product(
                    getters.user.id,
                    item.title,
                    item.description,
                    item.price,
                    '',
                    item.promo
                );
                let product = await fb.database().ref('products').push(newproduct);
                const imageExt = image.name.slice(image.name.lastIndexOf('.'));
                const fileData = await fb.storage().ref(`product/${product.key}.${imageExt}`).put(image);
                const imageSrc = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL();
                await fb.database().ref('products').child(product.key).update({
                    imageSrc
                });

                commit('createProduct', {
                    ...newproduct,
                    id: product.key,
                    imageSrc
                });
                console.log(product);
                console.log(newproduct.id);
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        cartProducts(state) {
            return state.cart;
        },
        products(state) {
            return state.products;
        },
        productById(state) {
            return productId => {
                return state.products.find(product => product.id === productId);
            };
        },
        productPromo(state) {
            return state.products.filter(product => {
                return product.promo;
            });
        }
    },
};