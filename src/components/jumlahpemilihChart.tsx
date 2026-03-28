import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// TYPE DATA
type DataType = {
  year: string;
  value: number;
};

const data: DataType[] = [
  { year: "2004", value: 148000369 },
  { year: "2009", value: 171265442 },
  { year: "2014", value: 187852992 },
  { year: "2019", value: 192770611 },
  { year: "2024", value: 204422181 },
];

// FIX 1: kasih tipe number
const formatNumber = (num: number): string =>
  new Intl.NumberFormat("id-ID").format(num);

// FIX 2: kasih tipe number
const formatJT = (num: number): string =>
  `${Math.round(num / 1000000)} JT`;

// TYPE LABEL
type CustomLabelProps = {
  x?: number;
  y?: number;
  value?: number;
  index?: number;
};

// FIX 3: kasih typing
const CustomLabel = ({ x = 0, y = 0, value = 0, index = 0 }: CustomLabelProps) => {
  const offsetY = index === 0 ? 20 : -15;

  return (
    <text
      x={x}
      y={y + offsetY}
      textAnchor="middle"
      fontSize={12}
      fill="#111"
    >
      {formatNumber(value)}
    </text>
  );
};

export default function JumlahPemilihChart() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">

      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#c02f31]">
          Jumlah Pemilih
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Jumlah Pemilih dari Masa ke Masa
        </p>
      </div>

      <div className="w-full h-75">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <CartesianGrid stroke="#e5e7eb" vertical={false} />

            <XAxis
              dataKey="year"
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tickFormatter={formatJT}
              axisLine={false}
              tickLine={false}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#c02f31"
              strokeWidth={3}
              dot={{ r: 5 }}
              label={<CustomLabel />}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}