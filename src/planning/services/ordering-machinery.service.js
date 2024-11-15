import http from "../../shared/http-common.js";

export class OrderingMachineryService {
    _resourceEndpoint = '/ordering-machinery';

    getAll() {
        console.log(http.defaults.baseURL);
        console.log(this._resourceEndpoint);
        console.log('get all');
        return http.get(this._resourceEndpoint);
    }
    getById(id) {
        return http.get(`${this._resourceEndpoint}/${id}`);
    }

    getOrderingMachinery() {
        return this.getAll().then(response => {
            return response.data.map(item => ({
                ordering:item.ordering
            }));
        }
        );
    }
}