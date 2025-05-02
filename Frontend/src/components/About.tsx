
import image from '../assets/avatar.png'; // puedes cambiar por la que necesites

function About() {
  return (
    <section id="About" className="py-20 px-4 sm:px-6 lg:px-12">
      <div className="relative bg-[#f6e2b3] rounded-2xl shadow-lg p-8 pt-20 max-w-4xl mx-auto">
        
        {/* Imagen circular que sobresale */}
        <div className="absolute -top-10 -left-10 z-10">
          <img
            src={image}
            alt="Luffy"
            className="w-56 h-56 rounded-full object-cover "
          />
        </div>

        {/* Contenido */}
        <div className="pl-36"> {/* Deja espacio para la imagen */}
          <h1 className="text-4xl font-poet mb-2 text-[#7e6651] relative top-[-27px]">Yulissa Rivas
            <br />┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈୨୧
          </h1>
          <p className="text-base sm:text-lg text-[#7e6651] font-outfit leading-relaxed text-justify">
            Hey ! I'm Yulissa and I'm 25 years old.
           <br />( ദ്ദി ˙ᗜ˙ )
            <br />I love programming and developing solutions to everyday problems.
            <br />I started this journey on 2022 with game developing and now I'm in the web developing area.
            <br /> Don't have much to say
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
