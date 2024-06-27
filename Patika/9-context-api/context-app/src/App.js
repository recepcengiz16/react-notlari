import './App.css';
import Button from './components/Button';

import {ThemeProvider} from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

function App() {
  //ThemeContext.Provider sağla demek provider yani bu contexten gönderilen bütün dataları gönderebilmeyi sağlıyor provider ile
  return (
    <ThemeProvider>
      <UserProvider>
        <Button>
          Merhaba 
          <p>Denemelere devamke</p>
        </Button>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App; 
