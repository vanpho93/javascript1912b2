function Person(name, age){
  this.name = name;
  var tuoi = age;
  var that = this;
  this.getAge = () => {
    return tuoi;
  }
  this.setAge = (nAge) => {
    if(nAge > 0) tuoi = nAge;
  }
  this.showHello = function(){
    console.log(a());
  }
  function a() {
    return 'Hello, ten la ' + that.name + ' nam nay ' + tuoi
  }
}

var k = new Person('Khoa', 18);
var p = new Person('Huong', 30);
// console.log(k);
// k.setAge(-19);
// console.log(k.getAge());
// console.log('Huong', p.getAge());
p.showHello();
