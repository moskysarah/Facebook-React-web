
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Sidebar from "./components/sidebar"

// Pages
import Friends from "./pages/Friends"
import Souvenirs from "./pages/Souvenirs"
import Recording from "./pages/Recording"
import Groupes from "./pages/Groupes"
import Video from "./pages/Video"
import Marketplace from "./pages/MarketPlace"
import Fils from "./pages/Fils"
import Events from "./pages/Events"
import ProfilDetails from "./components/profilDetails"
import Header from "./components/header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Setting from "./pages/setting"
import Gaming from "./pages/Gaming"
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <Router>
       <Header onToggleSidebar={toggleSidebar} />
      <div className="min-h-screen bg-[#1C1C1D] dark:bg-gray-900 flex">

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        {/* Contenu */}
        <main className="p-6 pt-26 md:ml-100">
          <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/amis" element={<Friends />} />
            <Route path="/fils" element={<Fils />} />
            <Route path="/souvenirs" element={<Souvenirs />} />
            <Route path="/enregistrements" element={<Recording />} />
            <Route path="/groupes" element={<Groupes />} />
            <Route path="/video" element={<Video />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/evenements" element={<Events />} />
            <Route path="/profilDetails" element={<ProfilDetails />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/home" element={<Home />} />



          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
