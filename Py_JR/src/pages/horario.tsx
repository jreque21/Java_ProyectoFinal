import { Calendar } from "lucide-react"
import { withLayout } from "../HOC/withLayout"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Separator } from "../components/ui/separator"

function HorarioPage() {
  return (
    <section className="w-full " >

      <div className="flex flex-col md:flex-row justify-start gap-4 px-4 py-4 text-sm">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="./images/media/t_horarios.jpg"
            className="grayscale hover:grayscale-0 transition-all rounded-lg"
          />
        </div>
        <div className="flex-1">

          <h1 className="text-lg font-bold mb-6 md:text-left inline-flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            HORARIOS DISPONIBLES
          </h1>

          <Card className="border-purple-500">
            <CardHeader>
              <CardTitle>Básico</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <p>Lunes - Miércoles - Viernes [ 09-11am ]</p>
              <p>Sábados y Domingos [ 09-11am ]</p>
            </CardContent>
          </Card>
          <br />
          <Card className="border-red-500">
            <CardHeader>
              <CardTitle>Intermedio</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <p>Lunes - Miércoles - Viernes [ 11-01pm ]</p>
              <p>Sábados y Domingos [ 11-01pm ]</p>
            </CardContent>
          </Card>
          <br />
          <Card className="border-green-500">
            <CardHeader>
              <CardTitle>Avanzado</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <p>Lunes - Miércoles - Viernes [ 03-05pm ]</p>
              <p>Sábados y Domingos [ 03-05pm ]</p>
            </CardContent>
          </Card>

        </div>
      </div>

    </section>
  )
}

export default withLayout(HorarioPage)
