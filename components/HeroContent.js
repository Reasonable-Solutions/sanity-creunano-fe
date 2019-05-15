import css from "styled-jsx/css";

export default props => (
  <div className="hero-wrapper">
    <div className="hero">
      <div className="hero-content">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
      <picture className="hero-media">
        <img
          className="hero-image"
          role="presentation"
          alt=""
          src={props.mkUrl ? props.mkUrl(props.imageUrl) : props.imageUrl}
        />
      </picture>
    </div>
    <style jsx>{styles}</style>
  </div>
);

let styles = css`
  .hero-wrapper {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .hero {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    will-change: opacity;
    min-height: 80vh;
    color: white;
    text-decoration: none;
    background: #000;
    z-index: 1;
  }

  .hero-image {
    object-fit: cover;
    width: 100%;
  }
  .hero-media {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    opacity: 0.5;
    width: inherit;
    min-height: 100%;
    object-fit: cover;
  }

  .hero-content {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px 30px;
    position: relative;
    z-index: 3;
  }
`;
