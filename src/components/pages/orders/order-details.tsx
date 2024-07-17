import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../ui/dialog";
import { Separator } from "../../ui/separator";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../../ui/table";


export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 1827fy28d6h</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
        <Separator />
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Status
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Cliente
              </TableCell>
              <TableCell className="flex justify-end">
                Fabricio Castro
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell className="text-muted-foreground">
               Telefone
              </TableCell>
              <TableCell className="flex justify-end">
              (11) 98885-5552
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
               E-mail
              </TableCell>
              <TableCell className="flex justify-end">
              fabricio@gmail.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
               Realizado há
              </TableCell>
              <TableCell className="flex justify-end">
              há 3 minutos
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHeader>
            <TableHead>Produtos</TableHead>
            <TableHead className="text-right">Qtds.</TableHead>
            <TableHead className="text-right">Preço</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Pepperoni</TableCell>
              <TableCell className="text-right">02</TableCell>
              <TableCell className="text-right">R$ 69,99</TableCell>
              <TableCell className="text-right">R$ 139,98</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Mussarela</TableCell>
              <TableCell className="text-right">02</TableCell>
              <TableCell className="text-right">R$ 59,99</TableCell>
              <TableCell className="text-right">R$ 119,98</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total dos Pedidos</TableCell>
                <TableCell className="text-right font-medium">R$ 259,96</TableCell>
              </TableRow>  
            </TableFooter>
          </Table>
      </div>
    </DialogContent>
  )
}
