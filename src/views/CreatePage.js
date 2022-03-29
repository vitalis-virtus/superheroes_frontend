/* eslint-disable default-case */
import React, { useCallback } from "react";
import HeroForm from "../component/HeroForm/HeroForm";
import { useHttp } from "../hooks/http.hook";
import styles from "./CreatePage.module.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreatePage = () => {
  const { postHero } = useHttp();

  const submitHandler = useCallback(
    async (body) => {
      try {
        await postHero(body);
        toast("Success")
      } catch (error) {
        toast("Already exist")
      }
    },
    [postHero]
  );


  return (
    <div className={styles.createWrapper}>
      <HeroForm onSubmit={submitHandler} />
      {/* <ToastContainer /> */}
    </div>
  );
};
