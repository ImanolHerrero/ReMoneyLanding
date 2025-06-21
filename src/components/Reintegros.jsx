import Historial from "../assets/HistorialdeReintegros.png";

function Reintegros() {
  return (
    <section className="min-h-screen max-h-screen flex flex-col md:flex-row justify-center items-center p-6 md:p-8 text-[#951aff] gap-6 md:gap-12">
      <img
        src={Historial}
        alt="Remoney App"
        className="max-w-xs sm:max-w-sm md:max-w-80 w-full"
      />
      <div className="max-w-md flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          Visualizá
        </h1>
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl">
          Visualizá tu Plan de reintegros diarios y usalo cuando quieras.
        </p>
      </div>
    </section>
  );
}

export default Reintegros;
