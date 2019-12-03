




//*Volume of a sphere

function sphere() {

    var radius = 2;
    var volume;
    radius = Math.abs(radius);
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    console.log(volume);
}
sphere();





//* Employee id,name,apartment with inheritance
const Employee = function (id, name, apartment) {
    this.id = id;
    this.name = name;
    this.apartment = apartment;
}

const Staff = new Employee(1, "Moses", "24a james turner");
console.log(Staff);




//*Image show onclick

function showImg() {

    document.getElementsByTagName('img')[0].style.display = 'block';
    alert('Hello Eduonix :D');

}


//*Working on array with call(),apply(),bind()

function mySum(num1, num2, num3) {
    console.log(Math.max(num1, num2, num3));
    console.log(Math.min(num1, num2, num3));
}
let params = [32, 50, 21];
mySum.apply(null, params);



function mySum(num1, num2, num3) {
    console.log(Math.max(num1, num2, num3));
    console.log(Math.min(num1, num2, num3));
}

mySum.call(32, 56, 787, 34);

const bind = mySum.bind(32, 56, 787, 34);
bind();