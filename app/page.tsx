import Image from "next/image";
import {ToggleTheme} from '@/components/toggle-theme'
import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/about-me";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="" suppressHydrationWarning>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}
