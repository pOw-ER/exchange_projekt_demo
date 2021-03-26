const CardNews = (props) => {
  return (
    <div class="col-4-md">
      <div class="card h-100">
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description.slice(0, 140)}...</p>
        </div>
        <div className="card-div-a">
          <a className="card-anchor" target="_blank" href={props.url} rel="noreferrer">Read More</a>
        </div>
        <div class="card-footer">
          <small class="text-muted">{props.date.slice(0, 10)} {props.date.slice(11, 16)}</small>
        </div>
      </div>
    </div>

  );
}
export default CardNews;
