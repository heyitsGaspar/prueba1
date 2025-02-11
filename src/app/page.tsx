import { Button } from '@/shared/components/ui/button'
import React from 'react';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-full text-center px-4 md:px-0">
    <h1 className="text-4xl md:text-5xl font-bold text-primary">Hello world</h1>
    <p className="text-gray-600 mt-2 font-montserrat font-bold text-lg md:text-xl">
      Bienvenido a la plataforma Condde
    </p>
    <Button className="mt-4">Example button</Button>
  </section>
  );
}
