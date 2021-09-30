import React from "react";
import Card from "../card/Card";
import styles from "./CardList.module.css";
export const CardList = (props) => {
  return (
    <section className={styles.cardList}>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}/>
      ))}
    </section>
  );
};
