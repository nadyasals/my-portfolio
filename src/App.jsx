import { useState } from "react";
import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  /* =====================================================
     PROJECTS
  ===================================================== */

  const projects = [
    {
      id: 1,
      title: "Tala",
      category: "Product Design / UI UX",
      description:
        "A creative career platform that connects Indonesian creatives and clients through portfolios, cultural identity, projects, and transparent contracts.",
      image: "/project/Tala.png",
      tags: ["UI/UX", "Product Design", "Culture"],
      link: "https://www.figma.com/proto/0g6k1Z3X8r5x7y9zTala?node-id=1-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2",
    },

    {
      id: 2,
      title: "Prediksi Rekomendasi Tanaman",
      category: "Machine Learning / Web App",
      description:
        "A machine learning web application for plant prediction and recommendation using Logistic Regression with six plant classes.",
      image: "/project/tanaman.png",
      tags: ["Python", "Machine Learning", "Logistic Regression"],
      link: "https://huggingface.co/spaces/nasals/PrediksiRekomenTanaman",
    },

    {
      id: 3,
      title: "Salingka",
      category: "Web Design / Ecotourism",
      description:
        "A sustainable ecotourism website concept highlighting rainforest destinations and tourism potential in Sumatra.",
      image: "/project/salingka.png",
      tags: ["Web Design", "Ecotourism", "Sustainability"],
      link: "https://salingka-em8inlpak-nadyas-projects.vercel.app",
    },
  ];

  /* =====================================================
     RESEARCH
  ===================================================== */

  const research = [
    {
      id: 1,
      title:
        "Application of First-Order Markov Chain Models in Earthquake Activity Prediction",
      category: "Research Paper",
      description:
        "Research using First-Order Markov Chain models to analyze earthquake activity based on historical earthquake data.",
      image: "/project/paper_markovchain.png",
      link: "https://ieeexplore.ieee.org/document/11665972",
    },

    {
      id: 2,
      title: "Skin Lesion Classification",
      category: "Deep Learning / Explainable AI",
      description:
        "A skin lesion classification research project using deep learning and Explainable AI to support model transparency.",
      image: "/project/ICORIS.jpg",
      // link: "https://ieeexplore.ieee.org/document/11665972",
    },
    {
      id: 3,
      title: "INTELLISED",
      category: "Student Research / Drone System",
      description:
        "Drone System for Smart and Sustainable Reforestation.",
      image: "/project/IJRS.jpg",
      // link: "https://ieeexplore.ieee.org/document/11665972",
    },
  ];

  /* =====================================================
     COMPETITIONS
  ===================================================== */

  const competitions = [
    {
      id: 1,
      title: "Youth Learning Summit",
      year: "2025",
      location: "Singapore & Malaysia",
      description:
        "Participated in the Youth Learning Summit as part of an international learning and collaboration experience.",
      images: [
        "/public/experience/YSL1.jpg",
        "/public/experience/YSL2.jpg",
        "/public/experience/YSL3.jpg",
        "/public/experience/YSL4.jpg",
      ],
      certificate: "/public/project/YLS.pdf",
    },

    {
      id: 2,
      title: "Ganesha Business Festival",
      year: "2025",
      location: "Indonesia",
      description:
        "Participated in a business-oriented competition and developed experience in teamwork, creativity, and presentation.",
      certificate: "/public/project/Sertifikat HSBPC GBF 2023_Nadya Salsabila.pdf",
    },

    {
      id: 3,
      title: "National Zoology Olympiad",
      year: "2022",
      location: "Indonesia",
      description:
        "Participated in a national-level zoology olympiad as part of academic and competitive learning experience.",
      // certificate: "/project/national zoology olympiad.pdf",
    },

    {
      id: 4,
      title: "Voice Over Customs and Excise Festival",
      year: "2022",
      location: "Indonesia",
      description:
        "Participated in a voice-over competition focused on communication, creativity, and public speaking.",
      certificate: "/public/project/Sertifikat Voice Over CEFHS 2022.pdf",
    },
  ];

  /* =====================================================
     CERTIFICATES
  ===================================================== */

  const certificates = [
    {
      title: "Microsoft Azure AI Fundamentals",
      organization: "Microsoft",
      file: "/project/AI_Azure.pdf",
    },

    {
      title: "C Programming Training",
      organization: "WebHoz",
      file: "/project/sertif webhoz.jpg",
    },

    {
      title: "Youth Learning Summit",
      organization: "YLS",
      file: "/project/YLS.pdf",
    },
  ];

  /* =====================================================
     SKILLS
  ===================================================== */

  const skills = [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Python",
    "React",
    "UI/UX Design",
    "Data Science",
  ];

  /* =====================================================
     HOBBIES
  ===================================================== */

  const hobbies = [
    {
      title: "Yoga",
      description:
        "A way to stay active, balanced, and relaxed between study and project activities.",
      images: [
        "/hobbies/yoga1.jpg",
        "/hobbies/yoga2.jpg",
        "/hobbies/yoga3.jpg",
        "/hobbies/yoga4.jpg",
      ],
    },

    {
      title: "Traveling",
      description:
        "Exploring new places, cultures, nature, and collecting meaningful experiences.",
      images: [
        "/hobbies/sg.jpeg",
        "/hobbies/batucaves.jpeg",
        "/hobbies/baduy.jpeg",
        "/hobbies/tahura.jpeg",
      ],
    },

    {
      title: "Culinary",
      description:
        "Exploring different food and enjoying culinary experiences with friends and family.",
      images: [
        "/hobbies/culiner.jpeg",
        "/hobbies/culiner2.jpeg",
        "/hobbies/culiner3.jpeg",
        "/hobbies/culiner4.jpeg",
      ],
    },
  ];

  return (
    <div className="portfolio">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            Nadya<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#competition">Competition</a>
            <a href="#projects">Projects</a>
            <a href="#research">Research</a>
            <a href="#skills">Skills</a>
            <a href="#hobbies">Hobbies</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section id="home" className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <div className="eyebrow">
              INFORMATICS / INTELLIGENT SYSTEMS
            </div>

            <h1>
              Hi, I'm <span>Nadya</span>.
              <br />
              I build things
              <br />
              <em>with purpose.</em>
            </h1>

            <p className="hero-description">
              A 5th-semester Computer Science student at BINUS University
              with an interest in Artificial Intelligence, Data Science,
              Natural Language Processing, Computer Vision, and Web Development.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>

              <a href="#contact" className="btn btn-secondary">
                Let's Connect
              </a>

            </div>

            <div className="hero-info">

              <div>
                <strong>5th</strong>
                <span>Semester</span>
              </div>

              <div>
                <strong>AI</strong>
                <span>Main Interest</span>
              </div>

              <div>
                <strong>CS</strong>
                <span>Background</span>
              </div>

            </div>

          </div>


          <div className="hero-image-wrapper">

            <div className="hero-image-background"></div>

            <img
              src="/profile.jpeg"
              alt="Nadya"
              className="hero-image"
            />

            <div className="floating-card">

              <div className="floating-dot"></div>

              <div>
                <strong>Currently learning</strong>
                <p>AI & Intelligent Systems</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section id="about" className="section">

        <div className="section-container">

          <div className="section-heading">

            <div className="section-number">
              01 — ABOUT
            </div>

            <h2>
              A little bit <em>about me.</em>
            </h2>

            <p className="section-intro">
              A Computer Science student who enjoys learning,
              creating, collaborating, and turning ideas into
              meaningful digital experiences.
            </p>

          </div>


          <div className="about-grid">

            <div className="about-main">

              <p className="large-text">
                I enjoy exploring technology while combining
                analytical thinking with creativity.
              </p>

              <p>
                I am currently studying Computer Science at BINUS University,
                with a growing interest in Intelligent Systems. My learning
                journey includes Artificial Intelligence, Machine Learning,
                Computer Vision, Natural Language Processing, Data Science,
                and Web Development.
              </p>

              <p>
                Outside academics, I enjoy joining organizations,
                committees, competitions, traveling, sports, and
                culinary experiences.
              </p>


              <a
                href="/CV_NadyaSalsabila.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-button"
              >

                <div className="cv-icon">
                  📄
                </div>

                <div className="cv-text">

                  <small>DOCUMENT</small>

                  <strong>
                    View My CV
                  </strong>

                </div>

                <div className="cv-arrow">
                  ↗
                </div>

              </a>

            </div>


            <div className="about-side">

              <div className="about-item">

                <span>01</span>

                <div>
                  <h3>Learning</h3>
                  <p>
                    Always exploring new technologies and
                    improving technical skills.
                  </p>
                </div>

              </div>


              <div className="about-item">

                <span>02</span>

                <div>
                  <h3>Collaboration</h3>
                  <p>
                    Comfortable working in teams and
                    contributing to organizational activities.
                  </p>
                </div>

              </div>


              <div className="about-item">

                <span>03</span>

                <div>
                  <h3>Creativity</h3>
                  <p>
                    Interested in transforming ideas into
                    useful and thoughtful digital products.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section id="experience" className="section soft-section">

        <div className="section-container">

          <div className="section-heading">

            <div className="section-number">
              02 — EXPERIENCE
            </div>

            <h2>
              Experience & <em>activities.</em>
            </h2>

            <p className="section-intro">
              Experiences that have helped me grow through
              leadership, teamwork, organization, and active participation.
            </p>

          </div>


          <div className="experience-list">

            {/* EXPERIENCE 1 */}

            <div className="experience-card">

              <div className="experience-year">
                2025 — 2026
              </div>

              <div className="experience-content">

                <h3>
                  First Year Program Leader
                </h3>

                <h4>
                  BINUS@Bandung — Binusian 2029
                </h4>

                <p>
                  Supported first-year students during their transition
                  into university life through activities, communication,
                  coordination, and team collaboration.
                </p>

                <div className="experience-image">

                  <img
                    src="/experience/FYPLBinus.jpeg"
                    alt="First Year Program Leader"
                  />

                </div>

              </div>

            </div>


            {/* EXPERIENCE 2 */}

            <div className="experience-card">

              <div className="experience-year">
                2025 — Present
              </div>

              <div className="experience-content">

                <h3>
                  HRD Activist
                </h3>

                <h4>
                  BINUS Computer Club (BNCC)
                </h4>

                <p>
                  Contributing to the Human Resources Development team
                  through organizational activities, teamwork, member
                  coordination, and internal development programs.
                </p>


                {/* HRD CERTIFICATE */}

                <div className="experience-certificate">

                  <div className="certificate-mini-icon">
                    📜
                  </div>

                  <div className="certificate-mini-content">

                    <span>
                      CERTIFICATE
                    </span>

                    <strong>
                      HRD Certificate
                    </strong>

                    <p>
                      BINUS Computer Club
                    </p>

                  </div>

                  <a
                    href="/project/HRD%20-%20Nadya%20Salsabila.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-view-button"
                  >
                    View Certificate
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </div>


            {/* EXPERIENCE 3 */}

            <div className="experience-card">

              <div className="experience-year">
                2022
              </div>

              <div className="experience-content">

                <h3>
                  Social Service Team
                </h3>

                <h4>
                  CROWN
                </h4>

                <p>
                  Participated in a social service activity focused
                  on teamwork, community involvement, and contributing
                  to social activities.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMPETITION
      ===================================================== */}

      <section id="competition" className="section">

        <div className="section-container">

          <div className="section-heading">

            <div className="section-number">
              03 — COMPETITION
            </div>

            <h2>
              Competition <em>journey.</em>
            </h2>

            <p className="section-intro">
              Experiences from competitions, academic activities,
              and opportunities to learn beyond the classroom.
            </p>

          </div>


          <div className="competition-grid">

            {competitions.map((competition) => (

              <div
                className="competition-card"
                key={competition.id}
              >

                <div className="competition-gallery">

                  {(competition.images || []).map((image, index) => (

                    <img
                      key={index}
                      src={image}
                      alt={`${competition.title} ${index + 1}`}
                    />

                  ))}

                  <div className="image-location">
                    {competition.location}
                  </div>

                </div>


                <div className="competition-body">

                  <div className="card-topline">

                    <span>
                      {competition.year}
                    </span>

                    <span>
                      Competition
                    </span>

                  </div>

                  <h3>
                    {competition.title}
                  </h3>

                  <p>
                    {competition.description}
                  </p>


                  {competition.certificate && (

                    <div className="competition-actions">

                      <a
                        href={competition.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="small-button"
                      >
                        View Certificate ↗
                      </a>

                    </div>

                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section id="projects" className="section soft-section">

        <div className="section-container">

          <div className="section-heading">

            <div className="section-number">
              04 — PROJECTS
            </div>

            <h2>
              Things I've <em>built.</em>
            </h2>

            <p className="section-intro">
              Selected projects combining technology,
              design, research, and problem solving.
            </p>

          </div>


          <div className="project-grid">

            {projects.map((project) => (

              <div
                className="project-card"
                key={project.id}
              >

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-number">
                    0{project.id}
                  </div>

                </div>


                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>


                  <div className="tag-list">

                    {project.tags.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>


                  <div className="project-actions">

                    <button
                      className="text-button"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details →
                    </button>


                    {project.link && (

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-button"
                      >
                        Visit Project ↗
                      </a>

                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          RESEARCH
      ===================================================== */}

      <section id="research" className="section">

        <div className="section-container">

          <div className="section-heading">

            <div className="section-number">
              05 — RESEARCH
            </div>

            <h2>
              Research & <em>exploration.</em>
            </h2>

            <p className="section-intro">
              Academic projects exploring Artificial Intelligence,
              Machine Learning, and data-driven approaches.
            </p>

          </div>


          <div className="research-list">

            {research.map((item, index) => (

              <div
                className="research-card"
                key={item.id}
              >

                <div className="research-number">
                  0{index + 1}
                </div>


                <div className="research-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                </div>


                <div className="research-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <div className="research-actions">

                    <span className="small-button">
                      {item.category}
                    </span>

                    {item.link && (

                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-button"
                      >
                        Read Paper ↗
                      </a>

                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CERTIFICATES
      ===================================================== */}

      <section className="section soft-section">

        <div className="section-container">

          <div className="section-heading">

            <div className="section-number">
              06 — CERTIFICATES
            </div>

            <h2>
              Learning & <em>certifications.</em>
            </h2>

            <p className="section-intro">
              Certificates and learning experiences that support
              my academic and technical development.
            </p>

          </div>


          <div className="certificate-grid">

            {certificates.map((certificate) => (

              <div
                className="certificate-card"
                key={certificate.title}
              >

                <div className="certificate-icon">
                  📜
                </div>


                <div className="certificate-content">

                  <span>
                    Certificate
                  </span>

                  <h3>
                    {certificate.title}
                  </h3>

                  <p>
                    {certificate.organization}
                  </p>


                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-button"
                  >
                    View Certificate ↗
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section id="skills" className="section">

        <div className="section-container">

          <div className="section-heading">

            <div className="section-number">
              07 — SKILLS
            </div>

            <h2>
              Tools & <em>skills.</em>
            </h2>

            <p className="section-intro">
              Technologies and areas I am currently learning
              and developing through academic and personal projects.
            </p>

          </div>


          <div className="skills-wrapper">

            {skills.map((skill, index) => (

              <div
                className="skill-pill"
                key={skill}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                {skill}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOBBIES
      ===================================================== */}

      <section id="hobbies" className="section soft-section">

        <div className="section-container">

          <div className="section-heading">

            <div className="section-number">
              08 — HOBBIES
            </div>

            <h2>
              Beyond the <em>screen.</em>
            </h2>

            <p className="section-intro">
              A few things I enjoy outside studying and building projects.
            </p>

          </div>


          <div className="hobby-grid">

            {hobbies.map((hobby) => (

              <div
                className="hobby-card"
                key={hobby.title}
              >

                <div className="hobby-photo-grid">

                  {hobby.images.map((image, index) => (

                    <img
                      key={index}
                      src={image}
                      alt={`${hobby.title} ${index + 1}`}
                    />

                  ))}

                </div>


                <div className="hobby-content">

                  <h3>
                    {hobby.title}
                  </h3>

                  <p>
                    {hobby.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section id="contact" className="contact-section">

        <div className="contact-container">

          <div className="contact-heading">

            <div className="section-number">
              09 — CONTACT
            </div>

            <h2>
              Let's <em>build</em>
              <br />
              something together.
            </h2>

            <p>
              Whether you want to collaborate, discuss a project,
              or simply say hello, feel free to reach out.
            </p>

          </div>


          <div className="contact-links">

            <a
  href="mailto:nadyasalsabila2007@gmail.com"
  className="contact-item"
>
  <div>
    <span className="contact-label">PERSONAL EMAIL</span>
    <strong>nadyasalsabila2007@gmail.com</strong>
  </div>

  <span className="contact-arrow">↗</span>
</a>

<a
  href="mailto:nadya.salsabila003@binus.ac.id"
  className="contact-item"
>
  <div>
    <span className="contact-label">BINUS EMAIL</span>
    <strong>nadya.salsabila003@binus.ac.id</strong>
  </div>

  <span className="contact-arrow">↗</span>
</a>



            <a
              href="https://www.linkedin.com/in/nadya-salsabila-2b2845323/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >

              <div>
                <span className="contact-label">
                  LINKEDIN
                </span>

                <strong>
                  Nadya Salsabila
                </strong>
              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            <a
              href="https://www.instagram.com/ndyaaslsbl/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >

              <div>
                <span className="contact-label">
                  INSTAGRAM
                </span>

                <strong>
                  @ndyaaslsbl
                </strong>
              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            <a
              href="https://wa.me/6281271067061"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >

              <div>
                <span className="contact-label">
                  WHATSAPP
                </span>

                <strong>
                  Let's chat
                </strong>
              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            <a
              href="https://github.com/nadyasals"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >

              <div>
                <span className="contact-label">
                  GITHUB
                </span>

                <strong>
                  nadyasals
                </strong>
              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            <a
              href="https://line.me/ti/p/~291611040821"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >

              <div>
                <span className="contact-label">
                  LINE
                </span>

                <strong>
                  291611040821
                </strong>
              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-container">

          <span>
            © 2026 Nadya Salsabila
          </span>

          <span>
            Designed & built with React
          </span>

        </div>

      </footer>


      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      {selectedProject && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <div className="modal-category">
              {selectedProject.category}
            </div>

            <h2>
              {selectedProject.title}
            </h2>

            <p>
              {selectedProject.description}
            </p>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />

            <div className="tag-list modal-button">

              {selectedProject.tags.map((tag) => (

                <span key={tag}>
                  {tag}
                </span>

              ))}

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;