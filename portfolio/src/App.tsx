import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GithubIcon, LinkedinIcon, MailIcon, FileIcon } from 'lucide-react'

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-14 items-center justify-center">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          {['About', 'Technologies', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium transition-colors hover:text-secondary"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  </header>
)

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left text-muted-foreground">
            © {new Date().getFullYear()} Milton Joseph. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/miltderp" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </a>
          <a href="https://www.linkedin.com/in/miltonjoseph/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </a>
          <a href="mailto:miltonjoseph138@gmail.com" aria-label="Email">
            <MailIcon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

const Profile = () => (
  <Card className="w-full max-w-3xl mx-auto bg-card">
    <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6">
      <img src="/p.png" alt="Milton Joseph" className="rounded-full w-48 h-48 object-cover" />
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Milton Joseph</h2>
        <p className="text-muted-foreground">
          Hello! I'm an aspiring software engineer with a passion for creating
          innovative solutions to complex problems. I actively seek out new technologies
          and strive to expand my knowledge, continuously learning and adapting to the ever-evolving tech landscape.
        </p>
        <Button variant="outline" className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
          <FileIcon className="h-4 w-4" />
          Download Resume
        </Button>
      </div>
    </CardContent>
  </Card>
)

const Technologies = () =>
{
  const techs = [
    { name: 'React', logo: '/react.png' }, 
    { name: 'Angular', logo: '/aws-logo.png' },
    { name: 'TypeScript', logo: '/typescript-logo.png' }, 
    { name: 'HTML', logo: '/typescript-logo.png' }, 
    { name: 'JavaScript', logo: '/docker-logo.png' },
    { name: 'Python', logo: '/python-logo.png' },
    { name: 'C#', logo: '/python-logo.png' },
    { name: 'Node.js', logo: '/nodejs-logo.png' },
    { name: 'Firebase API', logo: '/nodejs-logo.png' },
    { name: 'Flask', logo: '/typescript-logo.png' }, 
    { name: 'mySQL', logo: '/python-logo.png' },
    { name: 'MongoDB', logo: '/python-logo.png' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {techs.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center">
          <img src={tech.logo} alt={tech.name} className="w-16 h-16 mb-2" />
          <p className="text-sm font-medium text-foreground">{tech.name}</p>
        </div>
      ))}
    </div>
  )
}

const Projects = () =>
{
  const projects = [
    {
      title: 'Fast Supper',
      description: 'A MERN stack application that provides food recommendations based on user feedback',
      image: '/Fast.png'
    },
    {
      title: 'Advanced Analytical Identification of Turbine Components',
      description: 'An iOS application that allows users to identify turbine components with their choice of method. Optical Character Recognition, barcode scanning or voice entry',
      image: '/AAITC.png'
    },
    {
      title: 'C.Ai.T.S',
      description: 'A photo gallery application that leverages Google Vision API to allow users to upload and download photos of cats... and ONLY cats.',
      image: '/Caits.webp'
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card key={index} className="bg-card">
          <CardContent className="p-4">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2 text-foreground">{project.title}</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

const ContactForm = () =>
{
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) =>
  {
    e.preventDefault()
    try
    {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', formState)
      alert('Thank you for your message! I\'ll get back to you soon.')
      setFormState({ name: '', email: '', message: '' })
    } catch (error)
    {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again later.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <Input
        placeholder="Your Name"
        value={formState.name}
        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        required
        className="bg-input text-foreground"
      />
      <Input
        type="email"
        placeholder="Your Email"
        value={formState.email}
        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
        required
        className="bg-input text-foreground"
      />
      <Textarea
        placeholder="Your Message"
        value={formState.message}
        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
        required
        className="bg-input text-foreground"
      />
      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
    </form>
  )
}

export default function App()
{
  const [activeSection, setActiveSection] = useState('')

  useEffect(() =>
  {
    const observer = new IntersectionObserver(
      (entries) =>
      {
        entries.forEach((entry) =>
        {
          if (entry.isIntersecting)
          {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('section').forEach((section) =>
    {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section id="about" className="py-20">
            <div className="container">
              <h2 className="text-3xl font-bold mb-10 text-center text-foreground">About Me</h2>
              <Profile />
            </div>
          </section>
          <section id="technologies" className="py-20 bg-muted">
            <div className="container">
              <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Technologies I Work With</h2>
              <Technologies />
            </div>
          </section>
          <section id="projects" className="py-20">
            <div className="container">
              <h2 className="text-3xl font-bold mb-10 text-center text-foreground">My Projects</h2>
              <Projects />
            </div>
          </section>
          <section id="contact" className="py-20 bg-muted">
            <div className="container">
              <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Contact Me</h2>
              <ContactForm />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}