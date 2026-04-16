import { BrowserRouter, Routes, Route } from 'react-router'; // for å kunne lage nye sider
import { JobsProvider } from "./context/JobsContext" // den vakre konteksten min
import Jobs from "../public/jobsMetadata.json" // metadataen som er det eneste laget av chat, untatt de to første jobbene, og img url/src greia
import Home from "./pages/Home" // hjemmesiden
import JobPage from "./pages/JobPage" // hvor du får se jobben i mer detalj
import Header from "./components/Header" // headern

function App() {
  return (
    <JobsProvider> {/* her ligger den. Alt inne i dette elementet/Context-en (children/barna) har tilgang til de funksjonene vi lagde i JobsContext.jsx */}
      <BrowserRouter> {/* Lik context-en min, men mindre aura. Alt inni her (barna/children) har tilgang til routes (egne paths/sider)*/}
        <Header />
        <Routes> {/* inne i her så skal det være nye siden med egen path */}
          <Route path="/" element={<Home />} /> {/* hjemme path-en. path er path, og element er hva som ligger på den path-en, i andre, ord selve siden*/}
          {Jobs.map(job => { // dette er hvorfor det er 30+ sider (ikke juks med for loop)
            return <Route path={`/jobs/${job.url}`} element={<JobPage {...job} key={job.id} />} /> /* returnerer en egen path for hver jobb, og gir den egne props */
          })}
        </Routes>
      </BrowserRouter>
    </JobsProvider>
    
  );
}

export default App;
