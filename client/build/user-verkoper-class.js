export class User {
    constructor(username, email, password) {
        this._username = username;
        this._email = email;
        this._password = password;
    }
    get subscriptions() {
        return this._subscriptions;
    }
    set subscriptions(value) {
        this._subscriptions = value;
    }
    get profileimage() {
        return this._profileimage;
    }
    set profileimage(value) {
        this._profileimage = value;
    }
    get bioText() {
        return this._bioText;
    }
    set bioText(value) {
        this._bioText = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get userID() {
        return this._userID;
    }
    set userID(value) {
        this._userID = value;
    }
}
export class Verkoper extends User {
    constructor(
    // name: string,
    _username, _email, _password) {
        super(_username, _email, _password);
    }
}
