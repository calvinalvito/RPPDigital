type TableProps = {
  headers?: React.ReactNode[];
  data: React.ReactNode[][];
  showHeader?: boolean; // 🔥 kontrol header
  className?: string;
};

export default function Table({
  headers,
  data,
  showHeader = true,
  className,
}: TableProps) {
  const colCount = headers?.length || data[0]?.length || 1;

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <div
        className="min-w-full border border-gray-300 overflow-hidden"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
        }}
      >
        {/* HEADER */}
        {showHeader && headers && (
          <>
            {headers.map((header, i) => (
              <div
                key={`header-${i}`}
                className="p-3 bg-[#c02f31] font-bold text-center border-b border-gray-300 text-white border-r"
              >
                {header}
              </div>
            ))}
          </>
        )}

        {/* BODY */}
        {data.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`p-3 border-b border-gray-200 ${
                colIndex !== colCount - 1 ? "border-r border-gray-200" : ""
              } ${
                colIndex === 0 ? "text-left" : "text-center"
              }`}
            >
              {cell}
            </div>
          ))
        )}
      </div>
    </div>
  );
}