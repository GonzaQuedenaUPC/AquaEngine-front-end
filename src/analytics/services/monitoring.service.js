import http from '../../shared/http-common.js';

export class MonitoringService {

    _resourceEndpoint = '/monitorings';

    getAll(){
        console.log(http.defaults.baseURL);
        console.log(this._resourceEndpoint);
        console.log('get all');
        return http.get(this._resourceEndpoint);
    }

    getById(id){
        return http.get(`${this._resourceEndpoint}/${id}`);
    }

    getMaintenance(){
        return this.getAll().then(response => {
            return response.data.map(item => ({
                maintenance: item.maintenance
            }));
        });
    }

    async create(newMonitoring) {
        const response = await http.post(this._resourceEndpoint, newMonitoring);

        if (!response.status === 201) {
            throw new Error('Failed to create monitoring data');
        }

        return response.data;
    }
}