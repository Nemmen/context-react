import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({post}) => {
  return (
    <div className='w-[50%] m-auto'>
     <NavLink to={`/blog/${post.id}`} > <p className='font-bold text-[20px]'>{post.title}</p></NavLink>
      <p>by &nbsp;<span className='text-slate-500'>{post.author}</span> on <span className='text-slate-500'><NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>{post.category}</NavLink></span></p>
      <p >Posted on {post.date}</p>
      <p>{post.content}</p>
      <div className='  text-blue-700'>
        {post.tags.map((tag ,index)=>{
          return (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}><a href='#' className='mr-3'>#{tag}</a></NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Card