function Person(name, age, congty){
  this.partner = null;
  this.congty = congty;
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

// var k = new Person('Khoa', 18);
// var p = new Person('Huong', 30);
// console.log(k);
// k.setAge(-19);
// console.log(k.getAge());
// console.log('Huong', p.getAge());
// p.showHello();

function CongTy(tenCT, soNV){
  this.tenCT = tenCT;
  this.soNV = soNV;
}

var cty = new CongTy('FPT', 2000);
//console.log(cty);

var p = new Person('Huong', 30, cty);
var p2 = new Person('Son', 18, cty);

p2.partner = p;
p.partner = p2;

console.log(p2);
