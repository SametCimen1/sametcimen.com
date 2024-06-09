import Image from "next/image";
import {ToggleTheme} from '@/components/toggle-theme'
import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/about-me";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutMe />
      <Projects />
    </main>
  );
}
