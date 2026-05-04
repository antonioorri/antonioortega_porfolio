import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
    </main>
  );
}