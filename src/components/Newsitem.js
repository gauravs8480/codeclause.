const Newsitem = (props) => {

  let { title, description, imageUrl, newsurl, author, date, source } = props;
  return (
    <div className='my-3'>


      <div className="card">
        <div className="container"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}


        >
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>

        </div>

        <img src={!imageUrl ? "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/how-to-make-a-url-for-a-picture-on-your-computer-4.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author ? "Uknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>



      </div>







    </div>
  )

}

export default Newsitem