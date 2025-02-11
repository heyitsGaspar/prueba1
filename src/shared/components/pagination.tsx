import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/shared/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Usamos los iconos para la navegación

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = 5;
  const pageNumbers = [];
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent className="flex items-center gap-0">
        {/* Botón "Anterior" */}
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            className={`w-8 h-5 flex items-center justify-center border border-primary text-primary rounded-none transition 
            ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-primary hover:text-white"}`} size={undefined}          >
            <ChevronLeft size={16} />
          </PaginationLink>
        </PaginationItem>

        {/* Números de página */}
        {pageNumbers.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              onClick={() => onPageChange(page)}
              className={`w-8 h-5 flex items-center justify-center border border-primary text-primary rounded-none -ml-px transition
              ${currentPage === page ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Botón "Siguiente" */}
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            className={`w-8 h-5 flex items-center justify-center border border-primary text-primary rounded-none -ml-px transition 
            ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-primary hover:text-white"}`} size={undefined}          >
            <ChevronRight size={16} />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
