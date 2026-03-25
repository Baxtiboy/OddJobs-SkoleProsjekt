import { BrowserRouter, Routes, Route } from 'react-router';
import { JobsProvider } from "./context/JobsContext"
import Jobs from "../public/jobsMetadata.json"
import Home from "./pages/Home"
import JobPage from "./pages/JobPage"
import Header from "./components/Header"

function App() {
  return (
    <JobsProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {Jobs.map(job => {
            console.log(job)
            return <Route path={`/jobs/${job.url}`} element={<JobPage {...job} key={job.id} />} />
          })}
        </Routes>
      </BrowserRouter>
    </JobsProvider>
    
  );
}

export default App;
