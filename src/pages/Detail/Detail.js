import React, {useContext} from 'react';
import DataContext from '../../context/DataContext';

function Detail(props){
    const {data} = useContext(DataContext);
    const id  = props.match.params.id;
    const post = data.find(p=>p.id===id);
    console.log(post);
    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
        </>
    );
}

export default Detail;