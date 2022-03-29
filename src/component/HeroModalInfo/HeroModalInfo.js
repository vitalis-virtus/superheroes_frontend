import React from "react";
import styles from "./HeroModalInfo.module.css";

export default function HeroModalInfo({ hero }) {
  const { nickname, real_name, origin_description, superpowers, catch_phrase } =
    hero;
  return (
    <div>
      <div className={styles.heroAvatar}>AVATAR</div>

      <ul className={styles.list}>
        <li>
          <b>NickName:</b> {nickname}
        </li>
        <li>
          <b>RealName:</b> {real_name}
        </li>
        <li>
          <b>Description:</b> {origin_description}
        </li>
        <li>
          <b>Superpowers:</b> {superpowers}
        </li>
        <li>
          <b>catch_phrase:</b> {catch_phrase}
        </li>
      </ul>
    </div>
  );
}
