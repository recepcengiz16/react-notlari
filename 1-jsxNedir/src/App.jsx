import './App.css'

function showMessage(){
  alert("Merhaba yeğenim");
}
let myClassName = "btnClassName";

function App() {

/*
  React kendi dom yapısını oluşturur ve sadece değiştirdiğimiz yer render edilir.

  jsx js kodları içerisine html kodları yazmamızı sağlar.  JavaScript için bir syntax uzantısıdır.
  JSX, React elementleri üretir. 

  JSX, JavaScript içindeki HTML benzeri yapıları yazmayı kolaylaştırır ve bu yapıları JavaScript kodu içine entegre etmeyi sağlar.
   Bu sayede, kullanıcı arayüzü kodları daha okunabilir ve daha kolay yönetilebilir hale gelir.

  jsx tarafında class yazarken class olarak değil de className olarak yazmamız lazım camelcase olarak yani

*/
 
  return (
    <>

      { true && <p>soldaki şart doğru olunca bu html etiketi gösterilir.</p> }
      
      <button className={myClassName} onClick={showMessage}>Tıkla ve Mesajı Gör! </button>

      <div className='deneme'>
        Hayat zannettiğin halat, yalnız bulunduğun dakikadır.
      </div>
    </>
  )
}

export default App
