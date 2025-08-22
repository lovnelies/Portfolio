import Marquee from "react-fast-marquee";
import "devicon/devicon.min.css";

type TechItem = {
  name: string;
  icon: string;
};

const Stack: TechItem[] = [
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "NestJS", icon: "devicon-nestjs-plain" },
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
];

const Carousel = () => {
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-[#7e6651] text-3xl font-semibold mb-6">
          My Stack
        </h2>
        <Marquee speed={50} gradient={false}>
          {Stack.map((tech, index) => (
            <div
            key={index}
            className="mx-6 flex flex-col items-center justify-center bg-[#f6e2b3] rounded-lg p-4"
          >
            <i className={`${tech.icon} text-3xl`} />
            <p className="text-[#7e6651] mt-2">{tech.name}</p>
          </div>
          
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Carousel;
