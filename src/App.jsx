import React from 'react';
import styles from './App.module.css';
import image from './assets/header.png';
import {Cards,Chart,CountryBar} from './components';

const App = () =>{
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19"/>
      <Cards/>
      <Chart/>
      <CountryBar/>
    </div>
  );
}

export default App;
