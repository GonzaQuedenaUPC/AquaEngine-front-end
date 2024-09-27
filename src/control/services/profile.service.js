import http from '../../shared/http-common.js';

export class ProfileService {

    _resourceEndpoint = '/profiles';

    getAll() {
        console.log(http.defaults.baseURL);
        console.log(this._resourceEndpoint);
        return http.get(this._resourceEndpoint);
    }

    getById(id) {
        return http.get(`${this._resourceEndpoint}/${id}`);
    }
}