"server components"
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

function Hero() {
    return (
      <section className="container my-10 flex items-center justify-between">
        <div>
          <div className="mb-7 flex flex-col gap-2">
            <h2 className="text-7xl font-bold tracking-wide">Data Pokemon</h2>
            <p className="text-2xl tracking-wide">Final Project - Talent Class Batch 13</p>
            <h3 >"Coach Auzan | Talenthub</h3>
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;