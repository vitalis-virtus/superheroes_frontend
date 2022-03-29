import React, { useCallback, useState } from "react";
import Modal from "react-modal";
import styles from "./SuperheroListItem.module.css";

import HeroEditForm from "../HeroEditForm/HeroEditForm";
import HeroModalInfo from "../HeroModalInfo/HeroModalInfo";

const SuperheroListItem = ({ hero, onDelete, editHero }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      animationName: "modalShow",
      animationDuration: "0.5s",
      width: "500px",
      minHeight: "300px"
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [editModalIsOpen, setEditIsOpen] = useState(false);

  const modalEditClick = useCallback(() => {
    setEditIsOpen(!editModalIsOpen);
  }, [editModalIsOpen]);

  const modalClick = () => {
    setIsOpen(!modalIsOpen);
  };

  const onEdit = useCallback(
    (id, body) => {
      editHero(id, body);
      modalEditClick();
    },
    [editHero, modalEditClick]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.heroAvatar}>AVATAR</div>
      <p className={styles.heroName} onClick={modalClick}>
        {hero.nickname}
      </p>

      <div className={styles.navEdit}>
        <button
          type="button"
          onClick={modalEditClick}
          className={styles.navEditBtn}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(hero._id)}
          className={styles.navEditBtn}
        >
          Delete
        </button>
      </div>

      {/* INFO MODAL */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={() => {}}
        onRequestClose={modalClick}
        style={customStyles}
        contentLabel="Hero info modal"
        ariaHideApp={false}
      >
        <button className={styles.closeModalBtn} onClick={modalClick}>
          X
        </button>
        <HeroModalInfo hero={hero} />
      </Modal>

      {/* EDIT MODAL */}
      <Modal
        isOpen={editModalIsOpen}
        onAfterOpen={() => {}}
        onRequestClose={modalEditClick}
        style={customStyles}
        contentLabel="Edit hero modal"
        ariaHideApp={false}
      >
        <button className={styles.closeModalBtn} onClick={modalEditClick}>
          X
        </button>
        <div>
          <HeroEditForm onSubmit={onEdit} hero={hero} />
        </div>
      </Modal>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default SuperheroListItem;
