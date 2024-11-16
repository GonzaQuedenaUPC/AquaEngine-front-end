import  http from '../../shared/http-common.js';

export class MaintenanceService {
    _resourceEndpoint = '/maintenances';

    getAll() {
        return http.get(this._resourceEndpoint).then(response => response.data);
    }
    getById(id) {
        return http.get(`${this._resourceEndpoint}/${id}`).then(response => response.data);
    }
    async createMonitoredMachine(monitoredMachine) {
        const response = await http.post(`${this._resourceEndpoint}/`, monitoredMachine);
        if (response.status !== 201) {
            throw new Error('Failed to create monitored machine');
        }
        return response.data;
    }
}