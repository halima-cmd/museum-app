export function ArtworkCard({ artwork }) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <img src={artwork.image} alt={artwork.title} className="w-full h-48 object-cover sm:h-64" />
        <div className="p-4">
          <h3 className="text-base sm:text-lg font-semibold">{artwork.title}</h3>
          <p className="text-gray-500 text-sm">{artwork.artist}</p>
          <p className="text-gray-400 text-xs">{artwork.period}</p>
        </div>
      </div>
    );
  }
  