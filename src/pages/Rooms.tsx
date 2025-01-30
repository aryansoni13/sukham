import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const rooms = [
  {
    id: 1,
    name: "Room 1 - Dormitory Room",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    description:
      "Dormitory where 10 people can stay comfortably. Same like room queen double bedded with blankets will be provided. Dormitory with separate attached bathroom.",
    price: "₹",
  },
  {
    id: 2,
    name: "Junior room 2",
    image:
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
    description:
      "Only two adults can stay in junior room with attached bathroom.",
    price: "₹",
  },
  {
    id: 3,
    name: "Family room no 3",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
    description:
      "Family room where 4 people can stay one queen double bedded with extra bed will be given",
    price: "₹",
  },
  {
    id: 4,
    name: "Family room no 4",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
    description: "Family room where 4 people can stay one queen double bedded with extra bed will be given",
    price: "₹",
  },
  {
    id: 5,
    name: "Family room no 5",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    description: "Family room where 4 people can stay one queen double bedded with extra bed will be given",
    price: "₹",
  },
  {
    id: 6,
    name: "Junior room 6",
    image:
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
    description: "Only two adults can stay in junior room with attached bathroom.",
    price: "₹",
  },
];

const RoomsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-20">
        {/* Header */}
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <Link
              to="/"
              className="inline-flex items-center text-white/80 hover:text-white mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Rooms</h1>
            <p className="text-xl text-white/80">
              Discover comfort and luxury in every detail
            </p>
          </div>
        </div>

        {/* Booking Buttons */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://www.airbnb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#FF5A5F] text-white rounded-lg hover:bg-[#FF5A5F]/90 transition-colors font-medium"
            >
              Book on Airbnb
            </a>
            <a
              href="https://www.booking.com/hotel/in/sukham-resort-kotagiri.html?label=gen173rf-1FCAsobEINc3VraGFtLXJlc29ydEgzWANobIgBAZgBMbgBF8gBFdgBAegBAfgBAogCAaICD3N1a2hhbXJlc29ydC5pbqgCA7gCiqrsvAbAAgHSAiRhZmIzMTcwOC05YmY0LTRiOGQtYWFhYS1hZTQzZTM5OGVhMDbYAgXgAgE&sid=a720316c672d2a695f84c78ee25d11b4"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#003580] text-white rounded-lg hover:bg-[#003580]/90 transition-colors font-medium"
            >
              Book on Booking.com
            </a>
          </div>

          {/* Rooms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-64">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-serif">{room.name}</h2>
                    <span className="text-primary font-semibold">
                      {room.price}/night
                    </span>
                  </div>
                  <p className="text-gray-600">{room.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RoomsPage;
