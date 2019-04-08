export default class Component {
    constructor({ element }) {
        this._element = element;
    }

    on(eventName, selector, callback) {
        this._element.addEventListener('click', (event) => {
            const delegatedTarget = event.target.closest(selector);
            if (!delegatedTarget) {
                return;
            }
            callback();
        });
    }
    
    hide() {
        this._element.hidden = true;
    }

    show() {
        this._element.hidden = false;
    }
}