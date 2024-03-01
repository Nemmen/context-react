import React from 'react'
import Blogs from './Blogs'
import Pagination from './Pagination'
import Header from './Header'


const Home = () => {
  return (
    <div>
        <Header />
        <Blogs />
        <Pagination />
        
    </div>
  )
}

export default Home