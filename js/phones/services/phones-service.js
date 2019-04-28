const API_URL = 'https://mate-academy.github.io/phone-catalogue-static/api';

const PhoneService = {
    async getAll({ query = '', order = '' } = {}) {
        let response = await fetch(API_URL + '/phones.json');
        let phones = await response.json();
        return phones;
},

getById(id) {
    return fetch(API_URL + '/phones/' + id + '.json').then((response) => response.json());
}
};

export default PhoneService;