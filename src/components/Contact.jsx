import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        const fieldName = id.replace('form-', '');
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, message: '' });

        try {
            const response = await fetch("https://formsubmit.co/aniketshelke554@gmail.com", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _captcha: "false"
                })
            });

            if (response.ok) {
                setStatus({
                    submitting: false,
                    success: true,
                    message: `Success! Thank you, ${formData.name}. Your message has been sent. I will get back to you at ${formData.email} shortly.`
                });

                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });

                setTimeout(() => {
                    setStatus(prev => ({ ...prev, message: '' }));
                }, 6000);
            } else {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus({
                submitting: false,
                success: false,
                message: error.message || 'Failed to send message. Please try again later.'
            });
        }
    };

    return (
        <section id="contact" className="contact-section section-padding">
            <div className="container">
                <div className="section-header scroll-reveal fade-up">
                    <h2 className="section-title">Contact</h2>
                </div>

                <div className="contact-form-wrapper scroll-reveal fade-up">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label htmlFor="form-name">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="form-name" 
                                        required 
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="form-email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="form-email" 
                                    required 
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="form-subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="form-subject" 
                                    required 
                                    placeholder="Enter any subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="form-message">Message</label>
                                <textarea 
                                    id="form-message" 
                                    rows="5" 
                                    required 
                                    placeholder="Enter message here"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-block form-submit-btn"
                                disabled={status.submitting}
                            >
                                <span>{status.submitting ? 'Sending Message...' : 'Send Message'}</span>
                                {status.submitting ? (
                                    <Loader2 size={18} className="spin-animation" />
                                ) : (
                                    <Send size={18} />
                                )}
                            </button>

                            {status.message && (
                                <div className={`form-status ${status.success ? 'success' : 'error'}`}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
