import { Header } from "../components/Header";
import { FeatureCard } from "../components/FeatureCard";
import museImg from "../assets/muse.png";
import scanImg from "../assets/scan.png";
import virtuelImg from "../assets/virtuel.png";
import collectionImg from "../assets/collection.png";


export function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white">
      <Header title="Musée du Patrimoine" />

      {/* Hero Section */}
      <section className="relative h-80 sm:h-96 mt-16">
        <img src={museImg} alt="Musée" className="w-full h-full object-cover" />
        <div className="absolute bottom-6 left-4 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 drop-shadow-lg">
            Découvrez notre patrimoine
          </h1>
          <button
            onClick={() => onNavigate("collection")}
            className="bg-[#ff5800] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base"
          >
            Explorer les œuvres
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-8 sm:py-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Fonctionnalités</h2>
        <div className="flex flex-col gap-4">
          <FeatureCard
            title="Scanner une Œuvre"
            description="Scannez un QR code pour en savoir plus"
            image={scanImg} 
            onClick={() => onNavigate("scan")}
          />
          <FeatureCard
            title="Visite Virtuelle"
            description="Explorez le musée en 360°"
            image={virtuelImg} 
            onClick={() => onNavigate("tour")}
          />
          <FeatureCard
            title="Collections"
            description="Parcourez nos œuvres"
            image={collectionImg} 
            onClick={() => onNavigate("collection")}
          />
          <FeatureCard
            title="À propos"
            description="Découvrez notre mission"
               image={virtuelImg} 
            onClick={() => onNavigate("about")}
          />
        </div>
      </section>
    </div>
  );
}
