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
    year: '2025',
    role: 'Android Mobile Developer & UI Designer',
    description: 'Aplikasi rekomendasi makanan pokok yang berfokus pada wilayah Surakarta (Solo). Pengguna dapat memasukkan budget dan jumlah anggota keluarga, kemudian aplikasi akan menampilkan rekomendasi makanan pokok yang sesuai dengan kebutuhan keluarga dan harga pasar lokal. Pengguna juga dapat memilih kategori makanan pokok yang ingin direkomendasikan sehingga keputusan pembelian menjadi lebih tepat dan efisien.',
    fullDescription: 'Aplikasi mobile yang memberikan rekomendasi makanan pokok berdasarkan budget yang dimiliki pengguna. Dengan memasukkan jumlah budget, pengguna dapat melihat daftar pilihan makanan pokok yang masih sesuai dengan anggaran tersebut. Tujuan aplikasi ini adalah membantu pengguna dalam mengambil keputusan pembelian yang lebih efektif dan ekonomis.',
    problem: 'Harga pasar yang teru berubah',
    solution: 'Menyediakan rekomendasi makanan pokok berbasis data harga lokal Surakarta, dengan perhitungan menyesuaikan budget dan jumlah anggota keluarga, serta pilihan kategori makanan yang fleksibel.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Material Design 3'],
    features: [
      'Budget-based food recommendations',
      'User preference learning',
      'Real-time price tracking',
      'Shopping list generator'
    ],
    github: 'https://github.com/FathiyaS/StapplefoodApp',
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
  'money-management-app': {
    id: 'money-management-app',
    title: 'Money Management App',
    year: '2024',
    role: 'UI/UX Designer | Mentee of Android Mobile Development & UI/UX Design (Infinite Learning)',
    description: 'An app that helps people manage finances with advanced budgeting features.',
    fullDescription: 'Aplikasi manajemen keuangan pribadi yang membantu pengguna melacak pengeluaran, membuat budget plan, dan mencapai tujuan finansial mereka dengan fitur-fitur yang tersedia.',
    problem: 'Kesulitan dalam melacak pengeluaran dan mengelola budget bulanan secara efektif.',
    solution: 'Membangun aplikasi dengan fitur budget planning, savings dan expenses tracking.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Material Design 3'],
    features: [
      'Budget planning & tracking',
      'Savings',
      'Expense analytics & reports',
    ],
    github: 'https://github.com/indradprasetya/SavvySwatantra',
    images: [
        '/projects/savvy/screen1.png',
        '/projects/savvy/screen2.png',
        '/projects/savvy/screen3.png',
        '/projects/savvy/screen4.png',
        '/projects/savvy/screen5.png',
        '/projects/savvy/screen6.png',
        '/projects/savvy/screen7.png',
        '/projects/savvy/screen8.png',
        '/projects/savvy/screen9.png',
    ]
  },
  'life-simulator-app': {
    id: 'life-simulator-app',
    title: 'Habit Simulator App',
    year: '2025',
    role: 'Mobile Developer & UI Designer',
    description: 'A lightweight habit simulation app that demonstrates how small daily actions can produce exponential long-term improvements. It aims to inspire consistency by visualizing the butterfly effect of positive habits',
    fullDescription: 'Aplikasi sederhana yang menyimulasikan dampak jangka panjang dari kebiasaan kecil yang dilakukan secara konsisten. Aplikasi ini menampilkan contoh kebiasaan yang umum dilakukan, lalu memperlihatkan bagaimana progres kecil setiap hari dapat memicu efek domino dan menghasilkan perubahan besar di masa depan. Dibuat untuk mengedukasi dan memotivasi pengguna dalam membangun kebiasaan positif.',
    problem: 'Banyak orang menyerah sebelum memulai karena tidak bisa melihat dampak jangka panjang dari kebiasaan kecil.',
    solution: 'Menyediakan visualisasi sederhana dan instan mengenai potensi hasil besar dari kebiasaan kecil yang dijalankan setiap hari.',
    technologies: ['Kotlin', 'Jetpack Compose'],
    features: [
      'Habit Case Examples',
      'Visual Simulation',
      'Motivational Explanation'
    ],
    github: 'https://github.com/FathiyaS/whatIf',
    images: [
        '/projects/whatif/screen1.png',
        '/projects/whatif/screen2.png',
        '/projects/whatif/screen3.png',
    ]
  },
  'metabolic-health-app': {
    id: 'metabolic-health-app',
    title: 'Metabolic Health Monitoring App',
    year: '2024',
    role: 'Mobile Developer | Software Engineer Intern at Enuma Technology',
    description: 'IoT application to monitor blood sugar, uric acid, hemoglobin, and cholesterol levels.',
    fullDescription: 'Aplikasi IoT yang terintegrasi dengan perangkat medis untuk memantau kesehatan metabolik pengguna secara real-time. Data disinkronisasi ke cloud dan dapat diakses oleh tenaga medis.',
    problem: 'Pasien dengan kondisi metabolik memerlukan monitoring konstan yang seringkali merepotkan.',
    solution: 'Mengembangkan aplikasi mobile yang terintegrasi dengan IoT device untuk monitoring kesehatan metabolik yang terhubung secara real-time dengan IoT device.',
    technologies: ['Ionic Framework', 'Angular', 'TypeScript', 'Firebase', 'IoT Integration'],
    features: [
      'Real-time health data monitoring',
      'Automatic data sync with cloud',
      'Health trend analytics',
    ],
    github: 'https://github.com/Glusambinchole/glusambinchole',
    images: [
        '/projects/glusam/screen1.png',
        '/projects/glusam/screen2.png',
        '/projects/glusam/screen3.png',
        '/projects/glusam/screen4.png',
        '/projects/glusam/screen5.png',
        '/projects/glusam/screen6.png',
        '/projects/glusam/screen7.png',

    ]
  },
  
}

export default function ProjectDetail() {
  const params = useParams()
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