import { CircleDollarSign } from "lucide-react"
import { withLayout } from "../HOC/withLayout"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"

function PagosPage() {

  return (

    <section className="w-full " >

      <div className="flex flex-col md:flex-row justify-start gap-4 px-4 py-4 text-sm">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="./images/media/t_pagos.jpg"
            className="grayscale hover:grayscale-0 transition-all rounded-lg"
          />
        </div>
        <div className="flex-1">

          <h1 className="text-lg font-bold mb-6 md:text-left inline-flex items-center gap-2">
            <CircleDollarSign className="h-5 w-5" />
            MIS PAGOS
          </h1>

          <p className="text-sm  text-center md:text-left">
            Lista actualizada de pagos.
            <br /><br />
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">N°</TableHead>
                <TableHead>Alumno</TableHead>
                <TableHead>Horario</TableHead>
                <TableHead>Monto</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>            
          </Table>

        </div>
      </div>

    </section>

  )
}

export default withLayout(PagosPage)
