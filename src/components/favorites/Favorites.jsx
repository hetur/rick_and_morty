import React from 'react';
import { connect } from "react-redux";
import styles from "./Favorites.module.css";

function Favorites({ myFavorites }) {
  return (
    <div className={styles.container}>
        {myFavorites?.map((char) => (
            <div key={chard.id} className={styles.divCard}>
                <h2>{chard.name}</h2>
                <h2>{chard.gender}</h2>
                <img src={char.image} alt={chard.name} />
            </div>
        ))}
      
    </div>
  );
}
function mapStateToProps(state){
    
}