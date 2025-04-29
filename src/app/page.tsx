import React from "react";
import { Header } from "@/src/components/Header";
import { Banner } from "@/src/components/Banner";
import { About } from "@/src/components/About";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <About />
      </main>
    </div>
  );
}
