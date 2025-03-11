export default {
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  methods: {
    decrementCart(index) {
      this.$emit("decrement-cart", index);
    },
  },
  computed: {
    totalCart() {
      let total = 0;

      this.cart.forEach((cart) => {
        total += cart.quantity;
      });

      return total;
    },
    totalCost() {
      return this.cart.map((item) => item.price * item.quantity);
    },
  },
  template:
    /* html */
    `
      <aside class="cart-container bg-white ms-0">
        <h2 class="h4 m-0" style="color: hsl(14, 86%, 42%); font-weight: 700;">Your cart({{ totalCart }})</h2>
        <div v-if="cart.length === 0" class="d-flex flex-column align-items-center mt-4 gap-4">
          <img src="../../assets/images/illustration-empty-cart.svg" class="" />
          <p style="color: hsl(12, 20%, 44%); font-size: 14px; font-weight: 600;">Your added items will appear here</p>
        </div>
        <div v-else>
          <ul>
            <li v-for="(item, index) in cart">
              <div class="d-flex flex-column gap-2">
                <h3>{{ item.name }}</h3>
                <div class="span-group">
                  <span class="item-quantity">{{ item.quantity }}x</span>
                  <span class="item-price">@ &#36;{{ item.price.toFixed(2) }}</span>
                  <span class="total-price">&#36;{{ totalCost[index].toFixed(2) }}</span>
                </div>
              </div>
              <button type="button" class="remove-btn" @click="decrementCart(index)">
                <img src="../../assets/images/icon-decrement-quantity.svg" />
              </button>
            </li>
          </ul>
        </div>
      </aside>
    `,
};
