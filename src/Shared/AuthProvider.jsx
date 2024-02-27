import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);


    const handleRegisterUser = async (email, password) => {
        setLoading(true)
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLoginUser = async (email, password) => {
        setLoading(true)
        return await signInWithEmailAndPassword(auth, email, password);
    }

    const handleGoogleUser = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    const authInfo = {
        user,
        handleRegisterUser,
        handleLoginUser,
        signOutUser,
        loading,
        handleGoogleUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;