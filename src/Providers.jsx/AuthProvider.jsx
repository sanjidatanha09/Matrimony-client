import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import useAxiosPublic from '../hook/useAxiosPublic';





export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const axsiosPublic = useAxiosPublic();

   

    //for google login start
    const googleProvider = new GoogleAuthProvider();
    //for google login end

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    //google sign in

    const googleSignIn = (value) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //user login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    //logout button
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser)
            setLoading(false);
            

            if (currentUser) {
                //get token and store client
                const userInfo = { email: currentUser.email };
                axsiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })

            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false);

            }

        });

        return () => {
            return unsubscribe();
        }

    }, [axsiosPublic])

    const userInfo = {
        googleSignIn,
        user,
        loading,
        createUser,
        logOut,
        signIn,
        updateUserProfile

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
