// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import {
  HomeOutlined,
  ScanOutlined,
  EyeOutlined,
  BookOutlined,
  UserOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  ZoomInOutlined,
  ShareAltOutlined,
  FilterOutlined,
  SearchOutlined,
  MenuOutlined,
  GlobalOutlined,
  SoundOutlined,
} from "@ant-design/icons";
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const languages = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "wo", name: "Wolof", flag: "🇸🇳" },
  ];
  const categories = [
    { id: "all", name: "Toutes" },
    { id: "painting", name: "Peintures" },
    { id: "sculpture", name: "Sculptures" },
    { id: "textile", name: "Textiles" },
    { id: "ceramic", name: "Céramiques" },
  ];
  const artworks = [
    {
      id: 1,
      title: "Masque Gelede",
      artist: "Artisan Yoruba",
      period: "XIXe siècle",
      category: "sculpture",
      image:
        "https://readdy.ai/api/search-image?query=Traditional%20African%20Gelede%20mask%2C%20wooden%20carved%20ceremonial%20mask%20with%20intricate%20geometric%20patterns%2C%20vibrant%20colors%2C%20museum%20quality%20artifact%2C%20professional%20photography%20lighting%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20cultural%20heritage%20piece%2C%20detailed%20craftsmanship&width=300&height=400&seq=mask001&orientation=portrait",
      hasAudio: true,
      hasVideo: false,
    },
    {
      id: 2,
      title: "Textile Kente Royal",
      artist: "Tisserand Ashanti",
      period: "XXe siècle",
      category: "textile",
      image:
        "https://readdy.ai/api/search-image?query=Traditional%20Kente%20cloth%20with%20golden%20threads%2C%20royal%20African%20textile%20with%20geometric%20patterns%2C%20vibrant%20colors%20including%20gold%20yellow%20red%20and%20green%2C%20museum%20display%20quality%2C%20professional%20photography%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20cultural%20heritage%20textile%20art&width=300&height=400&seq=kente001&orientation=portrait",
      hasAudio: true,
      hasVideo: true,
    },
    {
      id: 3,
      title: "Statuette Dogon",
      artist: "Sculpteur Dogon",
      period: "XVIIIe siècle",
      category: "sculpture",
      image:
        "https://readdy.ai/api/search-image?query=Ancient%20Dogon%20wooden%20sculpture%20figure%2C%20traditional%20African%20art%20piece%2C%20carved%20wooden%20statue%20with%20ceremonial%20significance%2C%20museum%20quality%20artifact%2C%20professional%20photography%20lighting%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20cultural%20heritage%20sculpture&width=300&height=400&seq=dogon001&orientation=portrait",
      hasAudio: true,
      hasVideo: false,
    },
    {
      id: 4,
      title: "Poterie Bamana",
      artist: "Céramiste Bamana",
      period: "XIXe siècle",
      category: "ceramic",
      image:
        "https://readdy.ai/api/search-image?query=Traditional%20Bamana%20pottery%20vessel%2C%20earthenware%20ceramic%20with%20geometric%20decorations%2C%20African%20cultural%20artifact%2C%20museum%20quality%20piece%2C%20professional%20photography%20lighting%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20ancient%20ceramic%20art%20heritage&width=300&height=400&seq=pottery001&orientation=portrait",
      hasAudio: true,
      hasVideo: false,
    },
  ];
  const filteredArtworks =
    selectedCategory === "all"
      ? artworks
      : artworks.filter((artwork) => artwork.category === selectedCategory);
  const renderHomePage = () => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900">
          Musée du Patrimoine
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowLanguageMenu(true)}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <GlobalOutlined className="text-lg" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MenuOutlined className="text-lg" />
          </button>
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden mt-16">
        <img
          src="https://readdy.ai/api/search-image?query=Modern%20African%20museum%20exterior%20architecture%2C%20contemporary%20cultural%20building%20with%20traditional%20elements%2C%20beautiful%20facade%20with%20warm%20lighting%2C%20professional%20architectural%20photography%2C%20clear%20blue%20sky%20background%2C%20centered%20composition%2C%20cultural%20heritage%20institution&width=375&height=384&seq=museum001&orientation=landscape"
          alt="Musée du Patrimoine"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-8 left-4 right-4 text-white">
          <h1 className="text-3xl font-bold mb-2">
            Découvrez Notre Patrimoine
          </h1>
          <p className="text-lg opacity-90 mb-4">
            Une collection exceptionnelle d'art et de culture africaine
          </p>
          <button className="bg-[#ff5800] text-white px-6 py-3 !rounded-button font-semibold cursor-pointer">
            Explorer les Œuvres
          </button>
        </div>
      </div>
      {/* Features Grid */}
      <div className="px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Fonctionnalités
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div
            onClick={() => setActiveTab("scan")}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#ffbe99] rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20QR%20code%20scanner%20symbol%2C%20modern%20digital%20scanning%20icon%2C%20vibrant%20orange%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=64&height=64&seq=qr001&orientation=squarish"
                  alt="Scanner QR"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Scanner une Œuvre
                </h3>
                <p className="text-gray-600">
                  Découvrez les détails avec votre smartphone
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setActiveTab("tour")}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#ffbe99] rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20virtual%20reality%20headset%2C%20modern%20VR%20technology%20symbol%2C%20vibrant%20orange%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=64&height=64&seq=vr001&orientation=squarish"
                  alt="Visite Virtuelle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Visite Virtuelle
                </h3>
                <p className="text-gray-600">Explorez le musée en 360°</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setActiveTab("collection")}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#ffbe99] rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20art%20gallery%20collection%20symbol%2C%20modern%20museum%20exhibition%20icon%2C%20vibrant%20orange%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=64&height=64&seq=gallery001&orientation=squarish"
                  alt="Collections"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Découvrir les Collections
                </h3>
                <p className="text-gray-600">
                  Parcourez notre patrimoine culturel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
  const renderScanPage = () => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-4 py-3 flex justify-between items-center">
        <button
          onClick={() => setActiveTab("home")}
          className="text-[#ff5800] cursor-pointer"
        >
          ← Retour
        </button>
        <div className="text-lg font-semibold">Œuvre Scannée</div>
        <div className="flex gap-2">
          <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <ZoomInOutlined />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <ShareAltOutlined />
          </button>
        </div>
      </div>
      <div className="pt-16 pb-20">
        {/* Artwork Image */}
        <div className="relative h-80 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=Traditional%20African%20Gelede%20mask%2C%20wooden%20carved%20ceremonial%20mask%20with%20intricate%20geometric%20patterns%2C%20vibrant%20colors%2C%20museum%20quality%20artifact%2C%20professional%20photography%20lighting%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20cultural%20heritage%20piece%2C%20detailed%20craftsmanship&width=375&height=320&seq=maskdetail001&orientation=landscape"
            alt="Masque Gelede"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="px-4 py-6">
          {/* Title and Info */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Masque Gelede
          </h1>
          <p className="text-gray-600 mb-1">Artisan Yoruba</p>
          <p className="text-gray-600 mb-6">XIXe siècle • Bois sculpté</p>
          {/* Language Tabs */}
          <div className="flex gap-2 mb-6">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`px-4 py-2 !rounded-button flex items-center gap-2 cursor-pointer ${
                  selectedLanguage === lang.code
                    ? "bg-[#ff5800] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <span>{lang.flag}</span>
                <span className="text-sm">{lang.name}</span>
              </button>
            ))}
          </div>
          {/* Audio Player */}
          <div className="bg-[#ffbe99]/20 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 bg-[#ff5800] rounded-full flex items-center justify-center text-white cursor-pointer"
              >
                {isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
              </button>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Description Audio
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#ff5800] h-2 rounded-full w-1/3"></div>
                </div>
              </div>
              <div className="text-sm text-gray-600">2:45</div>
            </div>
          </div>
          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Ce masque Gelede représente l'art traditionnel yoruba du Bénin et
              du Nigeria. Utilisé lors de cérémonies rituelles, il symbolise la
              fertilité et la protection spirituelle. Les motifs géométriques
              sculptés racontent des histoires ancestrales transmises de
              génération en génération.
            </p>
          </div>
          {/* Video Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Vidéo Documentaire
            </h3>
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 h-48">
              <img
                src="https://readdy.ai/api/search-image?query=African%20artisan%20craftsman%20carving%20traditional%20wooden%20mask%2C%20workshop%20scene%20with%20tools%2C%20cultural%20heritage%20documentation%2C%20professional%20documentary%20photography%2C%20warm%20lighting%2C%20centered%20composition%2C%20authentic%20cultural%20preservation&width=375&height=192&seq=video001&orientation=landscape"
                alt="Vidéo documentaire"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer">
                  <PlayCircleOutlined className="text-2xl text-[#ff5800]" />
                </button>
              </div>
            </div>
          </div>
          {/* Accessibility */}
          <div className="bg-blue-50 rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <SoundOutlined className="text-blue-600" />
              <div>
                <div className="font-semibold text-blue-900">Mode Inclusif</div>
                <div className="text-sm text-blue-700">
                  Audio-description disponible
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const museumRooms = [
    {
      id: 0,
      name: "Salle des Masques Traditionnels",
      description: "Collection de masques cérémoniels d'Afrique de l'Ouest",
      image:
        "https://readdy.ai/api/search-image?query=Museum%20interior%20panoramic%20view%2C%20African%20art%20gallery%20with%20sculptures%20and%20paintings%2C%20professional%20museum%20lighting%2C%20wide%20angle%20perspective%2C%20cultural%20artifacts%20display%2C%20modern%20exhibition%20space%20with%20traditional%20artworks%2C%20immersive%20gallery%20experience&width=375&height=762&seq=museum360&orientation=portrait",
    },
    {
      id: 1,
      name: "Galerie des Textiles Royaux",
      description: "Tissus traditionnels et costumes cérémoniels",
      image:
        "https://readdy.ai/api/search-image?query=Museum%20textile%20gallery%20interior%20panoramic%20view%2C%20traditional%20African%20fabrics%20and%20royal%20costumes%20display%2C%20professional%20museum%20lighting%2C%20wide%20angle%20perspective%2C%20colorful%20textiles%20exhibition%2C%20modern%20gallery%20space%20with%20cultural%20heritage%2C%20immersive%20textile%20collection%20experience&width=375&height=762&seq=textile360&orientation=portrait",
    },
    {
      id: 2,
      name: "Atelier de Sculptures",
      description: "Statues et objets rituels en bois et bronze",
      image:
        "https://readdy.ai/api/search-image?query=Museum%20sculpture%20workshop%20interior%20panoramic%20view%2C%20African%20wooden%20and%20bronze%20sculptures%20display%2C%20professional%20museum%20lighting%2C%20wide%20angle%20perspective%2C%20traditional%20carved%20artifacts%20exhibition%2C%20modern%20gallery%20space%20with%20ritual%20objects%2C%20immersive%20sculpture%20collection%20experience&width=375&height=762&seq=sculpture360&orientation=portrait",
    },
    {
      id: 3,
      name: "Salle des Céramiques Anciennes",
      description: "Poteries et objets en terre cuite traditionnels",
      image:
        "https://readdy.ai/api/search-image?query=Museum%20ceramics%20gallery%20interior%20panoramic%20view%2C%20traditional%20African%20pottery%20and%20earthenware%20display%2C%20professional%20museum%20lighting%2C%20wide%20angle%20perspective%2C%20ancient%20ceramic%20artifacts%20exhibition%2C%20modern%20gallery%20space%20with%20cultural%20pottery%2C%20immersive%20ceramics%20collection%20experience&width=375&height=762&seq=ceramic360&orientation=portrait",
    },
  ];
  const navigateToNextRoom = () => {
    setCurrentRoomIndex((prevIndex) => (prevIndex + 1) % museumRooms.length);
  };
  const navigateToPrevRoom = () => {
    setCurrentRoomIndex(
      (prevIndex) => (prevIndex - 1 + museumRooms.length) % museumRooms.length,
    );
  };
  const renderTourPage = () => (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 px-4 py-3 flex justify-between items-center">
        <button
          onClick={() => setActiveTab("home")}
          className="text-white cursor-pointer"
        >
          ← Retour
        </button>
        <div className="text-lg font-semibold text-white">Visite Virtuelle</div>
        <button className="text-white cursor-pointer">
          <i className="fas fa-expand"></i>
        </button>
      </div>
      {/* 360 Viewer */}
      <div className="relative h-screen overflow-hidden">
        <img
          src={museumRooms[currentRoomIndex].image}
          alt={`Vue 360° - ${museumRooms[currentRoomIndex].name}`}
          className="w-full h-full object-cover object-center"
        />
        {/* Hotspots */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-[#ff5800] rounded-full animate-pulse cursor-pointer"></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-[#ff5800] rounded-full animate-pulse cursor-pointer"></div>
        <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-[#ff5800] rounded-full animate-pulse cursor-pointer"></div>
        {/* Navigation Controls */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={navigateToPrevRoom}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-all"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <button
            onClick={navigateToNextRoom}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-all"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-all">
            <i className="fas fa-search-plus"></i>
          </button>
        </div>
        {/* Mini Map */}
        <div className="absolute bottom-24 right-4 w-20 h-20 bg-white/90 rounded-2xl p-2">
          <div className="w-full h-full bg-gray-200 rounded-lg relative">
            {museumRooms.map((room, index) => (
              <div
                key={room.id}
                className={`absolute w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
                  index === currentRoomIndex ? "bg-[#ff5800]" : "bg-gray-400"
                }`}
                style={{
                  top: `${25 + (index % 2) * 50}%`,
                  left: `${25 + Math.floor(index / 2) * 50}%`,
                }}
              ></div>
            ))}
          </div>
        </div>
        {/* Room Info Panel */}
        <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 transition-all duration-300">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-900">
              {museumRooms[currentRoomIndex].name}
            </h3>
            <div className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
              {currentRoomIndex + 1}/{museumRooms.length}
            </div>
          </div>
          <p className="text-sm text-gray-600">
            {museumRooms[currentRoomIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
  const renderCollectionPage = () => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-4 py-3">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setActiveTab("home")}
            className="text-[#ff5800] cursor-pointer"
          >
            ← Retour
          </button>
          <div className="text-lg font-semibold">Collections</div>
          <button className="cursor-pointer">
            <FilterOutlined />
          </button>
        </div>
        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Rechercher une œuvre..."
            className="w-full bg-gray-100 rounded-2xl px-4 py-3 pr-12 text-sm border-none outline-none"
          />
          <SearchOutlined className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        {/* Category Tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex-1 py-2 px-3 !rounded-button text-sm font-medium cursor-pointer transition-all ${
                selectedCategory === category.id
                  ? "bg-[#ff5800] text-white"
                  : "text-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="pt-36 pb-20">
        {/* Section Title */}
        <div className="px-4 mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Collections Populaires
          </h2>
        </div>
        {/* Artworks Grid */}
        <div className="px-4 grid grid-cols-2 gap-4">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-56">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-bold text-white text-sm mb-1">
                    {artwork.title}
                  </h3>
                  <p className="text-xs text-white/80 mb-2">
                    {artwork.period} • {artwork.artist.split(" ")[2] || "Mali"}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {artwork.hasAudio && (
                        <button className="w-6 h-6 bg-[#ff5800] rounded-full flex items-center justify-center cursor-pointer">
                          <SoundOutlined className="text-white text-xs" />
                        </button>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button className="cursor-pointer text-white/60 hover:text-white">
                        <i className="far fa-heart text-sm"></i>
                      </button>
                      <button className="cursor-pointer text-white/60 hover:text-white">
                        <i className="fas fa-share text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  const renderAboutPage = () => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-4 py-3 flex justify-between items-center">
        <button
          onClick={() => setActiveTab("home")}
          className="text-[#ff5800] cursor-pointer"
        >
          ← Retour
        </button>
        <div className="text-lg font-semibold">À Propos</div>
        <div></div>
      </div>
      <div className="pt-16 pb-20">
        {/* Hero Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20African%20museum%20exterior%20architecture%20at%20sunset%2C%20contemporary%20cultural%20building%20with%20traditional%20elements%2C%20beautiful%20facade%20with%20warm%20golden%20lighting%2C%20professional%20architectural%20photography%2C%20clear%20sky%20background%2C%20centered%20composition%2C%20cultural%20heritage%20institution%2C%20inspiring%20and%20majestic&width=375&height=256&seq=museumabout001&orientation=landscape"
            alt="Musée du Patrimoine"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        <div className="px-4 py-6">
          {/* Introduction */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Notre Mission
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            Depuis 1985, le Musée du Patrimoine s'engage à préserver, étudier et
            valoriser la richesse culturelle africaine. Notre collection de plus
            de 2000 œuvres témoigne de la diversité et de la beauté des arts
            traditionnels du continent.
          </p>
          {/* Timeline */}
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Notre Histoire
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#ff5800] rounded-full flex items-center justify-center text-white font-bold text-sm">
                1985
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  Fondation du Musée
                </h3>
                <p className="text-sm text-gray-600">
                  Création par un collectif d'historiens et d'artistes
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#ffbe99] rounded-full flex items-center justify-center text-gray-700 font-bold text-sm">
                1995
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  Première Extension
                </h3>
                <p className="text-sm text-gray-600">
                  Agrandissement pour accueillir plus d'œuvres
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#ffbe99] rounded-full flex items-center justify-center text-gray-700 font-bold text-sm">
                2010
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Modernisation</h3>
                <p className="text-sm text-gray-600">
                  Intégration des technologies numériques
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#ff5800] rounded-full flex items-center justify-center text-white font-bold text-sm">
                2024
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  Application Mobile
                </h3>
                <p className="text-sm text-gray-600">
                  Lancement de l'expérience digitale immersive
                </p>
              </div>
            </div>
          </div>
          {/* Collections Highlights */}
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Collections Phares
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-[#ff5800] mb-1">500+</div>
              <div className="text-sm text-gray-600">Masques Traditionnels</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-[#ff5800] mb-1">300+</div>
              <div className="text-sm text-gray-600">Textiles Anciens</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-[#ff5800] mb-1">400+</div>
              <div className="text-sm text-gray-600">Sculptures</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-[#ff5800] mb-1">800+</div>
              <div className="text-sm text-gray-600">Objets Rituels</div>
            </div>
          </div>
          {/* Testimonials */}
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Témoignages
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-[#ffbe99]/20 rounded-2xl p-4">
              <p className="text-gray-700 italic mb-2">
                "Une expérience culturelle exceptionnelle qui nous reconnecte à
                nos racines."
              </p>
              <div className="text-sm font-semibold text-gray-900">
                — Aminata Diallo, Professeure d'Histoire
              </div>
            </div>
            <div className="bg-[#ffbe99]/20 rounded-2xl p-4">
              <p className="text-gray-700 italic mb-2">
                "La visite virtuelle permet de découvrir le patrimoine depuis
                n'importe où."
              </p>
              <div className="text-sm font-semibold text-gray-900">
                — Dr. Jean-Baptiste Kone, Anthropologue
              </div>
            </div>
          </div>
          {/* Practical Info */}
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Informations Pratiques
          </h2>
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Horaires</span>
                <span className="font-semibold">9h - 18h (Mar-Dim)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tarif Adulte</span>
                <span className="font-semibold">2000 FCFA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tarif Étudiant</span>
                <span className="font-semibold">1000 FCFA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Gratuit</span>
                <span className="font-semibold">-12 ans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const renderLanguageMenu = () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Choisir la Langue</h3>
          <button
            onClick={() => setShowLanguageMenu(false)}
            className="text-gray-500 cursor-pointer"
          >
            ✕
          </button>
        </div>
        <div className="space-y-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelectedLanguage(lang.code);
                setShowLanguageMenu(false);
              }}
              className={`w-full flex items-center gap-3 p-3 rounded-xl cursor-pointer ${
                selectedLanguage === lang.code
                  ? "bg-[#ff5800] text-white"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-3 text-gray-600">
            <SoundOutlined />
            <span className="text-sm">Audio-description disponible</span>
          </div>
        </div>
      </div>
    </div>
  );
  const renderCurrentPage = () => {
    switch (activeTab) {
      case "scan":
        return renderScanPage();
      case "tour":
        return renderTourPage();
      case "collection":
        return renderCollectionPage();
      case "about":
        return renderAboutPage();
      default:
        return renderHomePage();
    }
  };
  return (
    <div className="relative">
      <style>{`
.!rounded-button {
border-radius: 1rem !important;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}
input[type="number"] {
-moz-appearance: textfield;
}
`}</style>
      {renderCurrentPage()}
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 z-40">
        <div className="grid grid-cols-5 h-16">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center justify-center cursor-pointer ${
              activeTab === "home" ? "text-[#ff5800]" : "text-gray-500"
            }`}
          >
            <HomeOutlined className="text-xl mb-1" />
            <span className="text-xs">Accueil</span>
          </button>
          <button
            onClick={() => setActiveTab("scan")}
            className={`flex flex-col items-center justify-center cursor-pointer ${
              activeTab === "scan" ? "text-[#ff5800]" : "text-gray-500"
            }`}
          >
            <ScanOutlined className="text-xl mb-1" />
            <span className="text-xs">Scanner</span>
          </button>
          <button
            onClick={() => setActiveTab("tour")}
            className={`flex flex-col items-center justify-center cursor-pointer ${
              activeTab === "tour" ? "text-[#ff5800]" : "text-gray-500"
            }`}
          >
            <EyeOutlined className="text-xl mb-1" />
            <span className="text-xs">Visite</span>
          </button>
          <button
            onClick={() => setActiveTab("collection")}
            className={`flex flex-col items-center justify-center cursor-pointer ${
              activeTab === "collection" ? "text-[#ff5800]" : "text-gray-500"
            }`}
          >
            <BookOutlined className="text-xl mb-1" />
            <span className="text-xs">Collections</span>
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`flex flex-col items-center justify-center cursor-pointer ${
              activeTab === "about" ? "text-[#ff5800]" : "text-gray-500"
            }`}
          >
            <UserOutlined className="text-xl mb-1" />
            <span className="text-xs">À Propos</span>
          </button>
        </div>
      </div>
      {/* Language Menu Modal */}
      {showLanguageMenu && renderLanguageMenu()}
    </div>
  );
};
export default App;
