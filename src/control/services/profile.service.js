import http from '../../shared/http-common.js';

export class ProfileService {
    _resourceEndpoint = '/products';

    getAll() {
        return http.get(this._resourceEndpoint);
    }

    getById(id) {
        return http.get(`${this._resourceEndpoint}/${id}`);
    }

    create(productData) {
        return http.post(this._resourceEndpoint, productData);
    }
}