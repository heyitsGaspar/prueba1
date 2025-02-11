"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";

interface PaginationControlsProps {
  itemsPerPage: number;
  onItemsPerPageChange: (items: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  itemsPerPage,
  onItemsPerPageChange
}) => {
  const itemsPerPageOptions = [5, 10, 20, 30, 50];

  return (
    <div className="flex items-center space-x-2">
      <Select onValueChange={(value) => onItemsPerPageChange(Number(value))} defaultValue={String(itemsPerPage)}>
        <SelectTrigger className="w-16 h-5" >
          <SelectValue placeholder="Elementos" />
        </SelectTrigger>
        <SelectContent>
          {itemsPerPageOptions.map((num) => (
            <SelectItem key={num} value={String(num)}>
              {num}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span className="text-sm">Elementos por página</span>
    </div>
  );
};

export default PaginationControls;
