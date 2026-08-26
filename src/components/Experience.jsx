import React from 'react';
import { Briefcase, GraduationCap, BookOpen, Award } from 'lucide-react';

const Experience = () => {

    const timelineItems = [
        {
            date: "02/2026 - Present",
            title: "Frontend Developer",
            organization: "TechTech",
            location: "Pune, Maharashtra",
            icon: <Briefcase size={20} />,
            side: "right",
            points: [
                "Developing modern, responsive, and user-friendly web applications as a Frontend Developer at TechTech.",
                "Building scalable and reusable UI components using Next.js, React.js, JavaScript, TypeScript, and Tailwind CSS.",
                "Integrating frontend applications with backend services through REST APIs to ensure seamless functionality.",
                "Optimizing application performance and improving user experience across different devices and browsers.",
                "Collaborating with cross-functional teams including backend developers and designers."
            ]
        },
        {
            date: "02/2025 - 07/2025",
            title: "Java FullStack Developer Intern",
            organization: "Robowaves",
            location: "Pune, Maharashtra",
            icon: <Briefcase size={20} />,
            side: "left",
            points: [
                "Working on Java-based real-time application Development with Hands-on experience.",
                "Designed and integrated backend and frontend components to create scalable, user-friendly systems.",
                "Ensured coding best practices, clean architecture, and deployment on AWS."
            ]
        },
        {
            date: "2020 - 2024",
            title: "Bachelor of Engineering in Computer Science",
            organization: "SKN Sinhgad Institute of Technology and Science",
            location: "Lonavala, Pune",
            icon: <GraduationCap size={20} />,
            side: "right",
            text: "7.83 (CGPA)"
        },
        {
            date: "2019-2020",
            title: "HSC Science",
            organization: "Arts, Science and Commerce College",
            location: "Rahuri, Ahilyanagar",
            icon: <BookOpen size={20} />,
            side: "left",
            text: "61%"
        },
        {
            date: "2017-2018",
            title: "SSC Science",
            organization: "Savitribai Phule Madhyamik Vidyalaya, MPKV",
            location: "M.P.K.V. Rahuri, Ahilyanagar",
            icon: <Award size={20} />,
            side: "right",
            text: "87%"
        }
    ];

    return (
        <section id="experience" className="timeline-section section-padding">
            <div className="container">
                <div className="section-header scroll-reveal fade-up">
                    <h2 className="section-title">Experience & Education</h2>
                </div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {timelineItems.map((item, idx) => (
                        <div key={idx} className="timeline-item scroll-reveal fade-up">
                            <div className="timeline-dot">
                                {item.icon}
                            </div>
                            <div className={`timeline-card ${item.side}`}>
                                <div className="timeline-card-header">
                                    <h3 className="timeline-card-title">{item.title}</h3>
                                    <span className="timeline-date">{item.date}</span>
                                    <h4 className="timeline-card-org">
                                        {item.organization} | <span className="location">{item.location}</span>
                                    </h4>
                                </div>
                                {item.points && (
                                    <div className="timeline-card-body">
                                        <ul>
                                            {item.points.map((pt, pIdx) => (
                                                <li key={pIdx}>{pt}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {item.text && (
                                    <div className="timeline-card-body">
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{item.text}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
