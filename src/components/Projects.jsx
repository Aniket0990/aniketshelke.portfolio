import React from 'react';
import { ExternalLink, Building2, ShieldAlert } from 'lucide-react';
import storeRatingApp from '../assets/projects/store rating app.jpg';
import nvidiaFibernet from '../assets/projects/NvidiaFibernet.png';

// Custom GithubIcon component
const GithubIcon = ({ size = 16, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const Projects = () => {
    const projectList = [
        {
            title: "Store Rating Web App",
            image: storeRatingApp,
            bgClass: "project-p1-gradient",
            icon: <Building2 className="project-bg-icon" size={80} />,
            tags: ["Spring Boot", "MySQL", "ReactJS"],
            description: "Developed a full-stack web application using Spring Boot, MySQL, and ReactJS that enables users to submit ratings for registered stores. Implemented a role-based login system supporting System Administrators, Normal Users, and Store Owners with dashboards and functionalities.",
            features: [
                "Admin Module: Complete CRUD for Users, Categories, and Products, along with monitoring dashboards.",
                "User Module: Secure authentication and ability to rate products.",
                "Store Owner Module: Store management and review handling capabilities.",
                "Tech Stack: Spring Boot (Backend), MySQL (Database), ReactJS (Frontend)."
            ],
            codeUrl: "https://github.com/Aniket0990/Store-Rating-App",
            demoUrl: "#contact"
        },
        {
            title: "Nvidia Fibernet BroadbandSystem",
            image: nvidiaFibernet,
            bgClass: "project-p2-gradient",
            icon: <ShieldAlert className="project-bg-icon" size={80} />,
            tags: ["Java Swing", "MySQL", "JDBC"],
            description: "Developed a full-stack desktop application using Java Swing for broadband service for users. Integrated MySQL database using JDBC for dynamic data fetching, managing billing, user data, and service queries.",
            features: [
                "User Interface: Clean and intuitive GUI built with Swing, providing seamless navigation for customers.",
                "Data Management: Secure storage and retrieval of user details, plan information, and billing records using MySQL and JDBC.",
                "Billing & Payments: Automated billing cycles and payment tracking system.",
                "Tech Stack: Java Swing (Backend), MySQL (Database), JDBC (Connector)."
            ],
            codeUrl: "https://github.com/Aniket0990/NvidiaFibernetBroadbandBillingSystem",
            demoUrl: "#contact"
        }
    ];

    const handleScrollToContact = (e) => {
        e.preventDefault();
        const element = document.getElementById('contact');
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="projects" className="projects-section section-padding section-bg">
            <div className="container">
                <div className="section-header scroll-reveal fade-up">
                    <h2 className="section-title">Featured Projects</h2>
                </div>

                <div className="projects-grid">
                    {projectList.map((project, idx) => (
                        <article key={idx} className="project-card scroll-reveal fade-up">
                            <div className="project-image-container">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                ) : (
                                    <div className={`project-graphic-placeholder ${project.bgClass}`}>
                                        {project.icon}
                                    </div>
                                )}
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <ul className="project-features">
                                    {project.features.map((feature, fIdx) => (
                                        <li key={fIdx}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="project-links">
                                    <a
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link-btn"
                                        title="View Source"
                                    >
                                        <GithubIcon size={16} />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.demoUrl}
                                        className="project-link-btn primary"
                                        title="View Demo"
                                        onClick={project.demoUrl.startsWith('#') ? handleScrollToContact : undefined}
                                    >
                                        {idx === 0 ? <ExternalLink size={16} /> : <ExternalLink size={16} />}
                                        <span>{idx === 0 ? "Live Demo soon..." : "Live Demo soon..."}</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
