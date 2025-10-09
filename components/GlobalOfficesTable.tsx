type RegionColumn = {
  title: string;
  items: string[];
};

interface GlobalOfficesTableProps {
  columns: RegionColumn[];
  className?: string;
}

export default function GlobalOfficesTable({ columns, className }: GlobalOfficesTableProps) {
  const maxRows = columns.reduce((max, col) => Math.max(max, col.items.length), 0);

  return (
    <div className={`w-full overflow-x-auto rounded-2xl shadow-sm ${className ?? ""}`}>
      <table className="min-w-[800px] w-full border-separate border-spacing-0">
        <thead>
          <tr className="text-left">
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="bg-[#2F384F] text-white text-sm lg:text-base font-semibold px-6 py-4 first:rounded-tl-2xl last:rounded-tr-2xl"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxRows }).map((_, rowIdx) => (
            <tr key={rowIdx} className={rowIdx % 2 === 1 ? "bg-blue-50/70" : "bg-white"}>
              {columns.map((col, colIdx) => (
                <td key={colIdx} className="text-[13px] lg:text-sm text-black px-6 py-4">
                  {col.items[rowIdx] ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


