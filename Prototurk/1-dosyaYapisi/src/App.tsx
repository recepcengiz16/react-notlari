import './App.css'

function App() {
//Eğer ki biz projeyi build ettiğimizde tarayıcıda source dosyaları gözüksün istemiyorsak package.json da script içinde build property sini şu şekilde güncelleyebiliriz.

// build: "GENERATE_SOURCEMAP=false react-scripts build"

/*
  ortam değişkenlerine process.env.NODE_ENV ile erişiriz
*/


  return (
    <>
      {
        process.env.NODE_ENV === 'production' && (
          <h1>Production ortamı</h1>
        )
      }

      {
        process.env.NODE_ENV === 'development' && (
          <h1>Development ortamı</h1>
        )
      }

      <p>{process.env.REACT_APP_API_URL}</p>
    </>
  )
}

export default App
