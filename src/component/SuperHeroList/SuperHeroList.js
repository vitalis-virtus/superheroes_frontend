import React from "react";
import SuperheroListItem from "../SuperheroListItem/SuperheroListItem";
import styles from "./SuperHeroList.module.css";

export default function SuperHeroList({heroes, onDelete, onEdit}) {
  return (
    <ul className={styles.heroList}>
      {heroes.map((hero) => {
        return (
          <li key={hero._id} className={styles.heroListItem}>
            <SuperheroListItem
              hero={hero}
              onDelete={onDelete}
              editHero={onEdit}
            />
          </li>
        );
      })}
    </ul>
  );
}

