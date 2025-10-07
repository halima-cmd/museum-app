import { Header } from "../components/Header";
import { artworks } from "../data/artworks";
import { ArtworkCard } from "../components/ArtworkCard";

export function CollectionPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white">
      <Header title="Collections" onMenuClick={() => onNavigate("home")} />
      <main className="pt-24 px-4 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10">
        {artworks.map((art) => (
          <ArtworkCard key={art.id} artwork={art} />
        ))}
      </main>
    </div>
  );
}
