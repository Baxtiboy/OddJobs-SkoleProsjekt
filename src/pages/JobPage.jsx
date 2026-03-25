import { useState } from "react";
import "../css/JobPage.css"

function JobPage(job) {
    const [ isOrdering, setIsOrdering ] = useState(true)

    return (
        <section className="job-body">
            <main className="job-page">

                <header className="job-header main-container">
                    <h1 className="job-page-title">{job.title}</h1>
                    <section className="switch-btn-container">
                        <button className={`switch-btn ${isOrdering ? "active" : ""}`} onClick={() => setIsOrdering(true)}>Order</button>
                        <button className={`switch-btn ${isOrdering ? "" : "active"}`} onClick={() => setIsOrdering(false)}>Apply</button>
                    </section>
                </header>

                <main className="job-main main-container">
                    {isOrdering ? (
                        <ul>Order</ul>
                    ) : (
                        <main>
                            <header>Apply</header>
                            <ul>
                                <section className="personal-details">
                                    <input type="text" placeholder="Full name"/>
                                    <input type="text" placeholder="Email"/>
                                    <input type="text" placeholder="Phone number" />
                                </section>
                            </ul>
                        </main>    
                    )}
                </main>

                <aside className="job-purchase main-container">
                    <img className="job-purchase-img" src={job.img} alt="Image" />
                </aside>

                <form className="job-page-info main-container">

                </form>

            </main>
        </section>
    
    );
}

export default JobPage