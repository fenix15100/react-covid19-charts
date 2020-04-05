import React, { useState } from 'react';
import styles from './App.module.css';
import image from './assets/header.png';
import {Cards,Chart,CountryBar} from './components';

const App = () =>{

  const [country,setCountry] = useState('Global');

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19"/>
      <Cards/>
      <CountryBar
        setCountry={setCountry}
      />
      <Chart/>
      
    </div>
  );
}

export default App;
