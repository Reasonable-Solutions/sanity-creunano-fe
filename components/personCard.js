export default props => (
  <div className="job-details__contact-persons">
    <div className="contact-person">
      <div className="contact-person__image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="contact-person__content">
        <div className="contact-person__name">
          <style>
            {
              ".employee-tag {display: inline-block; font-family: inherit; padding: 0; margin: 0; border: 0; background-color: transparent; -webkit-appearance: none; -webkit-border-radius: 0; text-decoration: none; transform-origin: 0 0; -webkit-tap-highlight-color: rgba(0,0,0,0); cursor: pointer; position: relative; padding-top: 5px; text-decoration: none; color: #000; cursor: pointer; border-bottom: 1px solid #000; transition: background-color 100ms,color 100ms,box-shadow 100ms; font-size: 16px; font-weight: 400; letter-spacing: .02em; line-height: 1.5; font-size: 14px; line-height: 1.5; font-weight: 400; letter-spacing: inherit; line-height: 1; font-weight: 500;}"
            }
          </style>
          <button type="button" role="button" className="employee-tag">
            {props.name}
          </button>
        </div>
        <div className="contact-person__title">{props.title} </div>
        <div className="contact-person__phone">{props.phone}</div>
        <a className="contact-person__mail" href={`mailto:${props.email}`}>
          {props.email}
        </a>
      </div>
    </div>
  </div>
);
