import { Header } from "../components/Header";

export function ScanPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white">
      <Header title="Scanner une œuvre" onMenuClick={() => onNavigate("home")} />
      <main className="pt-24 px-4 flex flex-col items-center">
        <p className="text-gray-700 mb-4 text-center text-sm sm:text-base">
          Scannez le QR code à proximité d’une œuvre pour découvrir sa description.
        </p>
        <div className="w-60 h-60 sm:w-72 sm:h-72 border-4 border-dashed border-gray-300 rounded-2xl flex items-center justify-center text-gray-400">
          📷 Caméra
        </div>
        <button
          onClick={() => onNavigate("home")}
          className="mt-8 bg-[#ff5800] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold"
        >
          Retour
        </button>
      </main>
    </div>
  );
}
