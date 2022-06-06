//Kullanıcıdan aldığımız verinin ilk harfi ve son harfi görünsün geriye kalan karakter kadar * (yıldız) olsun ==> Alınan örneğin Hamit  ==>  H***t
//Yardımcı oalcak metotlar v.s                                                                          function
//string ==> replace,sub,String,charAt()
//loop
var cumle;
cumle = prompt("Enter name");
var count = "";
for (var i = 0; i < cumle.replace(" ", "").length - 2; i++) {
  count += "*";
}
cumleTrim = cumle.replace(" ", "");
document.write(
  cumle.charAt(0) +
    cumleTrim.replace(cumleTrim, count) +
    cumle.charAt(cumle.length - 1)
);
