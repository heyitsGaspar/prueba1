'use client'
import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/shared/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, X, Home, Building, GraduationCap, UsersRound, Lock, User, LogOut } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Dashboard", icon: Home },
    { name: "Empresas", icon: Building },
    { name: "Escuelas", icon: GraduationCap },
    { name: "Alumnos", icon: UsersRound },
    { name: "Accesos", icon: Lock },
  ];

  return (
    <>
      {/* Header principal */}
      <header className="fixed top-0 left-0 w-full bg-primary min-h-[56px] flex items-center px-2 sm:px-4 justify-between shadow-md z-50">
        
        {/* Contenedor izquierdo con menú y logo */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Menú hamburguesa en pantallas pequeñas */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button id="menu-button" variant="ghost" onClick={toggleMenu} className="md:hidden p-2">
                {isOpen ? <X className="size-6 text-white" /> : <Menu className="size-6 text-white" />}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-64 p-4 shadow-lg" side="left">
              
              <SheetTitle>
                <VisuallyHidden>Menú de navegación</VisuallyHidden>
              </SheetTitle>
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <Button
                    key={index}
                    className="poppins-bold flex w-full items-center justify-start space-x-2 text-left text-primary"
                    variant="ghost"
                    onClick={toggleMenu}
                  >
                    <item.icon className="size-5 text-primary" />
                    <span>{item.name}</span>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          
          <Image src="/assets/condelogo.png" alt="UCondde Logo" width={70} height={70} className="w-10 sm:w-[70px] h-auto" />
        </div>

        {/* Botones de usuario y logout */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-white">
            <User className="size-5 sm:size-6" />
          </button>
          <button className="text-white">
            <LogOut className="size-5 sm:size-6" />
          </button>
        </div>
      </header>

    
      <div className="pt-[56px]"></div>
    </>
  );
};

export default Header;
