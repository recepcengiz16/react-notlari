import './App.css';
import {useEffect,useState} from "react";

function App() {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("")

  /*
    Bu fonksiyon da component'in mount, update veya unmount durumlarında işlemleri gerçekleştirmek için kullanılır. Yani useEffect React component'inin yaşam döngüsü boyunca belirli işlemleri takip etmek ve gerçekleştirmek için kullanılır.
  
  */

  useEffect(() => {
    console.log("component render edildi");
  }); //her render edildiğinde çalışacak 
  
  useEffect(() => {
    
    console.log("Bir kere çalışacak. İlk render edildiğinde component yani")
   
  }, []);

  useEffect(() => {
    
  console.log("Değişkene göre çalışacak olan useEffect")
   
  }, [name,surname])

  useEffect(() => {
  
    return () => {
      console.log("Umnount olunca çalışacak olan işlem return içindeki fonks da yer alır");
    }
  }, [])
  
  
  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
