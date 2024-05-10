import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //class ES5 
  var Person = function() {

  }
  //nesne-object
  const p= new Person();

  //class ES6
    class Personn {
      constructor(name="Recep",year=1996) {
        
        this.name=name; //this ile bu classdan oluşacak nesneyi demiş oluyoruz.
        this.year=year;

        //metot ile fonks arasındaki fark js de metot classa hizmet ediyor. fonks ise kendi başına çalışıyor.      
      }

      calculateAge(){
        return new Date().getFullYear() - this.year;
      }

      greeting(){
        console.log(`Merhaba ${this.name}, hoşgeldin.`)
      }
   } 

   const p1 = new Personn("Recep",1925);
   const p2 = new Personn();

   class Student extends Personn { //extends ile Person sınıfını genişletmiş oluyorsun
      constructor(name,year,studentNumber){
        super(name,year); // Person classındaki constructora parametre göndermiş oluyoruz super ile.
        this.studentNumber=studentNumber;
      }

      greeting(){
        let text = super.greeting(); //üstteki metoddan çağırma
        console.log(text+`Merhaba ${this.name}. Numaram: ${this.studentNumber}`) //Burada aynı şekilde yazarak ezebiliriz
      }
   }


  return (
    <>
      
    </>
  )
}

export default App
