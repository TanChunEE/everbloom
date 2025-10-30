import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Trending from "./components/Trending"
import useDocumentTitle from "./utils/useDocumentTitle"

const App = () => {
  useDocumentTitle("Everbloom", { prefix: "Official" })
  
  return (
    <div className="min-h-screen overflow-clip">
      <Header />
      <hr className="text-zinc-300 -mt-4"/>
      <main>
        <Hero />
        <hr className="text-zinc-300"/>
        <Trending />
        <Footer />
      </main>
    </div>
  )
}

export default App
