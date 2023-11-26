// components/MovieDetails.js
import React from 'react';

const MovieDetails = ({ movieData }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <img
        src={
          movieData.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <div className={styles.movieDetailsLink}>
        <Link className={styles.MovieDetailslink} to="/">
          GO BACK
        </Link>
      </div>
      <div className={styles.movieDetailsWrapper}>
        <div className={styles.movieDetails}>
          <img
            className={styles.movieDetailsImg}
            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div>
            <section className={styles.movieDetailsSection}>
              <ul>
                <li>
                  <h2>
                    {movieDetails.original_title}{' '}
                    {movieDetails.release_date &&
                      `(${movieDetails.release_date.slice(0, 4)})`}
                  </h2>
                  <div>
                    <span>
                      <span className={styles.movieDetailsSpan}>R</span>{' '}
                      {movieDetails.release_date}{' '}
                    </span>
                    <span>
                      <span className={styles.movieDetailsSpan}>G</span>
                    </span>{' '}
                    {movieDetails.genres.map(genre => genre.name).join(', ')}{' '}
                    <span>
                      {' '}
                      <span className={styles.movieDetailsSpan}>T</span>{' '}
                      {`${Math.floor(movieDetails.runtime / 60)}h ${
                        movieDetails.runtime % 60
                      }m`}{' '}
                    </span>
                  </div>
                  <h4>{movieDetails.tagline}</h4>

                  <div>
                    <h4>Rating:</h4> {movieDetails.vote_average.toFixed(1)}
                  </div>
                  <div>
                    <h4>Owerview:</h4> {movieDetails.overview}
                  </div>

                  <h4>Production: </h4>
                  {movieDetails.production_companies.map((company, index) => (
                    <img
                      className={styles.movieDetailsLogo}
                      key={index}
                      src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                      alt={company.name}
                    />
                  ))}
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div>
          <p>Additional information</p>
          <div>
            {showCast && <Cast movieId={movieId} />}
            {showReviews && <Reviews movieId={movieId} />}
            <nav className={styles.movieDetailsNav}>
              <button onClick={toggleCast}>Cast</button>
              <button onClick={toggleReviews}>Reviews</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
