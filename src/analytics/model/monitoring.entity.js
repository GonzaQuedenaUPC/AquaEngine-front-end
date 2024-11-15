import Maintenance from './maintenance.entity.js';

class Monitoring{

    constructor({id='',name='',urlToImage='',status=''}) {
    this._id = id;
    this._name = name;
    this._urlToImage = urlToImage;
    this._status = status;

}

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get urlToImage() {
        return this._urlToImage;
    }

    get lastMaintenance() {
        return this._lastMaintenance;
    }

    get status() {
        return this._status;
    }


}

export default Monitoring;