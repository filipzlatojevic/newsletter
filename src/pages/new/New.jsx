import { useLocation, useNavigate, Link } from 'react-router-dom';
import './New.scss';

function New() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <section className="new">
      <button onClick={() => navigate(-1)} className="back-btn">
        &#10096;
      </button>
      <div className="img-wrapper">
        <img
          src={state.urlToImage || '/public/assets/greenChair.webp'}
          alt="background"
        />
        <h2>{state.title}</h2>
      </div>

      <section className="inner-section">
        <div className="container">
          <h3>Description</h3>
          <p>{state.description}</p>
          <p>{state.content}</p>
          <div>
            Link to source:{' '}
            <Link target="_blank" to={state.url}>
              {state.url}
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default New;
