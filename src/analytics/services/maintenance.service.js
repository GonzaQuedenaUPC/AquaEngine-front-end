import  http from '../../shared/http-common.js';

export class MaintenanceService {
    _resourceEndpoint = '/maintenances';

    getAll() {
        return http.get(this._resourceEndpoint).then(response => response.data);
    }
    getById(id) {
        return http.get(`${this._resourceEndpoint}/${id}`).then(response => response.data);
    }
}