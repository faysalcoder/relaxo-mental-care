import { useState, useEffect } from "react"

const useCounselors = () => {
    const [counselors, setCounselors] = useState([])
    useEffect(() => {
        fetch('/counselors.json')
            .then(res => res.json())
            .then(data => setCounselors(data))
        console.log(counselors)
    }, [])

    return {
        counselors
    }
}
export default useCounselors;