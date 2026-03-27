type Cell = {
  content: React.ReactNode;
  colSpan?: number;
  className?: string;
};

type Row = Cell[];

type TableProps = {
  headers: Row[];
  data: Row[];
};

export default function TableAdvanced({ headers, data }: TableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border border-gray-400 text-sm">
        
        {/* HEADER */}
        <thead>
          {headers.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <th
                  key={j}
                  colSpan={cell.colSpan || 1}
                  className={`border border-gray-400 p-3 text-center font-bold ${cell.className || ""}`}
                >
                  {cell.content}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  colSpan={cell.colSpan || 1}
                  className={`border border-gray-300 p-3 text-center ${cell.className || ""}`}
                >
                  {cell.content}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}