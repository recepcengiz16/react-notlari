import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // ES5'te kullanımlar

  var helloES5 = function () {
    console.log("Merhaba ES5");
  }

  // function helloES5(){
  //   console.log("Merhaba ES5");
  // }

  helloES5();

  var getProductES5 = function(id,name){
    return {
      id,
      name
    }
  }
  console.log(getProductES5(10,"Recep"));

  //ES6'da kullanımlar
  let helloES6 = ()=>{
    console.log("helloES6");
  }
  //let helloES6 = ()=> console.log("Merhaba") tek satırda böyle tanımlama yapabiliyorsun
  helloES6();
  
  //eğer değer dönecekse süslü parantez kullanıyorsak mutlaka return yazmalı 
  let merhaba = (x,y) => x*y
  //let merhaba = (x,y) => { return x*y};
  merhaba();

  let denemeler = (id,name)=>( { id:id, name:name } ); //kısa gösterimde süslü parantez ve return yerine normal parantezle de yapabilirsin

  denemeler(5,"Recep");

  const phones= [
    {name:"Iphone 8",price:3000},
    {name:"Iphone 9",price:4000},
    {name:"Iphone 10",price:5000},
    {name:"Iphone 11",price:6000},
  ]

  let priceES5 = phones.map(function(phone){
    return phone.price;
  })

  let priceES6 = phones.map(phone=>phone.price);

  let filterES5 = phones.filter(function(phone){
    return phone.price>=5000;
  })

  let filterES6 = phones.filter(phone=>phone.price>=5000)


  return (
    <>
     
    </>
  )
}

export default App
