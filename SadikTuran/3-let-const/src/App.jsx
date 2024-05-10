import './App.css'

function App() {
  /*
    nomralde var ile değişken tanımlamamızda tekrardan alt satırlarda aynı isimde tanımlamamıza izin veriyor, fakat let ve const ile bu sorunu çözebiliyoruz.

    let ile tanımlandığında aynı değişken ismine izin vermiyor aynı scope içinde, hata veriyor. Bir de ilk atamadan sonra başka bir türde atamaya izin veriyor. İlk string yapıp daha sonra number yapabiliyorsun.

    const da let ile aynı farkı ise bir kere atama yapıyorsun referansı değiştirmeye izin vermiyor
    
    const Pi= 3.14; 

    Ancak, const ile tanımlanan bir nesnenin veya diziye atanan değerler değiştirilebilir,
    const numbers = [1, 2, 3];
    numbers.push(4); // Başarılı. numbers değişkeni değişmedi, ancak içerik değiştirildi.

    console.log(numbers); // [1, 2, 3, 4]
  
  */
  let name="Recep";
  name=5;

  const pi=3.14;
  //pi=10; hata tekrar atama yapmasına izin vermiyor.

  const numbers = [1,2,3];
  numbers.push(4); 


  //scope kavramı
  let age=27;

  function getAge(){ //fonks. bize ayrı bir scope oluşturur.

    let fullname= "deneme"; // fonks. dışında ulaşamayız   
    //age=30; böyle yaparsak dışarıdakini de değiştirir.
    let age=30; //bu şekilde de farklı bir scope içinde tanımlama yapabiliyorsun  
    console.log("age",age); //fonksiyon içinden ulaşabiliriz.
  
  }
  getAge();
  console.log("son age",age)

  var sehir= "Bursa";
  
  if (true) { // block kavramında dışarıdaki veriyi de
    var sehir="İstanbul" //var keywordu ayrı bir scope olarak değerlendirmiyor. Ancak let ve const if bloğunu değerlendirir.
    console.log(sehir)
  }

  console.log(sehir);

  return (
    <>
      <div>Merhaba Recep</div>
    </>
  )
}

export default App
