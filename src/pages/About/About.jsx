import "./About.css";

function About() {
  return (
    <main className="about">
      <section className="about-hero">
        <span>ABOUT MINI MARVELS</span>

        <h1>
          Little things.
          <br />
          Big imaginations.
        </h1>

        <p>
          Mini Marvels is a playful collection of stationery and toys
          created to bring more creativity, curiosity, and fun into
          everyday moments.
        </p>
      </section>

      <section className="about-story">
        <div className="about-story-content">
          <span>OUR STORY</span>

          <h2>Made for curious little minds.</h2>

          <p>
            We believe childhood is full of little moments that become
            big memories. From colorful pencils and creative notebooks
            to playful toys, Mini Marvels brings together products that
            encourage children to create, explore, and imagine.
          </p>

          <p>
            Our goal is simple — make everyday play and creativity a
            little more joyful.
          </p>
        </div>
      </section>

      <section className="about-values">
        <span>WHAT WE BELIEVE</span>

        <h2>Play. Create. Imagine.</h2>

        <div className="about-value-grid">
          <div className="about-value">
            <h3>Creativity</h3>
            <p>
              Products that encourage kids to draw, build, create,
              and express themselves.
            </p>
          </div>

          <div className="about-value">
            <h3>Playfulness</h3>
            <p>
              Childhood should be fun, colorful, curious, and full
              of imagination.
            </p>
          </div>

          <div className="about-value">
            <h3>Simple Joy</h3>
            <p>
              Thoughtful products that make everyday moments feel
              a little more special.
            </p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to explore?</h2>

        <p>
          Discover stationery and toys made for little imaginations.
        </p>

        <a href="/shop">EXPLORE OUR COLLECTION</a>
      </section>
    </main>
  );
}

export default About;