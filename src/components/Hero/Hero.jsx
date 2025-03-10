import './Hero.scss'

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero__title">Learn to code by watching others</h1>
      <p className="hero__description">
        See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
      </p>
    </section>
  );
};

export default Hero;
