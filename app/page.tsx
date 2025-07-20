import { PortfolioHeader } from "@/components/portfolio-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <PortfolioHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}
