import './App.css';
import {useState} from "react";

function App() {
  //her veri türü ile state tanımlaması yapılabilir.

  const [name, setName] = useState("Ahmet");
  const [friends, setFriends] = useState(["Ahmet","Mehmet","Yunus"]);

  return (
    <div className="App">
      {name}

      {
        friends.map(friend=>(<div>{friend}</div>))
      }

      <button onClick={setName("Recep")}>İsmi değiştir</button>
      <button onClick={setFriends([...friends,"Burak"])}>Listeye Ekle</button>
    </div>
  );
}

export default App;
