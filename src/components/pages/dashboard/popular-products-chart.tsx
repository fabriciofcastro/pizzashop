import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import colors from 'tailwindcss/colors'
import { BarChart } from 'lucide-react';

const data = [
  { product: 'Pepperoni,', amount: 72 },
  { product: 'Mussarela', amount: 45 },
  { product: 'Marguerita,', amount: 56 },
  { product: '4 Queijo,', amount: 49 },
  { product: 'Portuguesa,', amount: 62 },
  { product: 'Calabresa,', amount: 35 },
  { product: 'Frango,', amount: 39 },
]

const COLORS = [
  colors.sky[500],
  colors.orange[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
  colors.blue[500],
  colors.green[500]

]

export function PopularProductsChart() {

  
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Produtos mais vendidos</CardTitle>
          <BarChart className="w-4 h-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="mt-3">
        <ResponsiveContainer width="100%" height={ 240 }>
          <PieChart style={ { fontSize: 12 } }>
            <Pie 
              data={data} 
              dataKey="amount" 
              nameKey="product" 
              cx="50%" cy="50%" 
              outerRadius={86} 
              innerRadius={45} 
              strokeWidth={3}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)
              
                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {data.map((_, index) => {
                return (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} className="stroke-background" />
                )
              })              
            }
            </Pie>
              
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
