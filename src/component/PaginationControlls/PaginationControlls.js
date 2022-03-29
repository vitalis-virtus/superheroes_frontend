import React from "react";
import styles from './PaginationControlls.module.css'

export default function PaginationControlls({
  currentPage,
  totalPages,
  loadPrevious,
  loadNext
}) {
  return (
    <div className={styles.navigation}>
      {currentPage > 1 && (
        <button
          type="button"
          onClick={loadPrevious}
          className={styles.navButton}
        >
          Previous page
        </button>
      )}
      {currentPage !== totalPages && (
        <button type="button" onClick={loadNext} className={styles.navButton}>
          Next page
        </button>
      )}
    </div>
  );
}
