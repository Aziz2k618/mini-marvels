import { useState } from "react";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiInstagram, FiSend } from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { id, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [id]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);
    setIsSubmitted(false);

    // Temporary frontend-only submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  }

  return (
    <main className="contact">
      <section className="contact-header">
        <span>GET IN TOUCH</span>

        <h1>We'd love to hear from you.</h1>

        <p>
          Have a question about a product, an order, or Mini Marvels?
          Send us a message and we'll be happy to help.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <span>CONTACT US</span>

          <h2>Let's talk.</h2>

          <p>
            Whether you need help choosing a product or simply want to
            say hello, we're always happy to hear from you.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-detail-icon whatsapp-icon">
                <FaWhatsapp />
              </div>

              <div className="contact-detail-content">
                <h3>WhatsApp</h3>
                <p>Chat with us about products and orders.</p>

                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Message us
                </a>
              </div>
            </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <FiMail />
              </div>

              <div className="contact-detail-content">
                <h3>Email</h3>
                <p>Send us your questions or enquiries.</p>

                <a href="mailto:hello@minimarvels.com">
                  hello@minimarvels.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <FiInstagram />
              </div>

              <div className="contact-detail-content">
                <h3>Instagram</h3>
                <p>Follow Mini Marvels for updates and inspiration.</p>

                <a href="#" target="_blank" rel="noreferrer">
                  @minimarvels
                </a>
              </div>
            </div>

          </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows="6"
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              <FiSend />
              <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
            </button>

            {isSubmitted && (
              <p className="form-success">
                Thanks! Your message has been received.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;