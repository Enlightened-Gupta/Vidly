import React from "react";
import _ from "lodash";
import propTypes from "prop-types";
const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange,currentPage } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className={currentPage === page ? 'page-item active' : 'page-item'} >
            <a className="page-link" onClick={()=> onPageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemsCount : propTypes.number.isRequired,
   pageSize : propTypes.number.isRequired,
   onPageChange : propTypes.number.isRequired,
   currentPage : propTypes.func.isRequired
}

export default Pagination;
