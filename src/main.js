import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import ProductDisplay from "./components/ProductDisplay.js";
import Cart from "./components/Cart.js";

createApp({
  components: {
    ProductDisplay,
    Cart,
  },
  data() {
    return {
      data: [],
      cart: [],
    };
  },
  mounted() {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
      })
      .catch((err) => console.error(`Error: ${err}`));
  },
  methods: {
    addToCart(data) {
      const existingProduct = this.cart.find((item) => item.name === data.name);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        this.cart.push({
          name: data.name,
          price: data.price,
          quantity: 1,
        });
      }
    },
    decrementCart(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      } else {
        this.cart.splice(index, 1);
      }
    },
  },
  template: `
    <h1>Desserts</h1>
    <div style="display: flex; gap: 1.3rem;">
      <product-display :productData="data" @add-to-cart="addToCart" style="flex: 2;"></product-display>
      <cart :cart="cart" @decrement-cart="decrementCart" style="flex: 1; align-self: flex-start;"></cart>
    </div>
  `,
}).mount("#app");
