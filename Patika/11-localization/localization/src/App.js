import './App.css';
import {IntlProvider, FormattedMessage} from "react-intl"
import { useState, useEffect } from 'react';

const messages = {
  "tr-TR":{
    title:"Merhaba Recep",
    description:" {count} yeni mesajınız var."
  },
  "en-US":{
    title:"Hello Recep",
    description:"You have {} new messages."
  }
}

function App() {
  // FormattedMessage da IntlProvider messages objesini sağlıyor bize. burada id ile de bu objedeki propertyi verince onunla eşleştiriyor FormattedMessage ile.

  const localeLang = localStorage.getItem("locale")
  const defaultLocale = localeLang ? localeLang : navigator.language;

  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    
    localStorage.setItem("locale",locale)
    
  }, [locale])
  
  //values={{count:3}}  şekilde de parametre geçiyoruz. yukarıda da süslü parantez içinde yazıyoruz.
  return (
    <div className="App">
     <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id='title' />

        <FormattedMessage id='description' values={{count:3}} /> 

        <button onClick={()=>setLocale("tr-TR")}>TR</button> <br />
        <button onClick={()=>setLocale("en-US")}>EN</button>
     </IntlProvider>
    </div>
  );
}

export default App;
