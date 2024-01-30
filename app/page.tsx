import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  return (
    <main>
      <Header />
      <Profile />
      <Skills />
      <Projects />
      <SocialMedia />
    </main>
  );
}
