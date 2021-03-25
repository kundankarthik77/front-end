const address = new Address('a', 'b', 'c');

console.log(address);

// Factory function

function createAddress(street, city, zipcode){
    return {
        street,
        city,
        zipcode
    };
}

// Constructor function

function Address(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}