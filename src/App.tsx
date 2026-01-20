import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useState } from "react"
import Sidebar from "./components/sidebar"
import Header from "./components/header"

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
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Setting from "./pages/setting"
import Gaming from "./pages/Gaming"

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  // Pages sans layout (pas de header, pas de sidebar)
  const authPages = ["/", "/signup"]
  const isAuthPage = authPages.includes(location.pathname)

  return (
    <>
      {/* Header */}
      {!isAuthPage && <Header onToggleSidebar={toggleSidebar} />}

      <div className="min-h-screen bg-[#1C1C1D] dark:bg-gray-900 flex">
        {/* Sidebar */}
        {!isAuthPage && (
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        )}

        {/* Contenu principal */}
        <main
          className={`flex-1 p-4 ${
            isAuthPage
              ? ""
              : "pt-20 md:pt-26 md:ml-70 lg:ml-80 xl:ml-100"
          }`}
        >
          <Routes>
            {/* Auth */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* App */}
            <Route path="/home" element={<Home />} />
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
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
