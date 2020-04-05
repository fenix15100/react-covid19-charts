import React from 'react';
import Card from 'react-bootstrap/Card';
import cx from 'classnames';
import styles from './Cards.module.css';


const Cards = (props) => {
    return (
        <div className={styles.container}>
            <Card className={cx(styles.card,styles.infected)}>
                <Card.Body>
                    <Card.Title>Infected</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                   
                </Card.Body>
            </Card>

            <Card className={cx(styles.card,styles.recovered)}>
                <Card.Body>
                    <Card.Title>Recovered</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                   
                </Card.Body>
            </Card>

            <Card className={cx(styles.card,styles.deaths)}>
                <Card.Body>
                    <Card.Title>Deaths</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>

        </div>
        
        
    );
}

export default Cards;