
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select'
import { Search, X } from 'lucide-react'

export function OrderTableFilters() {
  return (
    <form action="" className="flex items-center gap-2">
    <span className="text-sm font-semibold">Filtros: </span>
    <Input placeholder="ID do pedido" className="h-8 w-auto" />
    <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
    <Select defaultValue='all'> 
      <SelectTrigger className="h-8 w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="all">Todos status</SelectItem>
        <SelectItem value="pending">Pedente</SelectItem>
        <SelectItem value="canceled">Cancelados</SelectItem>
        <SelectItem value="delivering">Em entrega</SelectItem>
        <SelectItem value="delivered">Entregue</SelectItem>
      </SelectContent>
    </Select>

    <Button type="submit" variant="secondary" size="xs">
      Filtrar resultados
      <Search className="w-4 h-4 ml-2"/>
    </Button>
    <Button type="button" variant="outline" size="xs">
      Filtrar resultados
      <X className="w-4 h-4 ml-2"/>
    </Button>
  </form>
  )
}
