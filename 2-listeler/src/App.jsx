import './App.css'


function App() {
  
  /*
    liste içerisinde dönerken map fonks dizide düzenleme yaparak yeni diziyi döndürür. reactta da dizide dönerken map fonks. kullanırız
  */

  const numbers= [1,2,3,4];
  const listItems = numbers.map(num=>{
    return <li key={num}>{num}</li>
  })

  return (
    <>
      <ul>{listItems}</ul>
    </>
  )
}

export default App
