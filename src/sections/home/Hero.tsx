import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/mishel.webp')" }}
    >
      <div
        className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center p-8 md:pl-20 md:pt-32"
        style={{ transform: "translateX(-500px)" }}
      >
        <h1 className="text-black text-5xl font-bold mb-6">
          <span className="block">Часы Michael</span>
          <span className="block ml-1">Kors</span>
        </h1>

        <div className="flex space-x-4 mt-4 ml-[-80px]">
          <Link
            to="header"
            smooth={true}
            duration={10}
            className="border border-black text-black py-3 px-6 hover:bg-black hover:text-white transition-colors text-lg font-medium"
          >
            Для неї
          </Link>
          <Link
            to="header"
            smooth={true}
            duration={10}
            className="border border-black text-black py-3 px-3 hover:bg-black hover:text-white transition-colors text-lg font-medium"
          >
            Для нього
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
