import React from 'react';
import { Download } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const About = () => {
    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <div className="section-header scroll-reveal fade-up">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">A brief overview of who I am and what I do</p>
                </div>

                <div className="about-grid">
                    {/* Left Column: Visual Profile Photo & Details Panel */}
                    <div className="about-visual scroll-reveal fade-up">
                        <div className="profile-img-frame">
                            <img src={profileImg} alt="Aniket Shelke" className="profile-photo" />
                        </div>

                        <div className="about-details">
                            <div className="about-detail-item">
                                <span className="detail-label">Location:</span>
                                <span className="detail-val">Pune, Maharashtra, India</span>
                            </div>
                            <div className="about-detail-item">
                                <span className="detail-label">Email:</span>
                                <span className="detail-val">
                                    <a href="mailto:aniketshelke554@gmail.com">aniketshelke554@gmail.com</a>
                                </span>
                            </div>
                            <div className="about-detail-item">
                                <span className="detail-label">Phone:</span>
                                <span className="detail-val">
                                    <a href="tel:+919112776061">+91 9112776061</a>
                                </span>
                            </div>
                        </div>

                        {/* Download Resume Button */}
                        <div className="about-actions" style={{ marginTop: '25px', width: '100%', maxWidth: '280px' }}>
                            <a
                                href="/Aniket_Shelke_Resume.pdf"
                                download="Aniket_Shelke_Resume.pdf"
                                className="btn btn-primary btn-block"
                                style={{ width: '100%' }}
                            >
                                <Download size={18} />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Biography & Stats Grid */}
                    <div className="about-content scroll-reveal fade-up delay-2">
                        <p className="about-text">
                            - I am currently working as a Frontend Developer at TechTech, where I focus on building modern, responsive, and user-friendly web applications. My role involves developing clean and scalable user interfaces while ensuring a smooth and engaging user experience across different devices and browsers.
                        </p>
                        <p className="about-text">
                            - In my current work, I primarily use technologies such as Next.js, React.js, JavaScript, TypeScript, and Tailwind CSS to create high-performance web applications. I enjoy working on UI development, optimizing application performance, and implementing best practices to deliver reliable and efficient frontend solutions.
                        </p>
                        <p className="about-text">
                            - I also have knowledge of backend technologies including Core Java, Advanced Java, Spring Boot, and REST APIs. This understanding helps me collaborate effectively with backend teams and build well-integrated full-stack solutions. I also have experience working with databases such as MySQL and PostgreSQL.
                        </p>
                        <p className="about-text">
                            - I am familiar with the Software Development Life Cycle (SDLC) and understand how different stages such as planning, development, testing, and deployment contribute to building successful software products. Additionally, I have experience with CI/CD practices that help streamline development workflows, improve code quality, and enable faster and more reliable deployments.
                        </p>
                        <p className="about-text">
                            - Tech Stack: HTML5 | CSS3 | JavaScript | TypeScript | React.js | Next.js | Tailwind CSS | Java | Spring Boot | REST API | SQL | MySQL | PostgreSQL | Git | GitHub | SDLC | CI/CD
                        </p>

                        {/* Statistics Grid Nested Underneath Bio */}
                        <div className="about-stats">
                            <div className="stat-card">
                                <span className="stat-num">2+</span>
                                <span className="stat-name">Core Projects Built</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-num">1</span>
                                <span className="stat-name">Internship Completed</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-num">B.E.</span>
                                <span className="stat-name">Computer Engineering</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
