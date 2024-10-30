class Monitoring{

    constructor({id='',name='',urlToImage='',lastMaintenance='',status='',maintenance=[]}) {
    this._id = id;
    this._name = name;
    this._urlToImage = urlToImage;
    this._lastMaintenance = lastMaintenance;
    this._status = status;
    this._maintenance = maintenance;
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

    get maintenance() {
        return this._maintenance;
    }

}

export default Monitoring;