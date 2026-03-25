import { Link } from "react-router";
import { useJobs } from "../context/JobsContext";
import "../css/JobLink.css"

const JobLink = (job) => {
    const {
        addToLikedJobs,
        removeFromLikedJobs,
        isLikedJob
    } = useJobs()

    const likedJob = isLikedJob(job.id)

    const toggleLike = (e) => {
        e.preventDefault()
        if (likedJob) removeFromLikedJobs(job.id)
        else addToLikedJobs(job)
    }

    return (
        <Link className="job-link" to={`/jobs/${job.url}`}>
            <article className="job-container">

                <button 
                    type="submit"
                    className={`like-btn ${likedJob ? "liked" : ""}`} 
                    onClick={toggleLike}
                >
                    ❤
                </button>
                
                <section className="job-img-container">
                    <img className="job-img" src={job.img} alt="Image" />
                    <section className="overlapper"></section>
                </section>
                
                <form className="job-info">
                    <h2 className="job-title">{job.title}</h2>
                    <p className="job-description">{job.description}</p>

                    <section className="stats-container">
                    <label className="like-stat">
                        {job.likes} ❤
                    </label>
                    <label className="purchase-stat">
                        {job.worker_amount} <span className="colored-symbol">👤</span>
                    </label>
                    <label className="price-stat">
                        {job.price}$/h
                    </label>
                </section>
                </form>

                
                
            </article>
        </Link>
    );
}

export default JobLink