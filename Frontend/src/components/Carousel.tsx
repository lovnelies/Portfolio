import Marquee from "react-fast-marquee";

type TechItem = {
  name: string;
  img: string;
};

const Stack: TechItem[] = [
  { name: "XD", img: "/logos/XD.png" },
  { name: "xd", img: "/logos/XD.png" },
  { name: "Xd", img: "/logos/XD.png" },
  { name: "xD", img: "/logos/XD.png" },
  { name: "XD", img: "/logos/XD.png" },
];

const Carousel = () => {
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-[#7e6651] text-3xl font-semibold mb-6">
          Tecnologías
        </h2>
        <Marquee speed={50} gradient={false}>
          {Stack.map((tech, index) => (
            <div
              key={index}
              className="mx-6 flex flex-col items-center justify-center bg-[#f6e2b3]  rounded-lg p-4"
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="h-16 grayscale hover:grayscale-0 transition duration-300"
              />
              <p className="text-[#7e6651] mt-2">{tech.name}</p> {/* Nombre technologies abajo png*/}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Carousel;
