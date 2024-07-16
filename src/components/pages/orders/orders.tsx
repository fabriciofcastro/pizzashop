

import { Helmet } from 'react-helmet-async'

import { Input } from '../../ui/input'

import { OrderTable } from './order-table'

export function Orders() {
  return (
    <>
      <Helmet>
        <title>Pedidos</title>
      </Helmet>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <form action="" className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros: </span>
          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        </form>
        <div className="border rounded-md">
         <OrderTable />
        </div>
      </div>
    </>
  )
}
