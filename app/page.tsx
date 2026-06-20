import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { WriteupsList } from "@/components/sections/WriteupsList";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Praise Abu Ugbede — Cybersecurity Analyst & Penetration Tester",
  description:
    "Portfolio of Praise Abu Ugbede: cybersecurity analyst, penetration tester, and security educator based in Abuja, Nigeria — open to UK relocation.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <WriteupsList />
      <Certifications />
      <Contact />
    </>
  );
}
