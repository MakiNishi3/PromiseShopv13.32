// PromiseShop.js
class PromiseShopClass {
  constructor() {
    this.store = new Map();
  }

  add(id, data) {
    return new Promise((resolve) => {
      this.store.set(id, data);
      resolve(data);
    });
  }

  remove(id) {
    return new Promise((resolve) => {
      const res = this.store.delete(id);
      resolve(res);
    });
  }

  slider({ min = 0, max = 100, value = 0 }) {
    return { type: "slider", min, max, value };
  }

  boolean(value = false) {
    return { type: "boolean", value };
  }

  enum(options = [], value = null) {
    return { type: "enum", options, value };
  }

  color(value = "#000000") {
    return { type: "color", value };
  }

  textarea(value = "") {
    return { type: "textarea", value };
  }
}

const PromiseShop = new PromiseShopClass();

export { PromiseShop };
