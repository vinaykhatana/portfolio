import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[var(--color-bg-primary)] min-h-screen text-[var(--color-text-primary)] font-sans antialiased selection:bg-[var(--color-accent)]/30 selection:text-[var(--color-accent)]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50 py-8 text-center">
        <p className="text-[var(--color-text-secondary)]">
          © {new Date().getFullYear()} Vinay Kumar Khatana. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  )
}






export default App
