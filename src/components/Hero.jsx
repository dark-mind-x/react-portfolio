import './Hero.css'

function Hero () {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2>Hello, I'm a Developer</h2>
        <h1>Building Digital Experiences</h1>
        <p>
          I am an ECE Student passionate about Iot, VLSI, Netwoking and Web Development.
          I build things that work on the internet and on silicon.
        </p>
        <button className="cta-button">View My Work</button>
      </div>

      <div className="hero-avatar">
        <div className="avatar-circle"><span className="initials">SA</span></div>
      </div>
    </div>
  )
}

export default Hero
