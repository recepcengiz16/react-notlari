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

  //ES6'da kullanımlar
  let helloES6 = ()=>{
    console.log("helloES6");
  }
  //let helloES6 = ()=> console.log("Merhaba") tek satırda böyle tanımlama yapabiliyorsun
  helloES6();
  
  //eğer değer dönecekse süslü parantez kullanıyorsak mutlaka return yazmalı yoksa hata oluyor
  let merhaba = ()=>{console.log("merhaba")};
  merhaba();


  return (
    <>
     
    </>
  )
}

export default App
