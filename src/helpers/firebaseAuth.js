import {useEffect, useCallback, useState} from 'react';
import firebase from 'firebase';

function FirebaseAuth(){
    const [user, setUser] = useState(null);
    
    useEffect(()=>{ 
        firebase.auth().onAuthStateChanged(newUser=>{
            if(newUser){
                setUser(newUser);
            }else{
                setUser(null);
            }
        });
    },[]);
    
    const logout = useCallback(()=>{
        firebase.auth().signOut();
    },[]);

    const login = useCallback(async({email,password})=>{
        try{
            await firebase.auth().signInWithEmailAndPassword(
                email,
                password
            ); 
        }catch(error){
            return error
        }
    },[])
    
    const signup = useCallback(async({email,password})=>{
        try{
            const newUser = await firebase.auth().createUserWithEmailAndPassword(email,password);  
            firebase.firestore().collection('users').doc(newUser.user.uid).set({
                favorites:[],
                type: 'visitor'
            });
        }catch(error){
            console.log(error);
        }
    },[]);
    return{
        logout,
        user,
        login,
        signup
    }
}

export default FirebaseAuth;