import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import colors  from 'tailwindcss/colors'

const data = [
  { data: '10/12,', revenue: 1200 },
  { data: '11/12,', revenue: 200 },
  { data: '12/12,', revenue: 900 },
  { data: '13/12,', revenue: 530 },
  { data: '14/12,', revenue: 2030 },
  { data: '15/12,', revenue: 1540 },
  { data: '16/12,', revenue: 1680 },
]

export function RevenueChart() {

  
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-0">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Receita no período</CardTitle>
          <CardDescription>Receita diária do período</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-3">
        <ResponsiveContainer width="100%" height={ 240 }>
          <LineChart data={ data } style={ { fontSize: 12 } }>
          <CartesianGrid vertical={false} className="stroke-rose-300" />
            <Line type="linear" strokeWidth={ 2 } dataKey="revenue" stroke={colors.rose['700']} />
            <XAxis dataKey="data" dy={16}/>
            <YAxis
              stroke="#888"
              axisLine={ true }
              width={80}
              tickFormatter={ (value: number) =>
                value.toLocaleString("pr-BR", { style: "currency", currency: "BRL" }) } /></LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
