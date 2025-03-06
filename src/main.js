import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  template:
    /* html */
    `
      <div class="container">
        <h1>Desserts</h1>
      </div>
    `,
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
}).mount("#app");
