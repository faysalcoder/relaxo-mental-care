import { useContext } from "react"
import { FirebaseContext } from "../context/AuthContext"

const useAuth = () => {
    return useContext(FirebaseContext)
}
export default useAuth