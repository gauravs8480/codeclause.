import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';


const App =()=>{
 const  pageSize = 15;
 const apiKey="7e198d91b8414ec3889e0d9f8ce89fe4" //enviroment variable to hide API KEY 

const [progress, setProgress] = useState(0)



    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={progress}
     
      />

          <Routes>
            <Route exact path="/" element={<><News setProgress= {setProgress}  apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general" />
            </>
            }
            />
            <Route
              exact
              path="/science"
              element={<>{" "}
                  <News setProgress= {setProgress}  apiKey={apiKey}
                    key="science"
                    pageSize={pageSize}
                    country="in"
                    category="science"
                  />
                </>
              }
            />
            <Route
              exact
              path="/buisness"
              element={
                <>
                  {" "}
                  <News setProgress= {setProgress}  apiKey={apiKey}
                    key="buisness"
                    pageSize={pageSize}
                    country="in"
                    category="business"
                  />
                </>
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <>
                  <News setProgress= {setProgress}  apiKey={apiKey}
                    key="techno;ogy"
                    pageSize={pageSize}
                    country="in"
                    category="technology"
                  />
                </>
              }
            />
            <Route exact path="/sports" element={<>{" "}<News setProgress= {setProgress}  apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></>}/>
              <Route
              exact
              path="/entertainment"
              element={
                <>
                  <News setProgress= {setProgress}  apiKey={apiKey}
                    key="entertainment"
                    pageSize={pageSize}
                    country="in"
                    category="entertainment"
                  />
                </>
              }
            />
            <Route
              exact
              path="/health"
              element={
                <>
                  <News setProgress= {setProgress}  apiKey={apiKey}
                    key="health"
                    pageSize={pageSize}
                    country="in"
                    category="health"
                  />
                </>
              }
            />
            <Route
              exact
              path="/general"
              element={
                <>
                  <News setProgress= {setProgress}  apiKey={apiKey}
                    key="general"
                    pageSize={pageSize}
                    country="in"
                    category="general"
                  />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  
}


export default App;