import PhonesCatalog from './components/phones-catalog.js';
import PhoneViewer from './components/phone-viewer.js';
import PhonesService from './services/phones-service.js';

export default class PhonesPage {
    constructor({ element }) {
        this._element = element;
        this._render();
        this._initCatalog();
        this._initViewer();
    }

    _initCatalog() {
        this._catalog = new PhonesCatalog({
            element: this._element.querySelector('[data-component="phone-catalog"]'),
            phones: PhonesService.getAll(),
        })

        this._catalog.subscribe('phone-selected', (id) => {
            console.log('Selected: ', id);
            const phoneDetails = PhonesService.getById(id);
            this._catalog.hide();
            this._viewer.show(phoneDetails);
        })
    }

    _initViewer() {
        this._viewer = new PhoneViewer({
            element: this._element.querySelector('[data-component="phone-viewer"]')
        })

        this._viewer.subscribe('back', () => {
            this._catalog.show();
            this._viewer.hide();
        })
    }
    
    _render() {
        this._element.innerHTML = `
        <div class="row">

        <!--Sidebar-->
        <div class="col-md-2">
            <section>
            <p>
                Search:
                <input>
            </p>

            <p>
                Sort by:
                <select>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
                </select>
            </p>
            </section>

            <section>
            <p>Shopping Cart</p>
            <ul>
                <li>Phone 1</li>
                <li>Phone 2</li>
                <li>Phone 3</li>
            </ul>
            </section>
        </div>

        <!--Main content-->
        <div class="col-md-10">
            <div data-component="phone-viewer"></div>
            <div data-component="phone-catalog"></div>
        </div>
        </div>`
    }
}