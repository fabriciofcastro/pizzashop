import { Helmet } from "react-helmet-async";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

export function SigniIn() {
  return (
    <>
      <Helmet>
        <title>Sign-in</title>
      </Helmet>
      <div className="p-8">
        <div className="w-[350px] flex flex-col gap-6 justify-center">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Acessar Painel</h1>
            <p className="text-sm text-muted-foreground">Acompanhe suas vendas </p>
          </div>

          <form className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" />
            </div>
            <Button type="submit">Acessar painel</Button>
          </form>
        </div>
      </div>
    </>
  )
}