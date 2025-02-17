import { Route, Routes } from "react-router"
import HomePage from "./pages/home"
import { ThemeProvider } from "./context/theme-context"
import HorarioPage from "./pages/horario"
import CinturonPage from "./pages/cinturon"
import AsistenciaPage from "./pages/asistencia"
import PagosPage from "./pages/pagos"

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/horario" element={<HorarioPage />} />
        <Route path="/cinturon" element={<CinturonPage />} />
        <Route path="/asistencia" element={<AsistenciaPage />} />
        <Route path="/pagos" element={<PagosPage />} />

      </Routes>
    </ThemeProvider>
  )
}

export default App
