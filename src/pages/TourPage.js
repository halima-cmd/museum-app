import { Header } from "../components/Header";

export function TourPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white">
      <Header title="Visite virtuelle" onMenuClick={() => onNavigate("home")} />
      <main className="pt-24 px-4">
        <iframe
          src="https://poly.cam/museum-tour"
          className="w-full h-[60vh] rounded-xl shadow-md"
          title="Visite virtuelle"
        ></iframe>
        <button
          onClick={() => onNavigate("home")}
          className="mt-6 bg-[#ff5800] text-white px-6 py-3 rounded-full font-semibold w-full sm:w-auto"
        >
          Retour à l’accueil
        </button>
      </main>
    </div>
  );
}
