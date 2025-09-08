import Hero from "../components/Hero";
import Header from "@/components/NewHeader"

export default function Home() {
  return (
    <div className="h-[5000px] min-w-screen">
      <Header />
      <Hero />
    </div>
  );
}
