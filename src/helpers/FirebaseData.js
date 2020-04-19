import {useState, useEffect} from 'react'
import '../db';
import firebase from 'firebase';
const db = firebase.firestore();

function FirebaseData(){
    const [data, setData] = useState(null);
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await db.collection('code_snippets').get()
            const result = res.docs.map(doc=>{
                return doc.data();
            })
            setData(result);
        }
        fetchData();
    },[]);
    return {data};
}

export default FirebaseData;
