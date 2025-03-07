export default {
  props: {
    productData: {
      type: Array,
      required: true,
    },
  },
  template:
    /* html */
    `
    <div class="product-container">
      <div class="card" v-for="(datum, index) in productData" :key="index">
      <img class="card-img" :src="datum.image.mobile" :alt="datum.name" />
      <div class="card-body">
        <span style="color: hsl(12, 20%, 44%); font-size: 14px; font-weight: normal">{{ datum.category }}</span>
        <span style="color: hsl(14, 65%, 9%); font-weight: 600">{{ datum.name }}</span>
        <span style="color: hsl(14, 86%, 42%); font-weight: 600">
          &#36;{{ datum.price.toFixed(2) }}
        </span>
      </div>
      <button class="btn" type="button">
        <img src="../../assets/images/icon-add-to-cart.svg">
        Add to Cart
      </button>
      </div>
    </div>
  `,
};
