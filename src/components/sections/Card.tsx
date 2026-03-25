type CardProps = {
  title: string;
  items: string[];
  gradient: string;
};

export default function Card({ title, items, gradient }: CardProps) {
  return (
    <div className={`bg-linear-to-r ${gradient} p-6 rounded-xl text-white`}>
      <div className="grid md:grid-cols-2 gap-6">
        <h3 className="text-xl md:text-3xl font-bold">{title}</h3>

        <ul className="list-disc pl-5 space-y-2">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}