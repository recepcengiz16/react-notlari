import { useState, useMemo, useCallback } from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  const [count, setCount] = useState(0);
  //react.memo vasıtasyla state değiştiğinde tekrar tekrar re render edilmesinin önüne geçiliyor. Peki ne zaman render edilir, bu componente gönderilen propslar değişince, aynı ise memo vasıtasıyla tekrardan render edilmez.

  const data = useMemo(()=>{
    return { name:"Recep", count  }
  },[count]) //aynı useEffect gibi yazılımı, köşeli paranteze bağımlılığı da yazabiliriz. referans tipler için useMemo tercih edilir.

  const increment = useCallback(()=>{
      setCount(prev=>prev+1)
  },[]) // bu da aynı useEffect gibi, köşeli paranteze bağımlılığı da yazabiliriz. Bağımlılık yazınca da yeniden render ediyor. En güzel çözümü prev şeklinde yazılması. Önceki değeri getirmiş oluyor ya prevli yazınca.

  return (
    <div className="App">
      {
        /*
          bu şekilde prop olarak fonks geçiyoruz.
          Fonksiyonların child bileşenlere props olarak geçirilmesinin temel faydaları şunlardır:

          İşlevsellik Paylaşımı: Parent bileşende tanımlanan işlevselliğin child bileşenlere aktarılmasını sağlar.
          
          State Yönetimi: State'in tek bir yerde yönetilmesi ve child bileşenlerin bu state'i güncelleyebilmesi sağlanır.
          
          Kodun Ayrıştırılması ve Yeniden Kullanılabilirlik: Fonksiyonların tekrar kullanılabilir olmasını ve kodun daha modüler olmasını sağlar.
          
          Event Handling: Child bileşenlerde gerçekleşen olayların parent bileşende ele alınmasını mümkün kılar.
          Bu yöntem, React uygulamalarında bileşenler arası iletişimi ve işlevselliği yönetmeyi kolaylaştırır.
        */
      }
      <Header count={count}  data={data} increment={increment} /> 
      

      <h1>{count}</h1>
      <button onClick={()=>setCount(prev=>prev+1)}> Tıkla </button>

    </div>
  );
}

export default App;
