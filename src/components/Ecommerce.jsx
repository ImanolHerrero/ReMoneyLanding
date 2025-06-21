import Productos from "../assets/Productos.png";

function Ecommerce() {
  return (
    <section className="min-h-screen max-h-screen flex flex-col md:flex-row justify-center items-center p-6 md:p-8 text-[#951aff] gap-6 md:gap-12">
      <img
        src={Productos}
        alt="Productos ReMoney"
        className="max-w-xs sm:max-w-md md:max-w-96 w-full"
      />
      <div className="max-w-md flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          Comprá todo
        </h1>
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl">
          Nuestro sistema busca con IA todos los productos online.
        </p>
      </div>
    </section>
  );
}

export default Ecommerce;
