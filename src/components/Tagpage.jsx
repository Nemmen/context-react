import React from 'react'
import Header from './Header'
import { useNavigate , useLocation } from 'react-router-dom'
import Blogs from './Blogs'
import Pagination from './Pagination'

const Tagpage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const tag = location.pathname.split("/").at(-1)
  return (
    <div>
        <Header />
        <div className='flex justify-center'>
            <button className="mr-10 border border-black shadow shadow-black active:shadow-none py-1 px-2 hover:cursor-pointer"
            onClick={()=>navigate(-1)}>
                Back
            </button>
            <h2 className='text-3xl '>Blogs Tagged <span>#{tag}</span></h2>
        </div>
        <div className='mb-10'></div>
        <Blogs tag={tag}/>
        <Pagination />
    </div>
  )
}

export default Tagpage