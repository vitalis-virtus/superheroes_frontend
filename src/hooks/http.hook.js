import axios from "axios";
import { useCallback, useState } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postHero = useCallback(async (body) => {
    setLoading(true);

    try {
      const response = await axios.post("https://superheroes-crud-app.herokuapp.com/api/v1/superheroes", body);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw new Error(err);
    }
  }, []);

  const getAllHeroes = useCallback(async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://superheroes-crud-app.herokuapp.com/api/v1/superheroes?page=${page}`);
      const data = await response.data.data;
      if (!data) {
        throw new Error(data.message || "Something goes wrong");
      }
      setLoading(false);
      return data;
    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw new Error(err);
    }
  }, []);

  const deleteHero = useCallback(async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(`https://superheroes-crud-app.herokuapp.com/api/v1/superheroes/${id}`);
      const data = await response.data.data;
      if (!data) {
        throw new Error(data.message || "Something goes wrong");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw new Error(err);
    }
  }, []);

  const editHero = useCallback(async (id, body) => {
    setLoading(true);
    try {
      const response = await axios.put(`https://superheroes-crud-app.herokuapp.com/api/v1/superheroes/${id}`, body);
      const data = await response.data.data;
      if (!data) {
        throw new Error(data.message || "Something goes wrong");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw new Error(err);
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);
  return {
    loading,
    postHero,
    error,
    clearError,
    getAllHeroes,
    deleteHero,
    editHero,
  };
};
