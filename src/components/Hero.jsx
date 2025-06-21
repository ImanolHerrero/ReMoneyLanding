import remoneyApp from "../assets/App ReMoney.png";

function Hero() {
  return (
    <section className="min-h-screen max-h-screen bg-[#951aff] flex flex-col md:flex-row justify-center items-center p-6 md:p-8 text-white gap-8">
      <img
        src={remoneyApp}
        alt="Remoney App"
        className="max-w-60 sm:max-w-sm md:max-w-80 w-full"
      />
      <div className="max-w-md flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          ReMoney
        </h1>
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl">
          La 1º tienda que te devuelve 100% el dinero
        </p>
        <p className="text-lg sm:text-xl md:text-xl">
          La revolución de las compras!
        </p>
      </div>
    </section>
  );
}

export default Hero;
