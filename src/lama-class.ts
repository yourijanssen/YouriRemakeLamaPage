export class sub{

}

export class lama{
    private _name: string;
    private _age: number;
    private _gender: string;
    private _bioText: string;
    private _profilePicture: string;
    private _pictures: string[];
    private _subscriptions: sub[];

    constructor(name: string, age: number, gender: string, bioText: string, profilePicture: string, pictures: string[], subscriptions: sub[]){
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._bioText = bioText;
        this._profilePicture = profilePicture;
        this._pictures = pictures;
        this._subscriptions = subscriptions;
    }

    public get subscriptions(): sub[] {
        return this._subscriptions;
    }
    public set subscriptions(value: sub[]) {
        this._subscriptions = value;
    }
    public get pictures(): string[] {
        return this._pictures;
    }
    public set pictures(value: string[]) {
        this._pictures = value;
    }
    public get profilePicture(): string {
        return this._profilePicture;
    }
    public set profilePicture(value: string) {
        this._profilePicture = value;
    }
    public get bioText(): string {
        return this._bioText;
    }
    public set bioText(value: string) {
        this._bioText = value;
    }
    public get gender(): string {
        return this._gender;
    }
    public set gender(value: string) {
        this._gender = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get lamaName(): string {
        return this._name;
    }
    public set lamaName(value: string) {
        this._name = value;
    }
}