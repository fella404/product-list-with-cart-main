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
  methods: {},
  template: `
    <div class="fluid-container">
      <h1>Desserts</h1>
      <main>
        <product-display :productData="data"></product-display>
        <cart></cart>
      </main>
    </div>
  `,
}).mount("#app");
