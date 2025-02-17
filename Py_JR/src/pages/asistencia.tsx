import { ClipboardCheck } from "lucide-react"
import { withLayout } from "../HOC/withLayout"

function AsistenciaPage() {
  return (
    <section className="w-full " >

      <div className="flex flex-col md:flex-row justify-start gap-4 px-4 py-4 text-sm">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="./images/media/t_asistencia.jpg"
            className="grayscale hover:grayscale-0 transition-all rounded-lg"
          />
        </div>
        <div className="flex-1">

          <h1 className="text-lg font-bold mb-6 md:text-left inline-flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5" />
            ASISTENCIA
          </h1>
          <div className="p-4">
            <label className="block font-bold mb-2">Selecciona rango de fechas:</label>
            Del : <input type="date" className="border p-2 rounded" />
            ___Al : <input type="date" className="border p-2 rounded" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ">
              Aceptar
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default withLayout(AsistenciaPage)
