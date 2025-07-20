import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/placeholder.svg?height=400&width=400"
              width={400}
              height={400}
              alt="Profile Picture"
              className="rounded-full object-cover aspect-square border-4 border-primary shadow-lg"
            />
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
              I&apos;m a software developer with a passion for creating intuitive and efficient web applications. With a
              background in computer science and a keen eye for detail, I enjoy transforming complex problems into
              elegant solutions. My expertise spans across frontend and backend development, with a focus on modern
              frameworks and best practices.
            </p>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Skills & Expertise</h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Express.js</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">AWS</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
