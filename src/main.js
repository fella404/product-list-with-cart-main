import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import ProductDisplay from "./components/ProductDisplay.js";
import Cart from "./components/Cart.js";
import OrderModal from "./components/OrderModal.js";

createApp({
  components: {
    ProductDisplay,
    Cart,
    OrderModal,
  },
  data() {
    return {
      data: [],
      cart: [],
      isModalOpen: false,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("../data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.data = await response.json();
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
      }
    },
    addToCart(data) {
      const existingProduct = this.cart.find((item) => item.name === data.name);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        this.cart.push({ ...data, quantity: 1 });
      }
    },
    decrementCart(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      } else {
        this.cart.splice(index, 1);
      }
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  template: `
    <h1>Desserts</h1>
    <main>
      <product-display :productData="data" @add-to-cart="addToCart" style="flex: 3;"></product-display>

      <cart :cart="cart" @decrement-cart="decrementCart" @open-modal="openModal" style="flex: 1; align-self: flex-start;"></cart>

      <order-modal :cart="cart" :is-modal-open="isModalOpen" @close-modal="closeModal"></order-modal>
    </main>
  `,
}).mount("#app");
