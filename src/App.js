import './App.css';
import { Route ,Routes , useSearchParams , useLocation } from 'react-router-dom';
import Blogpage from './components/Blogpage';
import Tagpage from './components/Tagpage';
import Category from './components/Category';
import Home from './components/Home';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';


function App() {
  const {fetchBlogPosts} = useContext(AppContext)
  const [searchParams  ,setSeacrhParams] = useSearchParams()
  const  location = useLocation();


  useEffect(()=>{
    const page = searchParams.get("page") ?? 1; // ?? is used for setting the value if the first value is not find or get
    if(location.pathname.includes("tags")){
      //iska  tag page mei search params hain and show the tag page
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
       fetchBlogPosts(Number(page),tag)
    }
    else if(location.pathname.includes("categories")){
      const Category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,Category)
    }else{
      fetchBlogPosts(Number(page)) 
    }
  },[location.pathname , location.search])

  return (
    <div>
     <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/blog/:blogId' element ={<Blogpage />} />
      <Route path='/tags/:tag' element ={<Tagpage/>} />
      <Route path='/categories/:category' element ={<Category />} />
     </Routes>

    </div>
  );
}

export default App;
