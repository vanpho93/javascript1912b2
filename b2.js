function TamGiac(a, b, c){
  this.a = a;
  this.b = b;
  this.c = c;
  this.getChuVi = () => this.a + this.b + this.c
}

var tg = new TamGiac(3, 4, 3);
console.log(tg.getChuVi());
