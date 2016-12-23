let name = 'Khoa Pham'
let person1 = {name: name, age: 18};
//console.log(person);

function Person(name, age){
  this.name = name;
  this.age = age;
  this.sayHello = () => console.log('Xin chao');
  this.get = getInfo;
  function getInfo(){
    return this.name + ': ' + this.age;
  }
}

var p1 = new Person('Khoa Pham', 18);
p1.age = 19;
p1.sayHello();
console.log(p1.get());
console.log('Ten', p1.name);
console.log(p1);

function KhoaHoc(tenKH, hocPhi){
  this.tenKH = tenKH;
  this.hocPhi = hocPhi;
  this.soHocVien = 10;
}

var node = new KhoaHoc('NodeJS', '3000');

var person2 = {
  name: 'Khoa',
  age: 18,
  getInfo(){
    console.log(this.name + ': ' + this.age);
  }
}

person2.getInfo();
// console.log(node);
