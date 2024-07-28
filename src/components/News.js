import Newsitem from "./Newsitem";
import Loader from "./Loader";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import React,{useEffect,useState} from "react";






const News =(props) => {

const [articles, setarticles] = useState([])
const [loading, setloading] = useState(true)
const [page, setpage] = useState(1)
const [totalResults, settotalResults] = useState(0)
const  capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    

const updateNews=async ()=>{
props.setProgress(10);
   const url =
  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
setloading(true)
  let data = await fetch(url);
  let parseddata = await data.json(); 
  props.setProgress(70);
setarticles(parseddata.articles)
settotalResults(parseddata.totalResults)
setloading(false)
props.setProgress(100);
}


useEffect(() => {
  document.title = `${capitalizeFirstLetter(props.category)} - News Safari`;
  updateNews(); 
}, [])

  
 const fetchMoreData = async() => {

    const url =
    `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
  setpage(page+1)
    let data = await fetch(url);
    let parseddata = await data.json(); 
  setarticles(articles.concat(parseddata.articles))
  settotalResults(parseddata.totalResults)
  }
    return (
      <>
        <h1 className="text-center"  style={{margin: '40px 0px',marginTop:'90px'}}>News Safari - Top Headlines on {capitalizeFirstLetter(props.category)}</h1>
     {loading && <Loader/>}  
  
   
    <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Loader/>}
        > 
         <div className="container">
  

        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
       
      </>
    );
  
}

News.defaultProps={
  country:'in',
  pageSize:10, 
  category:"genral"
  
}

News.propTypes={
  country:PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
}




export default News;
