'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/shared/components/ui/table'
import { Button } from '@/shared/components/ui/button'
import { Eye, Filter } from 'lucide-react'
import React from 'react'
import PaginationComponent from '@/shared/components/pagination'
import PaginationControls from '@/shared/components/paginationControls'
import PageSelector from '@/shared/components/pageSelector' // Importamos el nuevo componente

const empresas = [
  {
    nombre: 'Telcel',
    descripcion: 'Empresa líder en telefonía móvil...',
    ubicacion: 'C. 10, Plan de A...',
    rfc: 'TLC033HYJ3',
    contacto: '+52 123 456 7890',
    correo: 'telcel@ejemplo.mx'
  },
  {
    nombre: 'Telmex',
    descripcion: 'Empresa líder en telefonía móvil...',
    ubicacion: 'C. 29, Avenida...',
    rfc: 'TLM194YCJ6',
    contacto: '+52 123 456 7890',
    correo: 'telmex@ejemplo.mx'
  },
  {
    nombre: 'Unilever',
    descripcion: 'Empresa líder en telefonía móvil...',
    ubicacion: 'C. 39, Colonia...',
    rfc: 'UNL823HYPR',
    contacto: '+52 123 456 7890',
    correo: 'unilever@ejemplo.mx'
  },
  {
    nombre: 'Cemex',
    descripcion: 'Compañía global de materiales...',
    ubicacion: 'Av. de los trabajadores...',
    rfc: 'CMX192WERT',
    contacto: '+52 123 456 7890',
    correo: 'cemex@ejemplo.mx'
  },
  {
    nombre: 'BBVA',
    descripcion: 'Institución financiera global...',
    ubicacion: 'Av. Reforma 123...',
    rfc: 'BBV321RFE8',
    contacto: '+52 123 456 7890',
    correo: 'bbva@ejemplo.mx'
  },
  {
    nombre: 'Grupo Bimbo',
    descripcion: 'Líder mundial en panadería...',
    ubicacion: 'Av. Panamericana...',
    rfc: 'BIM456SHJ7',
    contacto: '+52 123 456 7890',
    correo: 'grupobimbo@ejemplo.mx'
  },
  {
    nombre: 'Cinemex',
    descripcion: 'Cadena de cines en México...',
    ubicacion: 'Paseo de la Reforma...',
    rfc: 'CIN768OPQR',
    contacto: '+52 123 456 7890',
    correo: 'cinemex@ejemplo.mx'
  },
  {
    nombre: 'Liverpool',
    descripcion: 'Retail de moda y tecnología...',
    ubicacion: 'Av. Insurgentes Sur...',
    rfc: 'LIV987QWYZ',
    contacto: '+52 123 456 7890',
    correo: 'liverpool@ejemplo.mx'
  },
  {
    nombre: 'Walmart',
    descripcion: 'Retail gigante...',
    ubicacion: 'Av. Tlalpan...',
    rfc: 'WAL654EDRT',
    contacto: '+52 123 456 7890',
    correo: 'walmart@ejemplo.mx'
  },
  {
    nombre: 'OXXO',
    descripcion: 'Cadena de tiendas de conveniencia...',
    ubicacion: 'Calle 20, Ciudad Juárez...',
    rfc: 'OXX100GYT9',
    contacto: '+52 123 456 7890',
    correo: 'oxxo@ejemplo.mx'
  },
  {
    nombre: 'Soriana',
    descripcion: 'Supermercados y productos...',
    ubicacion: 'Av. de los Insurgentes...',
    rfc: 'SOR321GVZ8',
    contacto: '+52 123 456 7890',
    correo: 'soriana@ejemplo.mx'
  }
]

const CompaniesTable = () => {
  // Estados para paginación
  const [currentPage, setCurrentPage] = React.useState(1)
  const [itemsPerPage, setItemsPerPage] = React.useState(5)
  const totalPages = Math.ceil(empresas.length / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items)
    setCurrentPage(1) // Reiniciar a la primera página cuando cambia el número de elementos por página
  }

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return empresas.slice(startIndex, endIndex)
  }

  return (
    <div className='p-4'>
      <div className='bg-white shadow-md rounded-lg mb-8'>
        <div className='flex justify-between items-center px-4 py-2'>
          <h2 className='text-xl font-bold text-primary text-left'>
            Empresas registradas
          </h2>
          <Button
            variant='outline'
            className='flex items-center gap-2 text-white bg-primary hover:bg-red-800'
          >
            Filtrar <Filter size={16} />
          </Button>
        </div>
      </div>

      <div className='bg-white shadow-md rounded-lg mb-8 w-full'>
        <Table>
          <TableHeader>
            <TableRow className='text-sm'>
              <TableHead>Empresa</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead>Ubicación</TableHead>
              <TableHead>RFC</TableHead>
              <TableHead>Contacto</TableHead>
              <TableHead>Correo</TableHead>
              <TableHead>Ver</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getPaginatedData().map((empresa, index) => (
              <TableRow key={index} className='text-sm hover:bg-transparent'>
                <TableCell>{empresa.nombre}</TableCell>
                <TableCell>{empresa.descripcion}</TableCell>
                <TableCell className='text-blue-500 underline cursor-pointer'>
                  {empresa.ubicacion}
                </TableCell>
                <TableCell>{empresa.rfc}</TableCell>
                <TableCell>{empresa.contacto}</TableCell>
                <TableCell>{empresa.correo}</TableCell>
                <TableCell>
                  <Button variant='ghost'>
                    <Eye size={20} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Contenedor de paginación alineado correctamente */}
        <div className='mt-6 p-4 flex items-center justify-between'>
          {/* En pantallas pequeñas, solo mostrar el PaginationComponent */}
          <div className='flex items-center space-x-4 sm:hidden'>
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>

          {/* En pantallas grandes, mostrar PaginationComponent, PageSelector y PaginationControls */}
          <div className='hidden sm:flex items-center space-x-4'>
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
            <PageSelector
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              itemsPerPage={0}
            />
          </div>

          <div className='hidden sm:flex'>
            <PaginationControls
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompaniesTable
