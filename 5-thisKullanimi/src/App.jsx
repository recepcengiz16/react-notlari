import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const user = {
    id:1,
    name:"Recep",
    city:"Bursa",
    roles:["admin","customer"],
    getRoles: function(){
      const that = this;
      this.roles.forEach(function(role){ //burada this ile objeye erişebiliyoruz fakat fonks. içindeki fonksda  bu sefer this üstündeki fonks. işaret eder. 
        console.log(role);
        //console.log(this.name); burada this bir üst fonks işaret eder, objeyi değil. Bu sorunu da aşağıdaki gibi çözeriz.
        console.log(that.name) // 14. satırda
      })

      //arrow function kendine bir scope oluşturmaz yukarıdaki sorunu arrow func ile çözebiliriz func kullanmak yerine.
      this.roles.forEach(role=>{
        console.log(role);
        console.log(this.name);
      })
    }
  }

  const addES5 = function(){
    //console.log(arguments); // fonks gelen argümanları gösterir
    let total=0;    
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
      
    }
    return total;
  }

  addES5(3,5,6);

  const addES6 = ()=>{
    console.log(arguments); //arrow func da argumentse ulaşamayız Çünkü yeni bir scope oluşturmuyor arrow func. arguments de function içinde tanımlanır
  }

  addES6();

  return (
    <>
      
    </>
  )
}

export default App
