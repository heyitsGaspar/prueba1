"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";

interface PageSelectorProps {
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PageSelector: React.FC<PageSelectorProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <Select value={String(currentPage)} onValueChange={(value) => onPageChange(Number(value))}>
        <SelectTrigger className="w-16 h-5">
          <SelectValue>{currentPage}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <SelectItem key={num} value={String(num)}>
              {num}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span className="text-sm">Página</span>
    </div>
  );
};

export default PageSelector;
