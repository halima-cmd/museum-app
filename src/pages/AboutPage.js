import { Header } from "../components/Header";

export function AboutPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white">
      <Header title="À propos" onMenuClick={() => onNavigate("home")} />
      <main className="pt-24 px-4 pb-10 text-gray-700 text-sm sm:text-base leading-relaxed">
        <p className="mb-4">
          Le Musée du Patrimoine célèbre les civilisations africaines à travers une collection unique
          et variée.
        </p>
        <p className="mb-4">
          Notre mission : préserver, valoriser et transmettre les savoirs culturels africains aux
          générations futures.
        </p>
        <p>
          Situé au cœur de la ville, le musée offre une expérience immersive mêlant tradition et
          innovation.
        </p>
      </main>
    </div>
  );
}
