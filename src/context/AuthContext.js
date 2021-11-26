import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const FirebaseContext = createContext('')
const AuthContext = ({ children }) => {
    const firebaseAuth = useFirebase()
    return (
        <FirebaseContext.Provider value={firebaseAuth}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default AuthContext;