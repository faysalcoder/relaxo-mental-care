import authentication from "../firebase/authentication.config"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, sendEmailVerification } from 'firebase/auth'
import { useEffect, useState } from "react"


authentication()
const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const handleRegister = (name, email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const emailUser = result.user
                setUser(emailUser)
                handleUpdateName(name)
                handleEmailVerification();
                setError('')
            })
            .finally(() => {
                setIsLoading(false)
            })
            .catch(error => {
                setError(error.code)
            })



    }
    const handleUpdateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {

            })
    }
    const handleLogIn = (email, password) => {
        console.log(email)
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loginUser = result.user
                console.log(loginUser)
                setUser(loginUser)
                setError('')

            })
            .finally(() => {
                setIsLoading(false)
            })
            .catch(error => {
                setError(error.code)
            })

    }
    const handleGoogleSignIn = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleUser = result.user
                setUser(googleUser)
                setError('')
            })
            .finally(() => {
                setIsLoading(false)

            })
            .catch(error => {
                setError(error.code)
            })
    }
    const handleEmailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])

    const handleLogOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => {
                setIsLoading(false)
            })

    }
    return {
        user,
        handleRegister,
        handleLogIn,
        setError,
        error,
        handleLogOut,
        isLoading,
        handleGoogleSignIn
    }

}

export default useFirebase;