import { Helmet } from 'react-helmet-async'
import { OrderTable } from './order-table'
import { OrderTableFilters } from './order-table-filters'
import { Pagination } from './pagination'

export function Orders() {
  return (
    <>
      <Helmet>
        <title>Pedidos</title>
      </Helmet>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />
          <div className="border rounded-md">
            <OrderTable />
          </div>
          <Pagination pageIndex={0} totalCount={185} perPage={10} />
        </div>
      </div>
    </>
  )
}
