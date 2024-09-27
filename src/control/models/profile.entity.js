class Profile {

    constructor({id='', name='', email='',
                    ruc='', inventory=''}) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._ruc = ruc;
        this._inventory = inventory;
    }
}

export default Profile;