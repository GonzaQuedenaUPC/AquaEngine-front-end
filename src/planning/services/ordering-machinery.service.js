import http from "../../shared/http-common.js";

export class OrderingMachineryService {
    _resourceEndpoint = '/ordering-machinery';

    getAll() {
        console.log(http.defaults.baseURL);
        console.log(this._resourceEndpoint);
        return http.get(this._resourceEndpoint);
    }
    getById(id) {
        return http.get(`${this._resourceEndpoint}/${id}`);
    }
}