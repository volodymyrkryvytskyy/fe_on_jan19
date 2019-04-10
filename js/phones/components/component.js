export default class Component {
    constructor({ element }) {
        this._callbackMap = {};
        this._element = element;
    }

    on(eventName, selector, callback) {
        this._element.addEventListener(eventName, (event) => {
            const delegatedTarget = event.target.closest(selector);
            if (!delegatedTarget) {
                return;
            }
            callback(event);
        });
    }
    
    emit(eventName, data) {
        const callback = this._callbackMap[eventName];
        if (!callback) {
            return;
        }
        callback(data);
    } 

    subscribe(eventName, callback) {
        this._callbackMap[eventName] = callback;
    }

    hide() {
        this._element.hidden = true;
    }

    show() {
        this._element.hidden = false;
    }
}