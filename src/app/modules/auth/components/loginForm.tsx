'use client'

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'
import { Switch } from '@/shared/components/ui/switch'
import { useLogin } from '@/app/modules/singUp/hooks/useLogin'
import Image from 'next/image'

const LoginForm = () => {
  const { form, onSubmit } = useLogin()

  return (
    <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto'>
      <div className='flex justify-center mb-6'>
        <Image
          src='/assets/condelogo.png'
          alt='conde'
          width={150}
          height={50}
        />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          {/* Correo Electrónico */}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='mb-4'>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input type='email' placeholder='Ingresar' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Contraseña */}
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className='mb-4'>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='Ingresar' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<div className='flex justify-between items-center mb-2'>
  {/* Contenedor del Switch y "Recuérdame" */}
  <FormField
    control={form.control}
    name='rememberMe'
    render={({ field }) => (
      <FormItem className='flex items-center space-x-2'> {/* Ajuste aquí */}
        <FormControl>
          <Switch 
            className='w-8 mt-2 h-4.5 rounded-full' 
            onCheckedChange={field.onChange}
            checked={field.value}
          />
        </FormControl>
        <span className='text-sm'>Recuérdame</span>
      </FormItem>
    )}
  />

<div className='text-right mt-2'>
    <a
      href='#'
      className='text-sm text-blue-500 hover:underline'
    >
      ¿Olvidaste tu contraseña?
    </a>
  </div>
</div>
   

          {/* Botón de Inicio de Sesión */}
          <Button
            type='submit'
            className='w-full bg-primary text-white py-3 text-lg'
          >
            Iniciar sesión
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm

