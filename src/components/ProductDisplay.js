export default {
  props: {
    productData: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addToCart(data) {
      this.$emit("add-to-cart", data);
    },
  },
  template:
    /* html */
    `
    <div class="product-container">
      <div class="card" v-for="item in productData" :key="item.name">
        <img class="card-img" :src="item.image.mobile" :alt="item.name" />
        <div class="card-body">
          <span style="color: hsl(12, 20%, 44%); font-size: 14px; font-weight: normal">
            {{ item.category }}
          </span>
          <span style="color: hsl(14, 65%, 9%); font-weight: 600">{{ item.name }}</span>
          <span style="color: hsl(14, 86%, 42%); font-weight: 600">
            &#36;{{ item.price.toFixed(2) }}
          </span>
        </div>
        <button class="btn add-to-cart-btn" type="button" @click="addToCart(item)">
          <img src="../../assets/images/icon-add-to-cart.svg">
          Add to Cart
        </button>
      </div>
    </div>
  `,
};
