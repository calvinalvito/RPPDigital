type SectionHeaderProps = {
  title: string;
  image: string;
};

export default function SectionHeader({ title, image }: SectionHeaderProps) {
  return (
    <div className="relative w-full h-30 md:h-40">

      {/* BACKGROUND IMAGE */}
      <img
        src={image}
        alt="header"
        className="w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#501213]" />

      {/* TEXT */}
      <div className="absolute inset-0 flex items-center px-6 md:px-20">
        <h1 className="text-xl md:text-4xl font-bold text-white">
          {title}
        </h1>
      </div>

    </div>
  );
}