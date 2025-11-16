// app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Portfolio() {
  const [typingText, setTypingText] = useState<string>('')
  const [textIndex, setTextIndex] = useState<number>(0)
  const [charIndex, setCharIndex] = useState<number>(0)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  const texts: string[] = ['Mobile Developer', ' UI Designer']

  useEffect(() => {
    const typeInterval = setTimeout(() => {
      const currentText = texts[textIndex]
      
      if (isDeleting) {
        setTypingText(currentText.substring(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      } else {
        setTypingText(currentText.substring(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(typeInterval)
  }, [charIndex, isDeleting, textIndex, texts])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  interface WorkItem {
    id: string
    title: string
    description: string
    tags: string[]
    mockup: string
  }

  const workItems: WorkItem[] = [
    {
      id: 'stapple-food-app',
      title: 'Stapple food Recommendation App',
      description: 'Providing recommendations based on user needs and available budget.',
      tags: ['Kotlin', 'Jetpack Compose', 'Firebase'],
      mockup: '/mockups/grocerist.png'
    },
    {
      id: 'money-management-app',
      title: 'Money management app',
      description: 'An app that helps people manage finances with advanced budgeting features',
      tags: ['Kotlin', 'Jetpack Compose'],
      mockup: '/mockups/savvy.png'
    },
    {
      id: 'life-simulator-app',
      title: 'Habit simulator app',
      description: 'an application to simulate the results of habits that are done continuously',
      tags: ['Kotlin', 'Jetpack Compose'],
      mockup: '/mockups/whatif.png'
    },
    {
      id: 'metabolic-health-app',
      title: 'Metabolic Health Monitoring App',
      description: 'IoT application to monitor blood sugar, uric acid, hemoglobin, and cholesterol levels.',
      tags: ['Ionic', 'TypeScript', 'Firebase'],
      mockup: '/mockups/glusam.png'
    }
  ]

  interface SkillCategory {
    title: string
    skills: string[]
  }

  const skillCategories: SkillCategory[] = [
    {
      title: 'Mobile Development',
      skills: ['Kotlin', 'Jetpack Compose', 'Ionic Framework', 'Angular', 'TypeScript']
    },
    {
      title: 'Backend Development',
      skills: ['MySQL', 'Firebase', 'REST API']
    },
    {
      title: 'Tools & Others',
      skills: ['Git & GitHub', 'VS Code', 'Android Studio' , 'Figma', 'Framer' ,  'Vercel']
    }
  ]

  interface ContactButton {
    icon: string
    text: string
    href: string
  }

  const contactButtons: ContactButton[] = [
    { icon: '💼', text: 'LinkedIn', href: 'www.linkedin.com/in/fathiya-salsabila' },
    { icon: '💻', text: 'GitHub', href: 'https://github.com/FathiyaS' },
    { icon: '✉️', text: 'Email', href: 'mailto:salsabilafathiya7@gmail.com' }
  ]

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">Portfolio</div>
          <ul className="nav-menu">
            <li><a href="#introduction" onClick={(e) => scrollToSection(e, 'introduction')}>Home</a></li>
            <li><a href="#work" onClick={(e) => scrollToSection(e, 'work')}>Work</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
          </ul>
        </div>
      </nav>

      {/* Introduction Section */}
      <section id="introduction" className="section intro-section">
        <div className="container-split">
          <div className="intro-left">
            <div className="intro-badge">Welcome 👋</div>
            <h1 className="intro-title">
              Hi, I'm <span className="highlight">Fathiya Salsabila</span>
            </h1>
            <p className="intro-subtitle">
              <span className="typing-text">{typingText}</span>
            </p>
            <p className="intro-location">📍 Surakarta, Central Java, Indonesia</p>
            <div className="intro-buttons">
              <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="btn btn-primary">
                View My Work
              </a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="intro-right">
            <div className="intro-image-container">
              <div className="intro-image">
                <div className="avatar-large">👩‍💻</div>
              </div>
              <div className="floating-card card-1">
                <span className="card-icon">💡</span>
                <span className="card-text">Creative</span>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon">⚡</span>
                <span className="card-text">Fast</span>
              </div>
              <div className="floating-card card-3">
                <span className="card-icon">🎯</span>
                <span className="card-text">Precise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section work-section">
        <div className="container-full">
          <div className="section-header">
            <h2 className="section-title">Featured Work</h2>
            <p className="section-description">Some of my recent projects</p>
          </div>
          <div className="work-grid">
            {workItems.map((item, index) => (
              <div key={index} className="work-card">
                <div className="work-content-left">
                  <h3 className="work-title">{item.title}</h3>
                  <p className="work-description">{item.description}</p>
                  <div className="work-tags">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="work-tag">{tag}</span>
                    ))}
                  </div>
                  <Link href={`/projects/${item.id}`} className="work-link">
                    View Project →
                  </Link>
                </div>
                <div className="work-mockup-right">
                    <Image 
                      src={item.mockup} 
                      alt={item.title}
                      width={200}
                      height={350}
                      className="mockup-image-small"
                    />
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container-split">
          <div className="skills-left">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-description">
              Saya memiliki pengalaman dalam berbagai teknologi modern untuk membangun aplikasi mobile yang scalable dan performant.
            </p>
            <div className="skills-stats">
              
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects & Exercises</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Learning Hours</div>
              </div>
            </div>
          </div>
          <div className="skills-right">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3 className="skill-category-title">{category.title}</h3>
                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <span className="skill-bullet">•</span>
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container-full">
          <div className="about-content">
            <div className="about-left">
              <h2 className="section-title">About Me</h2>
              <p className="about-text">
                Saya adalah seorang web developer yang passionate dalam menciptakan website yang menarik dan fungsional. 
                Dengan pengalaman dalam berbagai teknologi modern, saya selalu berusaha untuk terus belajar dan berkembang 
                dalam dunia teknologi.
              </p>
              <p className="about-text">
                Saya senang bekerja dalam tim dan menghadapi tantangan baru setiap harinya. Mari terhubung dan berkolaborasi 
                untuk menciptakan sesuatu yang luar biasa! 🚀
              </p>
              <div className="contact-buttons">
                {contactButtons.map((button, index) => (
                  <a 
                    key={index}
                    href={button.href} 
                    target={button.text !== 'Email' ? '_blank' : undefined}
                    rel={button.text !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="contact-btn"
                  >
                    <span className="contact-icon">{button.icon}</span>
                    <span>{button.text}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="about-right">
              <div className="about-card">
                <div className="about-card-icon">📧</div>
                <h3>Let's Work Together</h3>
                <p>I'm available for freelance projects and full-time opportunities.</p>
              </div>
             {/*<div className="about-card">
                <div className="about-card-icon">🌍</div>
                <h3>Based in Indonesia</h3>
                <p>Working remotely with clients worldwide.</p>
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container-full">
          <div className="footer-content">
            <p>© 2024 Fathiya Salsabila. All rights reserved.</p>
            <p>Built with Next.js & TypeScript</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
