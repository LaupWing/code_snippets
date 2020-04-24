import React from 'react';
import {useParams} from 'react-router-dom';

function Detail({data}){
    const {id} = useParams();
    const detail = data.find(s=>s.skill ===id);
    console.log(detail);

    return (
        <div>Detail</div>
    );
}

export default Detail;