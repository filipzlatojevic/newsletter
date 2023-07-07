import About from './About';
import Hero from './Hero';
import News from './NewsSection';
import Subscribe from './Subscribe';

function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <News />
      <Subscribe />
      <section className="test">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
        quae ducimus harum sint eius. Eligendi nulla eveniet autem beatae quas
        nemo ab consequatur rem libero voluptate placeat dolor, ad cum. Tempore
        unde quas, sit consectetur voluptatibus ducimus aspernatur blanditiis
        dignissimos quam debitis saepe libero hic sunt quis quos aliquam
        corporis.
      </section>
    </div>
  );
}

export default Home;
