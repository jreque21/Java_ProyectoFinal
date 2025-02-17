import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { withLayout } from "../HOC/withLayout"
import { Medal } from "lucide-react"

function CinturonPage() {
  return (

    <section className="w-full " >

      <div className="flex flex-col md:flex-row justify-start gap-4 px-4 py-4 text-sm">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="./images/media/t_cinturones.jpg"
            className="grayscale hover:grayscale-0 transition-all rounded-lg"
          />
        </div>
        <div className="flex-1">

          <h1 className="text-lg font-bold mb-6 md:text-left inline-flex items-center gap-2">
            <Medal className="h-5 w-5" />
            MIS CINTURONES
          </h1>

          <p className="text-sm  text-center md:text-left">
            Lista de cinturones...
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Orden</TableHead>
                <TableHead>Cinturón</TableHead>
                <TableHead>Icono</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Blanco</TableCell>
                <TableCell><img src="./images/cinturones/1.png" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Blanco con Punta Amarilla</TableCell>
                <TableCell><img src="./images/cinturones/2.png" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Amarillo</TableCell>
                <TableCell><img src="./images/cinturones/3.png" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>Amarillo con Punta Verde</TableCell>
                <TableCell><img src="./images/cinturones/4.png" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell>Verde</TableCell>
                <TableCell><img src="./images/cinturones/5.png" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6</TableCell>
                <TableCell>Verde con Punta Azul	</TableCell>
                <TableCell><img src="./images/cinturones/6.png" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>7</TableCell>
                <TableCell>Azul</TableCell>
                <TableCell><img src="./images/cinturones/7.png" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>8</TableCell>
                <TableCell>Azul con Punta Roja	</TableCell>
                <TableCell><img src="./images/cinturones/8.png" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>9</TableCell>
                <TableCell>Rojo</TableCell>
                <TableCell><img src="./images/cinturones/9.png" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10</TableCell>
                <TableCell>Rojo con Punta Negra	</TableCell>
                <TableCell><img src="./images/cinturones/10.png" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>11</TableCell>
                <TableCell>1 Poom</TableCell>
                <TableCell><img src="./images/cinturones/11.png" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>12</TableCell>
                <TableCell>2 Poom	</TableCell>
                <TableCell><img src="./images/cinturones/12.png" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>13</TableCell>
                <TableCell>3 Poom	</TableCell>
                <TableCell><img src="./images/cinturones/13.png" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>14</TableCell>
                <TableCell>Negro</TableCell>
                <TableCell><img src="./images/cinturones/14.png" /></TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </div>
      </div>

    </section>

  )
}

export default withLayout(CinturonPage)
