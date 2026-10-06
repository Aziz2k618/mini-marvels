import "./Contact.css";

function Contact() {
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

            <div className="contact-detail">
              <h3>Email</h3>
              <p>Send us your questions or enquiries.</p>
              <a href="mailto:hello@minimarvels.com">
                hello@minimarvels.com
              </a>
            </div>

            <div className="contact-detail">
              <h3>Instagram</h3>
              <p>Follow Mini Marvels for updates and inspiration.</p>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                @minimarvels
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                placeholder="How can we help?"
              ></textarea>
            </div>

            <button type="submit">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;