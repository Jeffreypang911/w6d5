function makeMePoops(name) {
 this.name = name
}

// 1. every function has a property called `.prototype` that is an empty object that we can make not empty.

makeMePoops.prototype.name = "sam";
makeMePoops.prototype.pooptype = "liquid";
makeMePoops.prototype.wipes = function() {
    console.log("wiped!");
}

console.log(makeMePoops.prototype);

console.log(makeMePoops.prototype.wipes());

// 2. if we use this function as a constructor function (new), we get a new object.

let samsPoopy = new makeMePoops();

// This object's [[Prototype]] (.__proto__) is the functions `.prototype`

samsPoopy.__proto__ === makeMePoops.prototype;





