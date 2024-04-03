// 1-ci




let arr=[23,1,5,3,12,4,9,81,7,11,22,31,6]
let evenNumbers=arr.filter(num=> num %2 ==0);
let maxEven=Math.max(...evenNumbers);
console.log("cut reqemlerin max-i" , maxEven);

let oddNumbers=arr.filter(num=>num%2!=0);
let minEven=Math.min(...oddNumbers);
console.log("tek reqemlerin min-u" , minEven);


// 2-ci


var arr2=[
    {urunadi:"Beyaz Ekmek",fiyat:2.5,stok:100.0,kategori:"Ekmek" },
    {urunadi: "Sut", fiyat:3.75,stok:50.0 ,kategori:"sut ve sut urunleri" },
    {urunadi: "domates",fiyat:2.0,stok:80.0,kategori:"meyve ve sebzeler" },
    {urunadi: "salatalik",fiyat:1.5,stok:60.0,kategori:"meyve ve sebzeler" },
    {urunadi: "tavuk gogsu",fiyat:15.0,stok:30.0,kategori:"et ve et urunleri" },
    {urunadi: "muz",fiyat:4.0,stok:40.0,kategori:"meyve ve sebzeler" },
    {urunadi: "ton baligi",fiyat:10.0,stok:20.0,kategori:"konserve ve hazir yiyecekler" },
    {urunadi: "soda",fiyat:1.25,stok:100,kategori:"icecekler" },
    {urunadi: "yogurt",fiyat:2.25,stok:40,kategori:"sut ve sut urunleri" },
    {urunadi: "cikolata",fiyat:51.0,stok:60,kategori:"sekerleme" }
];

var arr3 = arr2.filter(erzaq=>erzaq.fiyat>50.0);
console.log("Netice: ",arr3);

//3 cu

for (let i = 0; i < arr2.length; i++) {
    if(arr2[i].kategori=="meyve ve sebzeler"){
        console.log(arr2[i]);
    }
}


//4
for (let i = 0; i < arr2.length; i++) {
    if(arr2[i].kategori=="meyve ve sebzeler" && arr2[i].stok>72.0){
        console.log(arr2[i]);
    }
}

//5
var SutVar= false;

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].urunadi=="Sut") {
        SutVar=true;
        break;
    }
}
if (SutVar) {
    console.log("Sut var");
}
else{
    console.log("sut yok");
}

//6

var TonBaligiIndex=0;
for ( let i = 0; i < arr2.length; i++) {
    if (urunadi=="ton baligi") {
       let TonBaligiIndex=arr2[i]
    }
}
console.log("Indexi: ",TonBaligiIndex );







