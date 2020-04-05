import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import image from './assets/header.png';
import {fetchData} from './api';
import {Cards,Chart,CountryBar} from './components';

const App = () =>{

  const [country,setCountry] = useState('Global');
  const [dataCard,setDataCard] = useState({});
  const [loadingCards,setLoadingCards] = useState(true);

  useEffect(()=>{
    async function loadData() {
      const data = await fetchData(country);
      setDataCard(data);
      setLoadingCards(false)
    }
    loadData();

  },[country])

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19"/>
      {loadingCards
        ?
        <h1>Loading data....</h1>
        :
        <Cards
          dataCard={dataCard}
        />
      
      }
      
      <CountryBar
        setCountry={setCountry}
      />
      <Chart/>
      
    </div>
  );
}

export default App;
