import Hero from "./components/Hero";
import Programme from "./components/Programme";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-green-50 min-h-screen">
      <Hero />
      <Programme /> 
      <Footer />
    </div>
  );
}
