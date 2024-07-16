import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Link } from "react-router-dom"

const signIn = z.object({
  email: z.string().email()
})

type SignInForm = z.infer<typeof signIn>

export function SigniIn() {

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data);

      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success("enviamos um link de autenticação para seu email", {
        action: {
          label: "Reenviar",
          onClick: () => handleSignIn(data)
        }
      })

    } catch (error) {
      toast.error("Link de autenticação não foi enviado para seu email")
    }
  }

  return (
    <>
      <Helmet>
        <title>Sign-in</title>
      </Helmet>
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8 border-solid border-zinc-100 border-2 hover:text-rose-700 transition-colors ease-linear duration-200">
          <Link to="/sign-up">
            Novo estabelecimento
          </Link>
        </Button>
        <div className="w-[350px] flex flex-col gap-6 justify-center">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Acessar Painel</h1>
            <p className="text-sm text-muted-foreground">Acompanhe suas vendas </p>
          </div>

          <form onSubmit={ handleSubmit(handleSignIn) } className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" { ...register('email') } />
            </div>
            <Button disabled={ isSubmitting } type="submit">Acessar painel</Button>
          </form>
        </div>
      </div>
    </>
  )
}