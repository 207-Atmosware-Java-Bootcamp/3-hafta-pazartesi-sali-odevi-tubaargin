//ÖDEV: Math.round(Math.random()*10+1))
// bilgisayar tarafında rastgele  sayılar 1-10 arasında rastgele olsun oluştursun ve bitiş değeri 1<=X<=kullanıcı tarafından bitiş sayısına göre sayılar oluşturulsun
// bu sayıları bir diziye atama yapalım
// bu sayılardan ilk eleman  ===> dizi[0]
// bu sayılardan son eleman ===> dizi[dizi.length-1]
// bu sayıların küçükten büyüğe sıralama ===> dizi.sort()
// bu sayıların büyükten küçüğe sıralama ===> dizi.sort().reverse()
// bu sayıların toplamları  ===> sum=0  sum+=i;
// bu sayıların çift sayı toplamları  ===> if(dizi[i]%2==0)
// bu sayıların tek sayı toplamları  ===> if(dizi[i]%2==1)
// bu sayıların her birine 1 ekleyerek yeni bir dizi oluşturalım ==> iterative for ile her bir eleman erişmek ve 1 eklemek bunun dinamik kısmını ES kısmında göreceğiz.

var num;
var rand;
var sum = 0;
var even = 0;
var odd = 0;
var arr = [];
var arrNew = [];
num = Number(prompt("Dizi uzunluğunu giriniz"));

function arrayList(num) {
  for (var i = 0; i < num; i++) {
    rand = Math.round(Math.random() * 9 + 1);
    arr[i] = rand;
    arrNew[i] = rand + 1;
    sum += rand;
    if (rand % 2 == 0) {
      even += rand;
    } else {
      odd += rand;
    }
  }
}
arrayList(num);

document.write("<br> Dizimiz: "+arr);
document.write("<br> İlk Sayı: " + arr[0]);
document.write("<br> Son Sayı: " + arr[num - 1] + "<br>");
document.write("<br> Çift Sayıların Toplamı: " + even);
document.write("<br> Tek Sayıların Toplamı: " + odd);
document.write("<br> Dizi Elemanlarının Toplamı: " + sum + "<br>");
document.write("<br> Dizi küçükten büyüğe sıralanmış: "+arr.sort(function (a, b) { return a - b;}));
document.write(" <br> Dizi büyükten küçüğe sıralanmış: "+arr.sort(function (a, b) {return a - b;}).reverse());
document.write("<br> Her elemana 1 ekleyerek yeni bir dizi oluşturalım: "+arrNew);
