import Hero from "@/components/hero";
import { Cat } from "lucide-react";
import Image from "next/image";
import CatPage from "./cat/page";
import PokemonPage from "./pokemon/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <PokemonPage />
    </main>
  );
}
