class Maintenance{

    constructor({id='',date='',technician='',status='',description='',additionalInfo=''}){
        this._id=id;
        this._date=date;
        this._technician=technician;
        this._status=status;
        this._description=description;
        this._additionalInfo=additionalInfo;

    }
    get id() {
        return this._id;
    }

    get date() {
        return this._date;
    }

    get technician() {
        return this._technician;
    }

    get status() {
        return this._status;
    }

    get description() {
        return this._description;
    }

    get additionalInfo() {
        return this._additionalInfo;
    }
}
export default Maintenance;