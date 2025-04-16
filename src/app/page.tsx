import React from "react";
import { Header } from "@/src/components/Header";
import { Banner } from "@/src/components/Banner";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
      </main>
    </div>
  );
}
