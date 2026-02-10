import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type AdminTableProps<T> = {
  caption?: string;
  columns: { key: string; label: string }[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

export function AdminTable<T>({
  caption,
  columns,
  data,
  renderRow,
}: AdminTableProps<T>) {
  return (
    <Table>
      {caption && <TableCaption>{caption}</TableCaption>}

      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col.key}>{col.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.length ? (
          data.map(renderRow)
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="text-center py-6">
              No data found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
