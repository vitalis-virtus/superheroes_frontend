import React, { useState, useCallback } from "react";

import styles from "./HeroEditForm.module.css";

export default function HeroForm({ onSubmit, hero }) {
  const [nickname, setNickname] = useState(hero.nickname);
  const [real_name, setReal_name] = useState(hero.real_name);
  const [origin_description, setOrigin_description] = useState(
    hero.origin_description
  );
  const [superpowers, setSuperpowers] = useState(hero.superpowers);
  const [catch_phrase, setCatch_phrase] = useState(hero.catch_phrase);

  const handleNicknameChange = useCallback((event) => {
    setNickname(event.currentTarget.value);
  }, []);

  const handleReal_nameChange = useCallback((event) => {
    setReal_name(event.currentTarget.value);
  }, []);

  const handleOrigin_descriptionChange = useCallback((event) => {
    setOrigin_description(event.currentTarget.value);
  }, []);

  const handleSuperpowersChange = useCallback((event) => {
    setSuperpowers(event.currentTarget.value);
  }, []);

  const handleCatch_phraseChange = useCallback((event) => {
    setCatch_phrase(event.currentTarget.value);
  }, []);

  const reset = () => {
    setNickname("");
    setReal_name("");
    setOrigin_description("");
    setSuperpowers("");
    setCatch_phrase("");
  };

  const submitHandler = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        const body = {
          nickname,
          real_name,
          origin_description,
          superpowers,
          catch_phrase,
        };
        reset();
        await onSubmit(hero._id, body);
      } catch (error) {}
    },
    [
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      onSubmit,
      hero._id,
    ]
  );

  return (
    <div>
      <form onSubmit={submitHandler} className={styles.test}>
        <label className={styles.label}>
          <span>Nickname</span>
          <input
            type="text"
            name="nickname"
            value={nickname}
            onChange={handleNicknameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Nickname может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder={hero.nickname}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          <span>Real name</span>
          <input
            type="text"
            name="real_name"
            value={real_name}
            onChange={handleReal_nameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Real name может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder={hero.real_name}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          <span>Origin description</span>
          <textarea
            type="text"
            name="origin_description"
            value={origin_description}
            onChange={handleOrigin_descriptionChange}
            placeholder={hero.origin_description}
            className={styles.textArea}
          />
        </label>

        <label className={styles.label}>
          <span>Superpowers</span>
          <input
            type="text"
            name="superpowers"
            value={superpowers}
            onChange={handleSuperpowersChange}
            placeholder={hero.superpowers}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          <span>Catch phrase</span>
          <input
            type="text"
            name="catch_phrase"
            value={catch_phrase}
            onChange={handleCatch_phraseChange}
            placeholder={hero.catch_phrase}
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.button}>
          Edit
        </button>
      </form>
    </div>
  );
}
