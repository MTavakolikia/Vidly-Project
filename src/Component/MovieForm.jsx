import React from 'react';
const MovieForm = ({match,history}) => {
    return ( 
        <React.Fragment>
        <h2>MovieForm</h2>
        {match.params.id}
        <button className="btn btn-primary " onClick={() => history.push('/movies')}>Save</button>
        </React.Fragment>
     );
}
 
export default MovieForm;