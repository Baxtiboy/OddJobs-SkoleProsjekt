import { useState, useEffect } from "react"
import { useJobs } from "../context/JobsContext"
import JobLink from "./JobLink"
import "../css/Search.css"

const Search = () => {
    const {
        filter,
        setFilter,
        likedJobs,
        filteredJobs,
        setFilteredJobs,
        getFilteredJobs
    } = useJobs()

    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
    }

    useEffect(() => {
        setFilteredJobs(getFilteredJobs())
        console.log(getFilteredJobs())
    }, [filter])


    return (
        <main className="search">
            <form className="search-container" onSubmit={handleSearch}>
                <input 
                    className="search-query" 
                    type="text"
                    placeholder="What J*b today?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-btn" type="submit">
                    Search
                </button>
            </form>

            <section className="category-container">
                <button 
                    className={`category-btn ${filter === "popular" ? "active" : ""}`} 
                    onClick={() => setFilter("popular")}
                >
                    Popular
                </button>
                <button 
                    className={`category-btn ${filter === "new" ? "active" : ""}`}
                    onClick={() => setFilter("new")}
                >
                    New
                </button>
                <button
                    className={`category-btn ${filter === "browse-all" ? "active" : ""}`}
                    onClick={() => setFilter("browse-all")}
                >
                    Browse All
                </button>
                <button
                    className={`category-btn ${filter === "liked-jobs" ? "active" : ""}`}
                    onClick={() => setFilter("liked-jobs")}
                >
                    Liked J*bs
                </button>
            </section>
            
            <section className="search-content">
                {filteredJobs.length > 0 ? (filteredJobs.map(job => (
                    job.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
                    <JobLink {...job} key={job.id} /> 
                )))) : (
                    <section className="no-jobs">
                        No jobs in this category
                    </section>
                )}
            </section>
            
        </main>
    );
}

export default Search