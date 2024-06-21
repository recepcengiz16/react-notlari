const getComments = (number)=>{
    return new Promise((resolve,reject)=>{

        if (number>0) {
            resolve(number) //promise bize işlem sonrasında then catch yapısı sunar. olumlu olanlar thene hata olunca da catche düşer. resolve işlemlerin olumlu olduğunu belirtir.

        }else{
            reject(number) //reject ise hatalı durumlarda yazarız ve catche düşmesini sağlar.
        }
        
    })
}

getComments(1).then(res=>{
    console.log("result",res);
}).catch(e=>{
    console.log("hata",e);
})

Promise.all([getComments()]) //bu şekilde de birden fazla promise ı çalıştırabiliyoruz tek seferde
    .then(console.log)
    .catch(console.log)