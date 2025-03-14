export default {
  props: {
    isModalOpen: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: Array,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
  computed: {
    costTotalPerItem() {
      return this.cart.map((item) => item.price * item.quantity);
    },
    costTotal() {
      return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
  },
  template:
    /* html */
    `
    <div class="modal" :class="{ show: isModalOpen, 'd-block': isModalOpen }" id="myModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
        <div class="modal-content">
          <div class="modal-body ">
            <form class="d-flex flex-column gap-3">
              <img class="align-self-start" src="../../assets/images/icon-order-confirmed.svg" />
              <div class="d-flex flex-column gap-2">
                <h3 class="h1 fw-bolder m-0">Order Confirmed</h3>
                <p class="m-0" style="color: hsl(12, 20%, 44%);">We hope you enjoy your food!</p>
              </div>
              <div>
                <ul style="gap: 0">
                  <li
                  v-for="(item, index) in cart"
                  :key="item.name"
                  class="d-flex p-4 modal-list-item"
                  style="background-color: hsl(20, 50%, 98%);"
                  >
                    <div class="d-flex gap-4 modal-list">
                      <img
                        style="border-radius: 10px; width 50px; height: 50px;"
                        :src="item.image.thumbnail"
                      />
                      <div class="d-flex flex-column justify-content-between">
                        <p class="m-0 fw-bolder">{{ item.name }}</p>
                        <div>
                          <span class="me-3" style="color: hsl(14, 86%, 42%)">{{ item.quantity }}x</span>
                          <span style="color: hsl(7, 20%, 60%);">@ &#36;{{ item.price.toFixed(2) }}</span>
                        </div>
                      </div>
                    </div>
                    <p class="m-0"><strong>&#36;{{ costTotalPerItem[index].toFixed(2) }}</strong></p>
                  </li>
                </ul>
                <div
                  class="d-flex justify-content-between align-items-center p-4"
                  style="background-color: hsl(20, 50%, 98%);"
                >
                  <span>Order Total</span>
                  <span class="h1"><strong>&#36;{{costTotal.toFixed(2) }}</strong></span>
                </div>
              </div>
              <button class="btn confirm-order-btn" @click="closeModal">Start New Order</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    `,
};
