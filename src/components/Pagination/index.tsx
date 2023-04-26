import React from 'react'
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss'

interface IPaginationProps {
  onChangePage: any;
}

const Pagination:React.FC<IPaginationProps> = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
    />
  )
}

export default Pagination