'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface ProjectDetail {
  id: string
  title: string
  year: string
  role: string
  description: string
  fullDescription: string
  problem: string
  solution: string
  technologies: string[]
  features: string[]
  github?: string
  demo?: string
  images: string[]
}

const projectsData: { [key: string]: ProjectDetail } = {
  'stapple-food-app': {
    id: 'stapple-food-app',
    title: 'Stapple Food Recommendation App',
    year: '2024',
    role: 'Mobile Developer & UI Designer',
    description: 'Providing recommendations based on user needs and available budget.',
    fullDescription: 'Aplikasi mobile yang membantu pengguna mendapatkan rekomendasi makanan pokok berdasarkan kebutuhan nutrisi dan budget yang tersedia. Menggunakan algoritma machine learning untuk memberikan rekomendasi yang akurat.',
    problem: 'Banyak orang kesulitan memilih makanan pokok yang sesuai dengan budget dan kebutuhan nutrisi mereka.',
    solution: 'Membangun aplikasi yang menggunakan algoritma rekomendasi berbasis budget dan nilai nutrisi, dengan interface yang user-friendly.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Material Design 3'],
    features: [
      'Budget-based food recommendations',
      'Nutritional value calculator',
      'User preference learning',
      'Real-time price tracking',
      'Shopping list generator'
    ],
    github: 'https://github.com/FathiyaS/stapple-food-app',
    images: [
        '/projects/grocerist/screen1.png',
        '/projects/grocerist/screen2.png',
        '/projects/grocerist/screen3.png',
        '/projects/grocerist/screen4.png',
        '/projects/grocerist/screen5.png',
        '/projects/grocerist/screen6.png',
        '/projects/grocerist/screen7.png',
        '/projects/grocerist/screen8.png',
    ]
  },
  'metabolic-health-app': {
    id: 'metabolic-health-app',
    title: 'Metabolic Health Monitoring App',
    year: '2024',
    role: 'Mobile Developer',
    description: 'IoT application to monitor blood sugar, uric acid, hemoglobin, and cholesterol levels.',
    fullDescription: 'Aplikasi IoT yang terintegrasi dengan perangkat medis untuk memantau kesehatan metabolik pengguna secara real-time. Data disinkronisasi ke cloud dan dapat diakses oleh tenaga medis.',
    problem: 'Pasien dengan kondisi metabolik memerlukan monitoring konstan yang seringkali merepotkan.',
    solution: 'Mengembangkan aplikasi mobile yang terintegrasi dengan IoT device untuk monitoring otomatis dan real-time alert.',
    technologies: ['Ionic Framework', 'Angular', 'TypeScript', 'Firebase', 'IoT Integration'],
    features: [
      'Real-time health data monitoring',
      'Automatic data sync with cloud',
      'Health trend analytics',
      'Doctor dashboard integration',
      'Emergency alert system'
    ],
    github: 'https://github.com/Glusambinchole/glusambinchole',
    images: [
        '/projects/glusam/screen1.png',
        '/projects/glusam/screen2.png',
        '/projects/glusam/screen3.png'
    ]
  },
  'money-management-app': {
    id: 'money-management-app',
    title: 'Money Management App',
    year: '2023',
    role: 'Mobile Developer & UI Designer',
    description: 'An app that helps people manage finances with advanced budgeting features.',
    fullDescription: 'Aplikasi manajemen keuangan pribadi yang membantu pengguna melacak pengeluaran, membuat budget, dan mencapai tujuan finansial mereka dengan fitur-fitur canggih.',
    problem: 'Kesulitan dalam melacak pengeluaran dan mengelola budget bulanan secara efektif.',
    solution: 'Membangun aplikasi dengan fitur automatic categorization, budget planning, dan financial goal tracking.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Material Design 3'],
    features: [
      'Automatic expense categorization',
      'Budget planning & tracking',
      'Financial goal setting',
      'Expense analytics & reports',
      'Recurring transaction management'
    ],
    github: 'https://github.com/indradprasetya/SavvySwatantra',
    images: [
        '/projects/savvy/screen1.png',
        '/projects/savvy/screen2.png',
        '/projects/savvy/screen3.png',
        '/projects/savvy/screen4.png',
        '/projects/savvy/screen5.png',
    ]
  }
}

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string
  const project = projectsData[projectId]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="project-detail-container">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <Link href="/" className="nav-logo">Portfolio</Link>
          <Link href="/" className="back-button">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="project-hero">
        <div className="container-full">
          <div className="project-hero-content">
            <div className="project-meta">
              <span className="project-year">{project.year}</span>
              <span className="project-role">{project.role}</span>
            </div>
            <h1 className="project-hero-title">{project.title}</h1>
            <p className="project-hero-description">{project.description}</p>
            <div className="project-hero-buttons">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="project-carousel">
        <div className="container-full">
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={prevImage}>
              ←
            </button>
            
            <div className="carousel-main">
              <div className="carousel-image-wrapper">
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  width={800}
                  height={600}
                  className="carousel-image"
                  priority
                />
              </div>
            </div>

            <button className="carousel-btn next" onClick={nextImage}>
              →
            </button>
          </div>

          {/* Carousel Dots */}
          <div className="carousel-dots">
            {project.images.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="carousel-thumbnails">
            {project.images.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => goToImage(index)}
              >
                <div className="thumbnail-placeholder">
                  <span className="thumbnail-number">{index + 1}</span>
                </div>
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={120}
                  height={90}
                  className="thumbnail-image"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container-split">
          <div className="overview-left">
            <h2 className="section-title">Overview</h2>
            <p className="overview-text">{project.fullDescription}</p>
            
            <div className="overview-block">
              <h3>The Problem</h3>
              <p>{project.problem}</p>
            </div>

            <div className="overview-block">
              <h3>The Solution</h3>
              <p>{project.solution}</p>
            </div>
          </div>

          <div className="overview-right">
            <div className="info-card">
              <h3>Technologies</h3>
              <div className="tech-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h3>Key Features</h3>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="other-projects">
        <div className="container-full">
          <h2 className="section-title">Other Projects</h2>
          <div className="other-projects-grid">
            {Object.values(projectsData)
              .filter(p => p.id !== projectId)
              .map((p) => (
                <Link key={p.id} href={`/projects/${p.id}`} className="other-project-card">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <span className="view-project">View Project →</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container-full">
          <div className="footer-content">
            <p>© 2024 Fathiya Salsabila. All rights reserved.</p>
            <Link href="/" className="footer-link">Back to Home</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}