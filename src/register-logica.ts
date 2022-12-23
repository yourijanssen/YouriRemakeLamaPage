/** @author Madelief van Slooten */

import { User } from "./user-verkoper-class";


function getUsername(): string{
    return (<HTMLInputElement>document.getElementById('username')!).value;
}

function getEmail(): string{
    return (<HTMLInputElement>document.getElementById('email')!).value;
}

function getPassword(): string{
    return (<HTMLInputElement>document.getElementById('password')!).value;
}

function createNewUser(){
    // let newUser: User = new User(getUsername(), getEmail(), getPassword());
}