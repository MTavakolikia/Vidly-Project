import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
const Table = ({data,onSort,sortColumn,columns}) => {
    return (
        <table className="table">
        <TableHeader
        sortColumn={sortColumn}
        columns={columns}
        onSort={onSort}
         />
        <TableBody 
        data={data}
        columns={columns}
        />
      </table>
        );
}
 
 
export default Table;