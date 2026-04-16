// ingenting nytt inni her

import { useState } from "react";
import "../css/JobPage.css"
import DetailsInput from "../components/DetailsInput";

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
                    {isOrdering ? ( // stor if else conditional tingetang, kunne brukt sånn Route, men det gadd jeg ikke
                        <main>
                            <ul className="job-input-details">
                                <section className="personal-details job-input-details-section">
                                    <DetailsInput header="First name" />
                                    <DetailsInput header="Last name" />
                                    <DetailsInput header="Billing address" />
                                    <DetailsInput header="Billing address, line 2 *optional" />
                                    <DetailsInput header="Country" />
                                    <DetailsInput header="City" />
                                    <DetailsInput header="Zip or postal code" />
                                    <DetailsInput header="Phone number" />
                                </section>
                                <section className="job-credit-card-details job-input-details-section">
                                    <DetailsInput header="Card number" />
                                    <DetailsInput header="Expiration date" placeholder="MM/YYYY"/>
                                    <DetailsInput header="Security code" />
                                </section>
                            </ul>
                        </main>    
                    ) : (
                        <main>
                            <ul>
                                <section className="personal-details job-input-details-section">
                                    <DetailsInput header="Full name" />
                                    <DetailsInput header="Billing address" />
                                    <DetailsInput header="Billing address, line 2 *optional" />
                                    <DetailsInput header="Country" />
                                    <DetailsInput header="City" />
                                    <DetailsInput header="Zip or postal code" />
                                    <DetailsInput header="Phone number" />
                                    <DetailsInput header="Email" />
                                </section>
                                <section className="job-application-filedrop-section">
                                    <section className="job-application-filedrop">
                                        <h3 className="job-application-filedrop-header">File</h3>
                                        <p className="job-application-filedrop-info">Place your application file here</p>
                                        <p className="job-application-filedrop-options">*.txt/pdf</p>
                                    </section>
                                </section>
                            </ul>
                        </main>    
                    )}
                </main>

                <aside className="job-purchase main-container">
                    <img className="job-purchase-img" src={job.img} alt="Image" />
                    <button className="job-submit-btn" >{isOrdering ? "Order j*b" : "Apply for j*b"}</button>
                </aside>

                <form className="job-page-info main-container">
                    <h2>Reviews coming soon</h2>
                </form>

            </main>
        </section>
    
    );
}

export default JobPage