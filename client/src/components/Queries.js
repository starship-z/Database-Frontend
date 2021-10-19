import React from 'react'
import Query from './Query'




function Queries() {

    const base = "http://localhost:3000/api/"
    const endpoints = ["query1", "query2", "query3", "query4"];
    // <Query api=base + endpoints[i]/>
    return (
        <div>
            <h3>Queries</h3>
            {endpoints.map(query => <Query api={base + query} />)}
        </div>
    )
}

export default Queries;
