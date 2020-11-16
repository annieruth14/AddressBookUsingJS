console.log("Welcome to Address Book Problem Using JS");
const prompt = require('prompt-sync')();

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
        return this._zip;
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

    toString() {
        return this.firstName + " " + this.lastName + " " + this.address + " " + this.city + " " + this.state + " " + this.zip + " " + this.phoneNo + " " + this.email; 
	}
}

let addressBookArr = new Array();
try{
    addressBookArr.push(new Contact("Annie", "Ruth", "NBUniversity" , "Siliguri" , "Bengal" , '789456' , '91 9989613112', "ruth3@gmail.com") ,
        new Contact("Neha", "Clare", "Kadamtala" , "Mirik" , "Tamil Nadu" , '434567' , '91 8945613550', "neha@gmail.com") ,
        new Contact("Kiran", "Bedi", "Shantinagar" , "Kurseong" , "Arunachal" , '453366' , '91 9899946132', "kiran6@gmail.com") ,
        new Contact("Ankita", "Sarkar", "Sevoke" , "Mirik" , "Bengal" , '874556' , '91 9894561555', "ankita2@gmail.com") ,
        new Contact("Portia", "Das", "Silla" , "Siliguri" , "Jammu" , '786788' , '91 8944444322', "portia@gmail.com") );
}
catch(e) {
    console.error(e);
}
addressBookArr.forEach(element => console.log(element.toString()));

// find person by name
function findPersonByName(name){
    let person = addressBookArr.find(element => element.firstName == name);
    return person;
}

// edit details of a person
function editDetails(person) {
    const choice = prompt("Enter the field number you want to edit: 1. address  2. city  3.state  4.zip  5.phoneNo  6.email : ");
    const value = prompt("Enter the new value: ");
    switch(parseInt(choice)) {
        case 1:
            person.address = value;
            console.log("Setting : \n"+ person.toString());
            break;
        case 2:
            person.city = value;
            console.log("Setting : \n"+ person.toString());
            break;
        case 3:
            person.state = value;
            console.log("Setting : \n"+ person.toString());
            break;
        case 4:
            person.zip = value;
            console.log("Setting : \n"+ person.toString());
            break;
        case 5:
            person.phoneNo = value;
            console.log("Setting : \n"+ person.toString());
            break;
        case 6:
            person.email = value;
            console.log("Setting : \n"+ person.toString());
            break;
        default:
            console.log("Invalid choice");
    }
}
let person = findPersonByName(prompt("Enter the name you want to edit: "));
editDetails(person);

// delete person
function deletePerson(person) {
    addressBookArr.splice(addressBookArr.indexOf(person), 1);
    console.log(addressBookArr.toString());
}
let delPerson = findPersonByName(prompt("Enter the name you want to delete: "));
deletePerson(delPerson);

// find number of contacts
let totalContacts = addressBookArr.reduce((total , element) => total += 1 , 0);
console.log("Total number of contacts in the address book: " + totalContacts);

// checking if duplicate name exists
let newContact = new Contact("Kiran", "Bedi", "Shantinagar" , "Kurseong", "Jammu" , '786788' , '91 8944444322', "kiran456@gmail.com");
let duplicateCheck = addressBookArr.find(element => element.firstName == newContact.firstName);
if(duplicateCheck != null)
    console.log("Duplicate element cannot be added");
else
    addressBookArr.push(newContact);

// search person by city
let city = prompt("Enter the name of the city: ");
console.log("Persons present in " + city + " is/are: ");
addressBookArr.filter(element => element.city == city)
        .forEach(element => console.log(element.firstName + " " + element.lastName));