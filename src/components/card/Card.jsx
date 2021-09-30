import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const { name, id, email } = props.monster;
  const IMG_SIZE = "180x180";
  const ROBOT_URL = `https://robohash.org/${id}?set=set2&size=${IMG_SIZE}`;

  return (
    <article className={styles.cardContainer}>
      <img alt="monster" src={ROBOT_URL} />
      <section className={styles.dataContainer}>
        <h2>{name}</h2>
        <p>{email}</p>
      </section>
    </article>
  );
};

export default Card;
