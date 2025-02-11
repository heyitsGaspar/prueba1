'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Home,
  Building,
  GraduationCap,
  Lock,
  UsersRound
} from 'lucide-react'

import { Button } from '@/shared/components/ui/button'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        !(event.target as Element).closest('#mobile-sidebar') &&
        !(event.target as Element).closest('#menu-button')
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/modules/administrator' }, // ✅ Página principal
    
    { name: 'Empresas', icon: Building, path: '/modules/administrator/companies' },
    { name: 'Escuelas', icon: GraduationCap, path: '/modules/administrator/schools' },
    { name: 'Alumnos', icon: UsersRound, path: '/modules/administrator/students' },
    { name: 'Accesos', icon: Lock, path: '/modules/administrator/access' }
  ]

  return (
    <aside className='fixed left-0 top-14 hidden h-screen w-40 flex-col border-r bg-white pr-9 pt-5 shadow-lg md:flex'>
      <nav className='flex flex-col space-y-4'>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <Button className='poppins-bold w-full justify-start space-x-2 text-left text-primary' variant='ghost'>
              <item.icon className='size-5 text-primary' />
              <span>{item.name}</span>
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
