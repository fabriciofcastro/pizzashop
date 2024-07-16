import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

const signup = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),

  email: z.string().email()

})

type SingUpForm = z.infer<typeof signup>

export function SignUp() {

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SingUpForm>()

  const navigate = useNavigate()

  async function handlesingUp(data: SingUpForm) {
    try {
      console.log(data);

      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log(data);


      toast.success("Restaurante cadastrado com sucesso", {
        action: {
          label: "Login",
          onClick: () => navigate('/sign-in')
        }
      })

    } catch (error) {
      toast.error("Link de autenticação não foi enviado para seu email")
    }
  }

  return (
    <>
      <Helmet>
        <title>Cadastro</title>
      </Helmet>
      <div className="p-8">

        <Button variant="ghost" asChild className="absolute right-8 top-8 border-solid border-zinc-100 border-2 hover:text-rose-700 transition-colors ease-linear duration-200">
          <Link to="/sign-in">
            Já tenho cadastro
          </Link>
        </Button>
        <div className="w-[350px] flex flex-col gap-6 justify-center">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Criar sua conta grátis</h1>
            <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas! </p>
          </div>

          <form onSubmit={ handleSubmit(handlesingUp) } className="flex flex-col gap-4">

            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelicimento</Label>
              <Input id="restaurantName" type="text" { ...register('restaurantName') } />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input id="managerName" type="text" { ...register('managerName') } />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="tel" { ...register('phone') } />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" { ...register('email') } />
            </div>
            <Button disabled={ isSubmitting } type="submit">Finalizar cadastro</Button>

            <p className="px-6 text-center text-sm loading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos {' '}
             <a href="#" className="text-rose-400 font-semibold underline underline-offset-2 hover:text-rose-700 transition-colors ease-linear duration-200">Termos de serviços</a>
             {' '}e{' '}
             <a href="#" className="text-rose-400 font-semibold underline underline-offset-2 hover:text-rose-700 transition-colors ease-linear duration-200">políticas de privacidade</a>
            </p>
          </form>

        </div>
      </div>
    </>
  )
}