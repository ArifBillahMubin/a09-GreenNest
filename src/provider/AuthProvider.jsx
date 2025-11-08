
import { useEffect, useState } from "react";
import { app } from "../firbase/firebase.config";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    // console.log(user,loading)

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser , updatedData)
    }

    const passwordRest = (email)=>{
        return sendPasswordResetEmail(auth,email);
    }

    const googleSignIn = (googleProvider)=>{
        setUser(true);
        return signInWithPopup(auth,googleProvider);
    }

    const logout = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authData ={
        user,
        setUser,
        createUser,
        logout,
        login,
        updateUser,
        loading,
        setLoading,
        passwordRest, 
        googleSignIn
    }


    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;