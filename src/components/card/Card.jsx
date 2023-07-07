import { Link } from 'react-router-dom';
import './Card.scss';
import { helperFunctions } from '../../utils/helperFunctions';

function Card({ post }) {
  return (
    <div className="card shadow-md">
      <div className="img-wrapper">
        <img src={post?.urlToImage} alt="background" />
        <div />
        <Link to={`/news/${post.source.name}`} state={post} />
      </div>

      <div className="text-wrapper">
        <Link
          className="btn-grad"
          to={`/news/${post.source.name}`}
          state={post}>
          See more
        </Link>
        <span>{helperFunctions.formatDate(post?.publishedAt)}</span>

        <Link to={`/news/${post.source.name}`} state={post}>
          <h3>{post?.title}</h3>
        </Link>

        <p>{post?.description}</p>
      </div>
    </div>
  );
}

export default Card;
