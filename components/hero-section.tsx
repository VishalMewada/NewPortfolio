import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        width={1920}
        height={1080}
        alt="Background Illustration"
        className="absolute inset-0 object-cover w-full h-full opacity-10"
        priority
      />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Hi, I&apos;m Your Name
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A passionate software developer building engaging and user-friendly web experiences.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
