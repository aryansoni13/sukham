import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RoomsPage from "./pages/Rooms";
import {
  Palmtree as Palm,
  Utensils,
  Hotel,
  Coffee,
  Wine,
  Tent,
  Mountain,
  ParkingCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Waves,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import PromoPopup from "./components/PromoPopup";
import Footer from "./components/Footer";
import NearbyPlaces from "./components/NearbyPlaces";
import Testimonials from "./components/Testimonials";
import Rooms from "./pages/Rooms";
function ContactForm() {
  const [state, handleSubmit] = useForm("xjkggwyp");

  if (state.succeeded) {
    return (
      <div className="text-center p-4 bg-green-50 rounded-lg">
        <p className="text-green-600 font-semibold">
          Thanks for your message! We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowPromo(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const facilities = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Swimming Pool",
      note: "(Yet to be included)",
    },
    { icon: <Hotel className="w-8 h-8" />, title: "Room Service" },
    { icon: <Utensils className="w-8 h-8" />, title: "Food Bank" },
    { icon: <Coffee className="w-8 h-8" />, title: "Cafe's" },
    {
      icon: <Wine className="w-8 h-8" />,
      title: "Bar",
      note: "(Yet to be included)",
    },
    { icon: <Tent className="w-8 h-8" />, title: "Camping" },
    { icon: <Mountain className="w-8 h-8" />, title: "Trekking" },
    { icon: <ParkingCircle className="w-8 h-8" />, title: "Parking" },
  ];

  return (
    <>
      <Preloader isLoading={isLoading} />
      <PromoPopup isOpen={showPromo} onClose={() => setShowPromo(false)} />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section
          id="home"
          className="h-screen relative flex items-center justify-center"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=2000&q=80"
              alt="Luxury resort view"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-4">
              Sukham Resort
            </h1>
            <p className="text-xl md:text-2xl">
              Experience Luxury & Tranquility
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-center mb-12">
              Welcome to Sukham
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed">
                  We are SUKHAM. The SUKHAM resort has been inaugurated in the
                  year 12th November, 2023. The Rooms availabile from 1st
                  December, 2023 onwards The SUKHAM resort is approved by the
                  Government of Tamil Nadu tourism, Tamil Nadu. The SUKHAM
                  resort is located irrupukal valley, Kotagiri from the Kotagiri
                  bus terminal 4.7km just 10 to 15 minutes travel.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
                  alt="Resort overview"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section id="rooms" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-center mb-8">Our Rooms</h2>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 leading-relaxed mb-8">
                Welcome to our luxurious resort, a tranquil haven nestled amidst
                breathtaking natural landscapes. Step into our elegantly
                designed rooms that effortlessly blend modern comfort with
                rustic charm. Each room boasts spacious interiors, adorned with
                tasteful furnishings and enchanting views of the surrounding
                lush greenery. Immerse yourself in a world of serenity as you
                unwind on a plush king-sized bed, enveloped in crisp,
                high-thread-count linens. Indulge in the opulent marble
                bathroom, featuring a rejuvenating rain shower and deluxe
                amenities. With seamless technology and thoughtful touches, our
                rooms provide the perfect sanctuary for relaxation, ensuring an
                unforgettable stay for every discerning guest.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  to="/rooms"
                  className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  View All Rooms
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-center mb-12">
              Our Facilities
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                >
                  <div className="inline-block p-3 bg-primary/10 rounded-full text-primary mb-4">
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{facility.title}</h3>
                  {facility.note && (
                    <p className="text-sm text-gray-500 mt-1 italic">
                      {facility.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <NearbyPlaces />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-center mb-12">
              Contact Us
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid gap-6 mb-12">
                <div className="flex items-center gap-4 justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                  <a
                    href="tel:9445842201"
                    className="text-lg hover:text-primary transition-colors"
                  >
                    9445842201
                  </a>
                </div>
                <div className="flex items-center gap-4 justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                  <a
                    href="mailto:sukhamresort@gmail.com"
                    className="text-lg hover:text-primary transition-colors"
                  >
                    sukhamresort@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 justify-center text-center">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">
                    1/350C, Irupukal, Opposite Pandian Park, Kotagiri, Nilgiri
                    District, 643217
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-8 mb-12">
                <a
                  href="https://www.facebook.com/people/Sukham-Resort/100092368247336/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/sukhamresort/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2FSukhamResort"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
