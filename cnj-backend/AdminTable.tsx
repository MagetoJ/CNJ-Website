import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Button } from "../components/ui/button";
import { Edit, Trash2 } from "lucide-react";

interface AdminTableProps {
  columns: string[];
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (id: number | string) => void;
}

export function AdminTable({ columns, data, onEdit, onDelete }: AdminTableProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            {columns.map((col) => <TableHead key={col} className="font-bold text-jungle-dark uppercase text-xs tracking-wider">{col}</TableHead>)}
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, idx) => (
            <TableRow key={item.id || idx} className="hover:bg-gray-50/50">
              {columns.map((col) => (
                <TableCell key={col} className="text-sm text-gray-600">
                  {item[col.toLowerCase()]?.toString() || '-'}
                </TableCell>
              ))}
              <TableCell className="flex justify-end gap-2">
                <Button size="icon" variant="ghost" className="hover:text-leaf-green transition-colors" onClick={() => onEdit(item)}><Edit className="h-4 w-4" /></Button>
                <Button size="icon" variant="ghost" className="text-red-500 hover:bg-red-50 transition-colors" onClick={() => onDelete(item.id)}><Trash2 className="h-4 w-4" /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}