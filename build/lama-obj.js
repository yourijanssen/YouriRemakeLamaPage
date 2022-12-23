export class sub {
}
export class lama {
    constructor(name, age, gender, bioText, profilePicture, pictures, subscriptions) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._bioText = bioText;
        this._profilePicture = profilePicture;
        this._pictures = pictures;
        this._subscriptions = subscriptions;
    }
    get subscriptions() {
        return this._subscriptions;
    }
    set subscriptions(value) {
        this._subscriptions = value;
    }
    get pictures() {
        return this._pictures;
    }
    set pictures(value) {
        this._pictures = value;
    }
    get profilePicture() {
        return this._profilePicture;
    }
    set profilePicture(value) {
        this._profilePicture = value;
    }
    get bioText() {
        return this._bioText;
    }
    set bioText(value) {
        this._bioText = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get lamaName() {
        return this._name;
    }
    set lamaName(value) {
        this._name = value;
    }
}
