import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MountainIcon } from "lucide-react"

export function PortfolioHeader() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-background sticky top-0 z-50">
      <Link href="#" className="flex items-center gap-2">
        <MountainIcon className="h-6 w-6" />
        <span className="font-bold text-lg">Your Name</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link href="#home" className="text-sm font-medium hover:underline underline-offset-4">
          Home
        </Link>
        <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
          About
        </Link>
        <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
          Projects
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
          Contact
        </Link>
      </nav>
      <Button variant="outline" className="hidden md:inline-flex bg-transparent">
        Download CV
      </Button>
    </header>
  )
}
