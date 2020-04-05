import React from 'react';
import Card from 'react-bootstrap/Card';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';


const Cards = ({dataCard}) => {
    return (
        <div className={styles.container}>
            <Card className={cx(styles.card,styles.infected)}>
                <Card.Body>
                    <Card.Title>Infected</Card.Title>
                    <Card.Text>
                        <h2><CountUp start={0} end={dataCard.confirmed.value} duration={2.75} separator="," /></h2>         
                    </Card.Text>
                    <Card.Text>
                        Number of active cases of COVID-19.    
                    </Card.Text>
                    <Card.Text>
                        <h3>{new Date(dataCard.lastUpdate).toDateString()}</h3>
                    </Card.Text>
                   
                </Card.Body>
            </Card>

            <Card className={cx(styles.card,styles.recovered)}>
                <Card.Body>
                    <Card.Title>Recovered</Card.Title>
                    <Card.Text>
                        <h2><CountUp start={0} end={dataCard.recovered.value} duration={2.75} separator="," /></h2>  
                    </Card.Text>
                    <Card.Text>
                        Number of recovered cases of COVID-19.
                    </Card.Text>
                    <Card.Text>
                        <h3>{new Date(dataCard.lastUpdate).toDateString()}</h3>
                    </Card.Text>   
                </Card.Body>
            </Card>

            <Card className={cx(styles.card,styles.deaths)}>
                <Card.Body>
                    <Card.Title>Deaths</Card.Title>
                    <Card.Text>
                        <h2><CountUp start={0} end={dataCard.deaths.value} duration={2.75} separator="," /></h2>  
                    </Card.Text>
                    <Card.Text>
                        Number of deaths cases of COVID-19.
                    </Card.Text>
                    <Card.Text>
                        <h3>{new Date(dataCard.lastUpdate).toDateString()}</h3>
                    </Card.Text>
                    
                </Card.Body>
              </Card>
        </div>    
        
    );
}

export default Cards;