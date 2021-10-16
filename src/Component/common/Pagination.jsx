import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const {itemsCount, pageSize,onPageChange,currentPage} = props;
    const pagesCount=Math.ceil(itemsCount / pageSize);
    if(pagesCount === 1) return null;
    const pages=_.range(1, pagesCount + 1);
    return ( 
        <React.Fragment>
            <nav aria-label="...">
  <ul className="pagination">
      {pages.map(page => 
    <li key={page} style={{cursor:"pointer"}} className={page === currentPage ? "page-item pe-auto active" : "page-item "}>
        <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
    </li>
    )}
    </ul>
</nav>
        </React.Fragment>
     );
}
 
export default Pagination;