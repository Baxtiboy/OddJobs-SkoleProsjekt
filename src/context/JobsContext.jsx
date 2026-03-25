import { createContext, useContext, useEffect, useState } from "react";
import Jobs from "/public/jobsMetadata.json"

const JobsContext = createContext()

const JobsProvider = ({children}) => {
    const [likedJobs, setLikedJobs] = useState([])
    const [filter, setFilter] = useState("popular")
    const [filteredJobs, setFilteredJobs] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("likedJobs")
        
        if (storedFavs) setLikedJobs(JSON.parse(storedFavs))
        console.log(storedFavs)
    }, [])

    useEffect(() => {
        localStorage.setItem("likedJobs", JSON.stringify(likedJobs))
        console.log(localStorage.getItem("likedJobs"))
    }, [likedJobs]) 

    const addToLikedJobs = (job) => {
        setLikedJobs(prev => [...prev, job])
    }
    const removeFromLikedJobs = (jobId) => {
        setLikedJobs(prev => prev.filter(job => job.id !== jobId))
    }
    const isLikedJob = (jobId) => {
        return likedJobs.some(job => job.id === jobId)
    }


    const getFilteredJobs = () => {
        switch (filter) {
            case "popular":
                return Jobs.filter((job) => job.likes > 100)
            case "new":
                return Jobs.filter((job) => job.date > 20260000)
            case "browse-all":
                return Jobs
            case "liked-jobs":
                return likedJobs
        }
    }

    return (
        <JobsContext.Provider value={{
            addToLikedJobs,
            removeFromLikedJobs,
            isLikedJob,
            likedJobs,
            filter,
            setFilter,
            filteredJobs,
            setFilteredJobs,
            getFilteredJobs
        }}
        >
            {children}
        </JobsContext.Provider>
    );
}

const useJobs = () => {
    return useContext(JobsContext)
}

export { JobsProvider, useJobs }