import React, { useState, useCallback } from "react";

import styles from "./HeroForm.module.css";

export default function HeroForm({ onSubmit }) {
  const [nickname, setNickname] = useState("");
  const [real_name, setReal_name] = useState("");
  const [origin_description, setOrigin_description] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catch_phrase, setCatch_phrase] = useState("");

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
        await onSubmit(body);
      } catch (error) {}
    },
    [
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      onSubmit,
    ]
  );

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={submitHandler} className={styles.form}>
        <label className={styles.label}>
          <p className={styles.labeltext}>Nickname:</p>
          <input
            type="text"
            name="name"
            value={nickname}
            onChange={handleNicknameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Nickname может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          <p className={styles.labeltext}>Real name:</p>
          <input
            type="text"
            name="name"
            value={real_name}
            onChange={handleReal_nameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Real name может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          <p className={styles.labeltext}>Origin description:</p>
          <textarea
            type="text"
            name="name"
            value={origin_description}
            onChange={handleOrigin_descriptionChange}
            required
            className={styles.textArea}
          />
        </label>

        <label className={styles.label}>
          <p className={styles.labeltext}>Superpowers:</p>
          <input
            type="text"
            name="name"
            value={superpowers}
            onChange={handleSuperpowersChange}
            required
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          <p className={styles.labeltext}>Catch phrase:</p>
          <input
            type="text"
            name="name"
            value={catch_phrase}
            onChange={handleCatch_phraseChange}
            required
            className={styles.input}
          />
        </label>
        {/* 
    <label className={styles.label}>
    <p className={styles.labeltext}>Images:</p>
    <input type="file" multiple onChange={onFileChange}/>
    </label> */}

        <button type="submit" className={styles.button}>
          Add superhero
        </button>
      </form>
    </div>
  );
}
