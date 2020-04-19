import {useEffect, useCallback, useState} from 'react';


function firebaseAuth(){
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
        firebaseAuth.auth().signOut();
    }, []);

    const login = useCallback(async({email,password})=>{
        try{
            const result = await firebase.auth().signInWithEmailAndPassword({
                email,
                password
            }); 
            setUser(result);
            console.log(result);
        }catch(error){
            console.log(error);
        }
    })

    const signup = useCallback(async({email,password})=>{
        try{
            firebase.auth().createUserWithEmailAndPassword({email,password});      
        }catch(error){
            console.log(error);
        }
    });

    return{
        logout,
        user,
        login,
        signup
    }
}

export default firebaseAuth;