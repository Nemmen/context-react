import { createContext, useState } from "react";
import { baseUrl } from "../baseurl";
import {useNavigate} from 'react-router-dom'


export const AppContext = createContext();

export function AppContextProvider({ children }) {


    // data define
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //data filling
    async function fetchBlogPosts(page = 1 , tag = null , category = null) {
        setLoading(true);
        let url = `${baseUrl}get-blogs?page=${page}`
        if(tag){
            url += `&tag=${tag}`
        }
        if(category){
            url += `&category=${category}`
        }
        try {
            let response = await fetch(url)
            if (!response.ok) throw new Error('HTTP-Error!');

            let data = await response.json()

            setPosts(data.posts);
            setPage(data.page);
            setTotalPages(data.totalPages);

        }
        catch (eroor) {
            console.log("error in fetching")
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }


    function handlePageChange(page){
        navigate({search: `?page=${page}`})
        setPage(page);
    }

    // 
    const value = {
        posts,
        setPosts,
        loading,
        page,
        setLoading,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}