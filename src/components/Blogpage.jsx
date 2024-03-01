import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { baseUrl } from '../baseurl';
import { AppContext } from '../context/AppContext';
import Header from './Header';
import Card from './Card';

const Blogpage = () => {
    const [blog , setBlog] = useState(null)
    const [relatedblogs , setRealatedBlogs] = useState([]);
    const location = useLocation()
    const navigation = useNavigate()
    const {setLoading , loading} = useContext(AppContext)
    const blogId = location.pathname.split("/").at(-1)

    async function fetchRelatedBlogs(){
        setLoading(true)
        let url = `${baseUrl}get-blog?blogId=${blogId}`
        try{
            const res = await fetch(url)
            const data = await res.json()
            setBlog(data.blog)
            setRealatedBlogs(data.relatedBlogs)
        }
        catch(error){
            console.log("Error in blog id component: ", error)
            setBlog(null)
            setRealatedBlogs([])
        } 
        setLoading(false)
    }
    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])

  return (
    <div>
        <Header />
        <div className='flex justify-center'>
            <button className="mr-10 border border-black shadow shadow-black  active:shadow-none py-1 px-2 hover:cursor-pointer"
            onClick={()=> navigation(-1)}
            >
                Back
            </button>
        </div>
        {
            loading ? <p>Loading</p> :
            blog ? (<div className='flex justify-center'>
                <div>
                <Card post={blog} />
                <h2 className='text-3xl flex justify-center m-10'>Related Blogs</h2>
                {
                    relatedblogs.map((post)=>{
                        return (
                            <div key={post.id}><Card post={post} /></div>
                        )
                    })
                }
                </div>
                </div>) :
            (<p>No-Blog Found</p>)
        }
    </div>
  )
}

export default Blogpage