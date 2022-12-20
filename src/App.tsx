import Navbar from "./components/Navbar"
import ThemeContextProvider from "./contexts/ThemeContext"

function App() {

  return (
    <ThemeContextProvider>
      <Navbar />
    </ThemeContextProvider>
  )
}

export default App
