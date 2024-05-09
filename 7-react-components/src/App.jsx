import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const Header = function () { //fonksiyonel component
    return <h1>Merhabalar</h1>
  }

  class Header2 extends React.Component { //class component: React.Component i extends ediyor olması lazım. bizim yazdığımız componentlerin başlangıcını büyük harfle yazmalıyız.

    render(){
      /*      
      render() yöntemi, sınıf bileşeninin JSX içeriğini döndüren bir fonksiyondur. Sınıf bileşenleri, render() yöntemini kullanarak kullanıcı arayüzünü oluşturur ve bu yöntem, her zaman bir JSX ifadesi döndürmelidir.     
      */

      return (<h1>Merhabalar</h1>);
    }

  }

  const Deneme = function (props) { // functional component de props
    console.log(props);

    return (
      <h1>{props.title}</h1>
    )

  }

  class Deneme2 extends React.Component {

    constructor(props){ //normalde eklemeyince zaten props bilgisi geliyor. constructorda ekstra özellik eklemek istediğimizde bu sefer super ile varsayılan değerleri kendimiz tekrardan yazmamız gerekli
      super(props);
      this.clearItems=this.clearItems.bind(this); //burada da Deneme2 demiş olduk
      
      /*     
      JavaScript'te bind() yöntemi, bir fonksiyonun this bağlamını belirli bir değere sabitlemek için kullanılır. Bu, bir fonksiyonun bağlamını (context) değiştirerek, bu fonksiyonun çalıştırılacağı nesneyi belirleyebiliriz.
      
      const person = {
        name: 'John',
        greet: function() {
          console.log('Hello, ' + this.name);
        }
      };

      const anotherPerson = {
        name: 'Alice'
      };

      person.greet(); // Hello, John
      person.greet.bind(anotherPerson)(); // Hello, Alice
            
      */
    }

    clearItems(){
      console.log(this.props);
      console.log("clear items"); //normalde fonks içerisinde thise erişemiyoruz aşağıda referans olarak verdiğimiz için butonun click olayında. 
      //Referans olarak verince fonksiyonu bu yüzden constructor içerisinde bind edip  o şekilde erişebiliyoruz this e.
    }

    render(){
      console.log(this.props);// props react içerisinden geliyor buraya
      return (
        <div>
          <h1>{this.props.title}</h1>
          <button onClick={this.clearItems}>Tıkla</button>
        </div>
      )
    }
  }

  return (
    <>
      <Header />
      <Header2 />
      <Deneme title="Denemelere devamke" />
      <Deneme2 title="Merhaba" />
    </>
  )
}

export default App
