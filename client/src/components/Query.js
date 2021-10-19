import React, { useState } from 'react'
import axios from "axios"

function Query({api}) {
    let [data, setData] = useState({});

    const getInfo = async (endpoint) => {
        try {
            // let response = await axios.get(endpoint);
            // setData(response.data);
            setData({success: true, data: "cool api endpoint"});
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
            hello {api}
            <button onClick={(e) => {getInfo(api)}}>Call Query</button>
            {data && 
            <p> {JSON.stringify(data)} </p>
            }
        </div>
    )
}

export default Query;
