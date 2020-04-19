import {useEffect, useCallback, useState} from 'react';
import firebase from 'firebase';

function FirebaseAuth(){
    // console.log('Coming from Firebase Auth...');
    const [user, setUser] = useState(null);
    
    useEffect(()=>{ 
        firebase.auth().onAuthStateChanged(newUser=>{
            if(newUser){
                setUser(newUser);
            }else{
                setUser(null)
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
            firebase.auth().createUserWithEmailAndPassword({email,password});      
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