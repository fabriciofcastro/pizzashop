
import { Check, Search, X } from 'lucide-react'
import { Button } from '../../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../../ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table'
import { OrderDetails } from './order-details'


export function OrderTable() {
  return (
    <Table>
            <TableHeader>
              <TableRow >
                <TableHead className="w-[64px"></TableHead>
                <TableHead className="w-[140px">Identificador</TableHead>
                <TableHead className="w-[180px">Realizado há</TableHead>
                <TableHead className="w-[140px">Status</TableHead>
                <TableHead>                     Cliente</TableHead>
                <TableHead className="w-[140px">Total do pedido</TableHead>
                <TableHead className="w-[164px"></TableHead>
                <TableHead className="w-[132px"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              { Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                      <Button variant="outline" size="xs">
                        <Search className="w-3 h-3" />
                        <span className="sr-only">Detalhes do pedido</span>
                      </Button>
                        </DialogTrigger>
                       <OrderDetails />
                      </Dialog>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">15454158dffef58g4r8</TableCell>
                    <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
                    <TableCell className="">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-400" />
                        <span className="font-medium text-muted-foreground">Pendente</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">Fabricio Castro</TableCell>
                    <TableCell className="font-medium">
                      R$ 140,56
                    </TableCell>
                    <TableCell>
                      <Button variant="secondary" size="xs">
                        Aprovar
                        <Check className="h-3 w-3 ml-2" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="destructive" size="xs">
                        Cancelar
                        <X className="h-3 w-3 ml-2" />
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              }) }
            </TableBody>
          </Table>
  )
}
