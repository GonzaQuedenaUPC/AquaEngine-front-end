class Profile {

    constructor({id='', name='', email='',
                    ruc='', inventory=''}) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._ruc = ruc;
        this._inventory = inventory;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get ruc() {
        return this._ruc;
    }

    get inventory() {
        return this._inventory;
    }
}

export default Profile;