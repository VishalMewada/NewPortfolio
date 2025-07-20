import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A web application for managing tasks and projects with real-time collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
    {
      title: "E-commerce Store",
      description: "A full-stack e-commerce platform with product listings, shopping cart, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
    {
      title: "Portfolio V2",
      description: "My personal portfolio website showcasing my skills and projects, built with Next.js.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
    {
      title: "Mobile Game",
      description: "A casual mobile game developed using React Native with engaging gameplay mechanics.",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I&apos;ve worked on, demonstrating my skills and passion for development.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                width={500}
                height={300}
                alt={`Project ${project.title}`}
                className="aspect-video object-cover w-full"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild className="w-full">
                  <Link href={project.link}>View Project</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
