import { useState, useEffect } from "react" // Importerer useState og useEffect fra react
import { useJobs } from "../context/JobsContext" // importerer context-en min
import JobLink from "./JobLink" // importerer en annen komponent: JobLink
import "../css/Search.css" // importerer css

const Search = () => { // definerer komponenten med en funksjon, som kan være med enten "arrow function" (den her), eller en normal standard funksjon, de gjør ikke noe forskjell. 
    const {
        filter,
        setFilter,
        likedJobs,
        filteredJobs,
        setFilteredJobs,
        getFilteredJobs
    } = useJobs() // importerer funksjoner og variabler fra context-en min

    const [searchQuery, setSearchQuery] = useState("") // definerer en variabel med useState som er nødvendig for at ting skal blu husket over re-renders.

    const handleSearch = (e) => { // lager en funksjon som skal ta seg av søking
        e.preventDefault() // stopper default behaviour fra å skje, detter nødvendig fordi de dumme submit knappene refresher hele jævla siden, hvis du ikke .preventDefault()-er den.
        if (!searchQuery.trim()) return // sjekker om det bare er empty spaces i søkgreia.
    }

    useEffect(() => { // useEffect er en funskjon som oppdaterer/re-renderer tingetang når noe endrer seg
        setFilteredJobs(getFilteredJobs()) // setter de filtrerte jobbene til å være den nye verdien.
    }, [filter]) // greia i "[]" er hva som må endres for at denne funksjonen spilles av.


    return (
        <main className="search"> 
            <form className="search-container" onSubmit={handleSearch}> {/* her har vi ordentlig bruk av type submit. Detter er essensielt onClick bare med at det er når 
            knappen av type submit blir trykket på istedet for at det er når hele greia blir trykket på */}
                <input 
                    className="search-query" 
                    type="text"
                    placeholder="What J*b today?" /* placeholder er hva som ligger i inputen før du har skrevet noe i den */
                    value={searchQuery} // No way, jeg kan skrive kommentarer her med dobbelt slash :| Dette sier at verdien til inputen er variabelen vi bruker til å filtrere ting :tommel_opp_type_shi____jeg_hater_kommentarer: 
                    onChange={(e) => setSearchQuery(e.target.value)} // dette lar deg faktisk endre på variablen når du søker
                />
                <button className="search-btn" type="submit"> {/* her er den vakre submit knappen */}
                    Search 
                </button>
            </form>

            <section className="category-container">
                <button 
                    className={`category-btn ${filter === "popular" ? "active" : ""}`} // Snakka om contidionals tidligere, men jeg føler for å gjøre det igjen, fordi det er litt anderledes
                    onClick={() => setFilter("popular")}
                >
                    Popular
                </button>
                <button 
                    className={`category-btn ${filter === "new" ? "active" : ""}`} // Du sjekker som filteret er lik navnet på knappen, og så gir den det aktiv klassen hvis det er sant
                    onClick={() => setFilter("new")} // når du trykker så endrter den filteret til det du trykka på.
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
            {/* Dette er hva jeg har venta på */}
            <section className="search-content">
                {filteredJobs.length > 0 ? (filteredJobs.map(job => ( // her har vi en sånn conditional/ifstatement/kortIfStatement som sjekker om det er noen jobber i de filtrerte jobbene engang
                //   så er det en liten map funksjon her ^^^ som går gjennom alle elementene i listen/array-en som er de filtrerte jobbene
                    job.title.toLowerCase().includes(searchQuery.toLowerCase()) && ( // && er magisk for "=sant då gjør du dette". Hvis tittelen til jobben i lowercase inkluderer det du søker på i lowercase så gjør du dette:
                    <JobLink {...job} key={job.id} /> // her lager man så mange JobLink komponenter som det er jobber i de filtrerte jobbene, De filtrerte jobbene er bare metadata, som blir satt inn i komponenetene som du kan se på denne linjen langt til venstre for deg fra her.
                    // dette filterer jobbene i kategorien du er i og filtrerer med søkingen samtidig.
                )))) : (
                    <section className="no-jobs"> {/* Dette er hva som skjer hvis det ikke er noen jobber i de filtrerte jobbene */}
                        No jobs in this category {/* Det er faktisk ikke jobber i denne kategorien */}
                    </section>
                )}
            </section>
            
        </main>
    );
}

export default Search