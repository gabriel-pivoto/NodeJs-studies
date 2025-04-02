function a() {
  console.log("executando a");

  c();
}
function b() {
  console.log("executando b");

  
  a();
}
function c() {
  console.log("executando c");


}

b();
c();
a();
