import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { DollarSign } from "lucide-react";

export  function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">
        <CardTitle className="text-base font-semibold">Pedido ( dia )</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">246</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-4%</span>{ ' ' }
          em relação a ontem
        </p>

      </CardContent>

    </Card>
  )
}