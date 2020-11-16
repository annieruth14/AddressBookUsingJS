console.log("Welcome to Address Book Problem Using JS");

class Contact {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(firstName))
            this._firstName = firstName;
        else throw "First Name is incorrect";
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(lastName))
            this._lastName = lastName;
        else throw "Last Name is incorrect";
    }
    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('.{4,}');
        if(addressRegex.test(address))
            this._address = address;
        else throw "Address should have minimum 4 letters"
    }
    get city() {
        return this._city;
    }
    set city(city) {
        let cityRegex = RegExp('.{4,}');
        if(cityRegex.test(city))
            this._city = city;
        else throw "City should have minimum 4 letters"
    }
    get state() {
        return this._state;
    }
    set state(state) {
        let stateRegex = RegExp('.{4,}');
        if(stateRegex.test(state))
            this._state = state;
        else throw "State should have minimum 4 letters"
    }
    get zip() {
        return this._pinCode;
    }
    set zip(zip) {
        let zipRegex = RegExp('^([\s]?[0-9]){6}$');
        if(zipRegex.test(zip))
            this._zip = zip;
        else throw "Invalid Pincode";
    }
    get email(){
        return this._email;
    }
    set email(email) {
        let emailRegex = RegExp("^[A-Za-z0-9]+([_+-.]?[A-Za-z0-9]+)*@[A-Za-z0-9]+.[A-Za-z]{2,4}(.[A-Za-z]{2})?$");
        if(emailRegex.test(email))
            this._email = email;
        else throw "Email is not valid";
    }
    get phoneNo() {
        return this._phoneNo;
    }
    set phoneNo(phoneNo) {
        let phoneRegex = RegExp('^[0-9]{1,3}[ ][0-9]{10}?$');
        if(phoneRegex.test(phoneNo))
            this._phoneNo = phoneNo;
        else throw "Phone number is not valid"
    }
}