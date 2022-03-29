import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import styles from "./SuperheroesListPage.module.css";

import { useHttp } from "../hooks/http.hook";

import Spinner from '../component/Spinner/Spinner'
import PaginationControlls from "../component/PaginationControlls/PaginationControlls";
import SuperHeroList from "../component/SuperHeroList/SuperHeroList";



export const SuperheroesListPage = (props) => {
  const { loading, getAllHeroes, deleteHero, editHero } = useHttp();
  const [superheroesList, setSuperheroesList] = useState([]);
  const [currentPage, setCurrentPage] = useState("1");
  const [totalPages, setTotalPages] = useState("0");

  const fetchHeroes = useCallback(
    async (page) => {
      try {
        const fetchedResult = await getAllHeroes(page);
        setSuperheroesList(fetchedResult.result);
        setCurrentPage(fetchedResult.page);
        setTotalPages(Math.ceil(fetchedResult.total / 5));
      } catch (error) {}
    },
    [getAllHeroes]
  );

  useEffect(() => {
    fetchHeroes(currentPage);
  }, [currentPage, fetchHeroes]);

  const loadNext = () => {
    fetchHeroes(currentPage + 1);
  };

  const loadPrevious = () => {
    fetchHeroes(currentPage - 1);
  };

  const onDeleteItem = useCallback(
    (id) => {
      deleteHero(id);
      fetchHeroes(currentPage);
      toast("Success")
    },
    [deleteHero, fetchHeroes, currentPage]
  );

  const onEditHero = useCallback(
    (id, body) => {
      editHero(id, body);
      fetchHeroes(currentPage);
      toast("Success")
    },
    [editHero, fetchHeroes, currentPage]
  );

  //render spinner
  if (loading) {
    return (
      <Spinner/>
    );
  }

  if(!superheroesList.length){
    return (<div><b>DataBase is empty :( </b></div>)
  }
  
  return (
    <div className={styles.listWrapper}>
        <p className={styles.page}>Page: {currentPage}</p>

      <SuperHeroList
      heroes={superheroesList}
       onDelete={onDeleteItem}
       onEdit={onEditHero}

      />

      <PaginationControlls
        currentPage={currentPage}
        totalPages={totalPages}
        loadPrevious={loadPrevious}
        loadNext={loadNext}
        />
    </div>
  );
};
