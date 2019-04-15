import Component from "./component.js";

export default class ShoppingCart extends Component {
  constructor({ element }) {
    super({ element });
    this._render();
  }

  addToCart(name) {
    const list = this._element.querySelector('[data-element="cart-list"]');
    list.insertAdjacentHTML('beforeend', `<li>${name}</li>`);
  }
  _render() {
    this._element.innerHTML = `
      <p>Shopping Cart</p>
      <ul data-element="cart-list">
          <li>Phone 1</li>
          <li>Phone 2</li>
          <li>Phone 3</li>
      </ul>
      `
  }
}
