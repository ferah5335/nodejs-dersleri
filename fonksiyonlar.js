function f(x){
    return x+5;
}
// f(x)=5+x
// f(10)

console.log(f(10));

function topla(a,b){
    return a+b;
}

console.log(topla(5,6));

function mesaj(){
    console.log('bilgisayar kavramları');
}

var fonksiyon = function(){
    console.log('Bilgisayar kavramları');
};
mesaj();
fonksiyon();

function fact(n){
    if(n==0)
        return 1;
    return n*fact(n-1);
    
}
console.log(fact(5));

