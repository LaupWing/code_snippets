import {useState, useEffect} from 'react'
import '../db';
import firebase from 'firebase';
const db = firebase.firestore();

function FirebaseData(){
    const [data, setData] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await db.collection('code_snippets').get()
            const result = res.docs.map(doc=>{
                const data = {
                    ...doc.data(),
                    id: doc.id
                }
                return data;
            })
            setData(result);
        }
        fetchData();
    },[]);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(async user=>{
            if(user){
                const result = await firebase
                    .firestore()
                    .collection('users')
                    .doc(user.uid).get()
                setUserInfo(result.data())
            }
        })
    },[]);

    const addPost = (newPost)=>{
        console.log(newPost);
    }
    return {data, userInfo, setUserInfo, addPost};
}

export default FirebaseData;
