import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( /* greia som lar react faktisk funke. du kan se at alt sammen ligger inne i et "main" element ved id "root" på inspector */
  <StrictMode>
    <App />
  </StrictMode>,
)


// Alle filene i "components" er komponenter
// Alle filene i "css" er css
// Alle filene i "pages" er de sidene, ser ut som det er to, som teknisk sett er sant, men det egentlig 30+ sider pga. for loop.


// Jeg skriver dette fordi jeg ikke gidder å skive "Dette er en komponent blablabla" i hver fil.

// Meste parten av komponent forklaring ligger i JobLink og Search

// Dette blir levert inn ganske så sent, og jeg har null bevis for at jeg ikke har skrevet noe annet enn kommentarer, men jeg kan love deg at det er sant fra da jeg kom hjem.