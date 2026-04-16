import { Link } from "react-router"; // importerer Link funksjonen
import { useJobs } from "../context/JobsContext"; // importerer context-en min
import "../css/JobLink.css" // importerer css til denne siden

const JobLink = (job) => { 
    const {
        addToLikedJobs, 
        removeFromLikedJobs,
        isLikedJob
    } = useJobs() // *unpacker* funksjoner og variabler fra context-en min

    const likedJob = isLikedJob(job.id) // lager en bool variabel som skjekker om en job er likt eller ikke

    const toggleLike = (e) => {
        e.preventDefault() // stopper den default/vanlige tingen som 'submit' gjør.
        if (likedJob) removeFromLikedJobs(job.id) // hvis det er en likt jobb så tar du den vekk fra de likte jobbene
        else addToLikedJobs(job) // motsatte av den over
    }

    return ( 
        <Link className="job-link" to={`/jobs/${job.url}`}> {/* Lager en lenke til en annen side, akkuratt som a, men den funker tydelighvis bedre med react enn 'a' */}
            <article className="job-container"> {/* lager ett element ved klasse: job-container */}
                <button 
                    type="submit" /* gjør om til en spesiell type knapp som er submit, tror ikke den er nødvendig her lenger, men gidder ikke slette den også ødelegge all koden */
                    className={`like-btn ${likedJob ? "liked" : ""}`} /* den er gitt klasse 'like-btn', og så er det en ekstra klasse som er conditional, basert på om den er liked eller ikke */
                    onClick={toggleLike} /* onClick er en innebygd funksjon som lar deg velge hva som skal skje når greia (i dette tilfelle knappen) trykkes */
                >
                    ❤
                </button>
                
                <section className="job-img-container"> 
                    <img className="job-img" src={job.img} alt="Image" /> {/* lager bilde som er definert med en prop, som lar alle componenter være litt unike */}
                    <section className="overlapper"></section> {/* dette er for noe fancy css greier, noe som du ser når do "hover-er" over denne komponenten*/}
                </section>
                
                <form className="job-info">
                    <h2 className="job-title">{job.title}</h2> {/* tittel definert med en prop */}
                    <p className="job-description">{job.description}</p> {/* også en prop, skal ikke forklare props lenger. Unntatt hvis det er helt annerledes bruk selvfølgelig */}

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

export default JobLink // Eksporterer komponenter sånn at den kan importeres til andre filer