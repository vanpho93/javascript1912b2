function TamGiac(a, b, c){
  this.a = a;
  this.b = b;
  this.c = c;
  this.chuVi = getChuVi2(this.a, this.b, this.c);
  this.getChuVi = () => this.a + this.b + this.c
  function getChuVi2(c1, c2, c3){//private method
    return c1 + c2 + c3;
  }
}

var tg = new TamGiac(3, 4, 3);
// console.log(tg.getChuVi());

console.log(tg);
