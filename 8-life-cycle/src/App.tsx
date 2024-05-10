import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class Todo extends React.Component {
   /*
    İlk başta componentin constructor metodu çalıştırılır. Daha sonra render metodu daha sonra componentDidMount metodu çalıştırılır.
   */ 
  constructor(props:any){
    super(props);
  }

  componentDidMount(): void {
      console.log("component oluşturuldu mu")
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
      // prevProps güncelleme olmadan önceki props bilgisi
      // prevState güncelleme olmadan önceki state bilgisi
      
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("Hata yakalandı:", error, errorInfo);
    // Hata yakalandıktan sonra yapılacak işlemler buraya yazılabilir.
  }

  componentWillUnmount(): void {
      console.log("Artık bu komponent ile işimiz bittiğinde")
  }

}

function App() {

  return (
    <>

    </>
  )
}

export default App
