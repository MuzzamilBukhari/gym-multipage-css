import { HeroSection, Services, Testimonials, Contact } from "@/components";
import "../styles/page.css";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
