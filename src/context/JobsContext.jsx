// velkommen til kontekst (Context)

import { createContext, useContext, useEffect, useState } from "react"; // importere alle de nødcendige tingene for å få dette til å funke
import Jobs from "/public/jobsMetadata.json"

const JobsContext = createContext() // lage Context-en

const JobsProvider = ({children}) => { // selve funksjonen. children vil egentlig bare si at du kan sette ting inni denne greia når den er importert til an annen fil. det blir en "<> her går barna </>" i stedet for en "< />"
    const [likedJobs, setLikedJobs] = useState([]) // lager liste for de likte jobbene
    const [filter, setFilter] = useState("popular") // lager filter variabelen
    const [filteredJobs, setFilteredJobs] = useState([]) // øager liste for de filtrerte jobbene

    useEffect(() => { // dette funker ikke, men den burde.
        const storedFavs = localStorage.getItem("likedJobs") // planen var egentlig å gjøre sånn at den kunne huske dine likte jobber, men ja. funker ikke
        
        if (storedFavs) setLikedJobs(JSON.parse(storedFavs))
        console.log(storedFavs) // returnerer bare en tom liste
    }, []) // når det ikke er noe her så oppdaterer den bare når du refresher siden

    useEffect(() => { // den andre funksjonen som også skulle være med på å lagre dine likte jobber over refreshes, men fuinker ikke.
        localStorage.setItem("likedJobs", JSON.stringify(likedJobs))
        console.log(localStorage.getItem("likedJobs")) // returnerer bare en tom liste
    }, [likedJobs]) 

    const addToLikedJobs = (job) => { // funksjon for å legge til nye kilte jobber
        setLikedJobs(prev => [...prev, job]) // legger den nye likte jobben til i lista.
    }
    const removeFromLikedJobs = (jobId) => { // funksjon for det motsatte av den over ^^^^
        setLikedJobs(prev => prev.filter(job => job.id !== jobId)) // tar bort jobben fra lista
    }
    const isLikedJob = (jobId) => { // funksjon for å sjekke om det er en likt job
        return likedJobs.some(job => job.id === jobId) // returnerer "true", hvis jobben er i lista og "false" hvis den ikke er det.
    }


    const getFilteredJobs = () => { // dette er funskjonen for å filtrere jobbene :)
        switch (filter) { // lager en switch statement som er en if else, men på steroids
            case "popular": // hvis filteren er "popular"
                return Jobs.filter((job) => job.likes > 100) // returner liste med jobbene som har over 100 likes
            case "new":
                return Jobs.filter((job) => job.date > 20260000) // returnerer liste med jobbene som kom ut etter 2026
            case "browse-all":
                return Jobs // returnerer alle jobbene
            case "liked-jobs":
                return likedJobs // returnerer de likte jobbene
        }
    }

    return (
        <JobsContext.Provider value={{ // jobsContext.Provider er elementet som på en måte funker som område hvor denne konteksten tar effekt. jeg forklarer mer hvor den blir brukt. (det ligger i App.jsx)
            addToLikedJobs,
            removeFromLikedJobs,
            isLikedJob,
            likedJobs,
            filter,
            setFilter,
            filteredJobs,
            setFilteredJobs,
            getFilteredJobs
            // returnerer alle funksjoner som vil bli gjort offentlig
        }}
        >
            {children} {/* viser at alle barna skal her */}
        </JobsContext.Provider>
    );
}

const useJobs = () => { // lager funskjon som returnerer at du bruker JobsContext som en Context lissom.
    return useContext(JobsContext)
}

export { JobsProvider, useJobs } // eksporterer som et object fordi det er flere ting som blir eksportert, har ikke med default fordi da ser importering mer sweaty ut