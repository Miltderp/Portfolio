import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GithubIcon, LinkedinIcon, MailIcon, FileIcon, ExternalLinkIcon, DownloadIcon, ZoomInIcon, ZoomOutIcon, CheckCircle2, XCircle, Upload, Cat } from 'lucide-react'
import Gallery from './components/Gallery'


const Header = ({ scrollTo }: { scrollTo: (id: string) => void }) => (
  <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-14 items-center justify-center">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          {['About', 'Projects', 'Resume', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm font-medium transition-colors hover:text-secondary"
            >
              {item}
            </button>
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

const About = () =>
{
  const techs = [
    { name: 'React', logo: '/react.png' },
    { name: 'Angular', logo: '/angular.png' },
    { name: 'HTML', logo: '/html.png' },
    { name: 'CSS', logo: '/css.png' },
    { name: 'JavaScript', logo: '/javascript.png' },
    { name: 'Python', logo: '/python.png' },
    { name: 'C#', logo: '/csharp.png' },
    { name: 'Node.js', logo: '/node.png' },
    { name: 'Firebase API', logo: '/firebase.png' },
    { name: 'Flask', logo: '/flask.png' },
    { name: 'mySQL', logo: '/msql.png' },
    { name: 'MongoDB', logo: '/mongo.png' },
  ]

  return (
    <div className="space-y-12">
      <Card className="w-full max-w-3xl mx-auto bg-card">
        <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6">
          <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
            <img src="/p_optimized.png" alt="Milton Joseph" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Milton Joseph</h2>
            <p className="text-gray-300">
              Hello! I'm an aspiring software engineer with a passion for creating
              innovative solutions to complex problems. I actively seek out new technologies
              and strive to expand my knowledge, continuously learning and adapting to the ever-evolving tech landscape.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/miltderp" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon className="h-6 w-6 text-muted-foreground hover:text-foreground" />
              </a>
              <a href="https://www.linkedin.com/in/miltonjoseph/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="h-6 w-6 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Technologies I Work With</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {techs.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <img src={tech.logo} alt={tech.name} className="w-16 h-16 mb-2" />
              <p className="text-sm font-medium text-foreground">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Projects = () =>
{
  const projects = [
    {
      title: 'TheFastSupper',
      description: 'A MERN stack application that provides food recommendations based on user feedback',
      image: '/burger.png',
      url: 'https://github.com/Miltderp/TheFastSupper'
    },
    {
      title: 'Advanced Analytical Identification of Turbine Components',
      description: 'An iOS application that allows users to identify turbine components with their choice of method. Optical Character Recognition, barcode scanning or voice entry',
      image: '/AAITC.png',
      url: 'https://github.com/Miltderp/AAITC/tree/main'
    },
    {
      title: 'C.Ai.T.S ',
      description: 'A photo gallery application that leverages Google Vision API to allow users to upload and download photos of cats... and ONLY cats.',
      image: '/Caits.webp',
      url: '/C.Ai.T.S'
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        project.url.startsWith('http') ? (
          <a href={project.url} key={index} target="_blank" rel="noopener noreferrer" className="block h-full">
            <Card className="bg-card cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg h-full flex flex-col">
              <CardContent className="p-4 flex flex-col h-full">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-4 rounded" />
                <h3 className="text-lg font-semibold mb-2 text-foreground flex items-center">
                  {project.title}
                  <ExternalLinkIcon className="ml-2 h-4 w-4" />
                </h3>
                <p className="text-muted-foreground flex-grow">{project.description}</p>
              </CardContent>
            </Card>
          </a>
        ) : (
          <Link to={project.url} key={index} className="block h-full">
            <Card className="bg-card cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg h-full flex flex-col">
              <CardContent className="p-4 flex flex-col h-full">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-4 rounded" />
                <h3 className="text-lg font-semibold mb-2 text-foreground flex items-center">
                  {project.title}
                  <ExternalLinkIcon className="ml-2 h-4 w-4" />
                </h3>
                <p className="text-muted-foreground flex-grow">{project.description}</p>
              </CardContent>
            </Card>
          </Link>
        )
      ))}
    </div>
  )
}


const Resume = () =>
{
  const [zoom, setZoom] = useState(100)

  const handleZoomIn = () =>
  {
    setZoom(prevZoom => Math.min(prevZoom + 10, 200))
  }

  const handleZoomOut = () =>
  {
    setZoom(prevZoom => Math.max(prevZoom - 10, 50))
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-foreground">My Resume</h3>
        <div className="flex items-center gap-4">
          <Button onClick={handleZoomOut} variant="outline" className="p-2">
            <ZoomOutIcon className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">{zoom}%</span>
          <Button onClick={handleZoomIn} variant="outline" className="p-2">
            <ZoomInIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <DownloadIcon className="h-4 w-4" />
            <a href="/resume.pdf" download="Milton_Joseph_Resume.pdf">
              Download PDF
            </a>
          </Button>
        </div>
      </div>
      <Card className="w-full bg-card overflow-hidden">
        <CardContent className="p-6">
          <div className="w-full overflow-auto">
            <div style={{ width: `${zoom}%`, transition: 'width 0.3s ease-in-out' }}>
              <img
                src="/Resume.jpg"
                alt="Milton Joseph's Resume"
                className="w-full h-auto"
                style={{ maxWidth: 'none' }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const ContactForm = () => 
  {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  const [accessKey, setAccessKey] = useState<string | null>(null)

  useEffect(() =>
  {
    const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    setAccessKey(key || null)
  }, [])

  const handleSubmit = async (e: React.FormEvent) =>
  {
    e.preventDefault()
    setIsSubmitting(true)
    setNotification(null)

    if (!accessKey)
    {
      console.error("Access key is missing")
      setNotification({
        type: 'error',
        message: "Configuration error. Please contact the administrator."
      })
      setIsSubmitting(false)
      return
    }

    const formData = new FormData()
    Object.entries(formState).forEach(([key, value]) =>
    {
      formData.append(key, value)
    })
    formData.append('access_key', accessKey)

    try
    {
      console.log("Submitting form with access key:", accessKey) // For debugging
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()
      console.log("Response:", data) // For debugging

      if (data.success)
      {
        setNotification({
          type: 'success',
          message: "Thank you for your message. I'll get back to you soon."
        })
        setFormState({ name: '', email: '', message: '' })
      } else
      {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (error)
    {
      console.error('Error submitting form:', error)
      setNotification({
        type: 'error',
        message: "There was an error sending your message. Please try again later."
      })
    } finally
    {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="space-y-6 max-w-md mx-auto">
      {notification && (
        <Card className={`p-4 ${notification.type === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
          <div className="flex items-center space-x-2">
            {notification.type === 'success' ? (
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            ) : (
              <XCircle className="h-5 w-5 text-red-600" />
            )}
            <p className={notification.type === 'success' ? 'text-green-700' : 'text-red-700'}>
              {notification.message}
            </p>
          </div>
        </Card>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          placeholder="Your Name"
          value={formState.name}
          onChange={handleChange}
          required
          className="bg-input text-foreground"
          disabled={isSubmitting}
        />
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formState.email}
          onChange={handleChange}
          required
          className="bg-input text-foreground"
          disabled={isSubmitting}
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formState.message}
          onChange={handleChange}
          required
          className="bg-input text-foreground"
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={isSubmitting || !accessKey}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  )
}

// const Gallery = () =>
// {
//   const [images, setImages] = useState<string[]>([])
//   const [uploading, setUploading] = useState(false)

//   useEffect(() =>
//   {
//     // Simulating fetching images from an API
//     setImages(['/img/cat1.jpg', '/img/cat2.jpg', '/img/cat3.jpg'])
//   }, [])

//   const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) =>
//   {
//     const file = event.target.files?.[0]
//     if (!file) return

//     setUploading(true)

//     // Simulating API call to Google Vision API and image upload
//     setTimeout(() =>
//     {
//       setImages(prev => [`/img/cat${prev.length + 1}.jpg`, ...prev])
//       setUploading(false)
//     }, 2000)
//   }

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex h-14 items-center justify-between">
//             <div className="flex items-center">
//               <Cat className="h-8 w-8 mr-2" />
//               <h1 className="text-xl font-bold">C.Ai.T.S Cat Gallery</h1>
//             </div>
//             <nav>
//               <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
//                 Back to Portfolio
//               </Link>
//             </nav>
//           </div>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-4">Upload a Cat Photo</h2>
//           <div className="flex items-center">
//             <Input
//               type="file"
//               accept="image/*"
//               onChange={handleUpload}
//               disabled={uploading}
//               className="mr-4"
//             />
//             <Button disabled={uploading}>
//               {uploading ? (
//                 <>
//                   <Upload className="mr-2 h-4 w-4 animate-spin" />
//                   Uploading...
//                 </>
//               ) : (
//                 <>
//                   <Upload className="mr-2 h-4 w-4" />
//                   Upload
//                 </>
//               )}
//             </Button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {images.map((src, index) => (
//             <Card key={index} className="overflow-hidden">
//               <img src={src} alt={`Cat ${index + 1}`} className="w-full h-48 object-cover" />
//               <CardContent className="p-4">
//                 <Button variant="outline" className="w-full">
//                   <DownloadIcon className="mr-2 h-4 w-4" />
//                   Download
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </main>
//     </div>
//   )
// }

const MainContent = () =>
{
  const [activeSection, setActiveSection] = useState('')
  const aboutRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const resumeRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollTo = (id: string) =>
  {
    const refMap: { [key: string]: React.RefObject<HTMLElement> } = {
      about: aboutRef,
      projects: projectsRef,
      resume: resumeRef,
      contact: contactRef
    }

    const ref = refMap[id]
    if (ref && ref.current)
    {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

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

    const sections = [aboutRef, projectsRef, resumeRef, contactRef]
    sections.forEach((section) =>
    {
      if (section.current)
      {
        observer.observe(section.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header scrollTo={scrollTo} />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section id="about" ref={aboutRef} className="py-20 min-h-screen flex items-center">
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-10 text-center text-foreground">About Me</h2>
              <About />
            </div>
          </section>
          <section id="projects" ref={projectsRef} className="py-20 min-h-screen flex items-center">
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-10 text-center text-foreground">My Projects</h2>
              <Projects />
            </div>
          </section>
          <section id="resume" ref={resumeRef} className="py-20 min-h-screen flex items-center">
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Resume</h2>
              <Resume />
            </div>
          </section>
          <section id="contact" ref={contactRef} className="py-20 min-h-screen flex items-center">
            <div className="w-full">
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

export default function App()
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/C.Ai.T.S" element={<Gallery />} />
      </Routes>
    </Router>
  )
}