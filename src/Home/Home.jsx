import './Home.css';
import { useState } from 'react';
import BlogList from '../Bloglist/Bloglist';
import Empty from '../Empty/Empty';

const Home = ()=>{
    const [blogs,setBlogs] = useState([
        {title:'My new website', body: 'A town hall different from Balablu blublu bulaba', author:'mario', id:1},
        {title:'My review of 2022', body: 'A town hall different from Balablu blublu bulaba', author:'Hanif', id:2},
        {title:'2023 ahead ahead', body: 'A town hall different from Balablu blublu bulaba', author:'Ghene', id:3},
        {title:'Finding You', body: 'A town hall different from Balablu blublu bulaba', author:'Jude', id:4},
        {title:'The Science of Innovations', body: 'A town hall different from Balablu blublu bulaba', author:'Jude', id:5},
    ])
    const deleteHandler = (id)=>{
        const newBlog = blogs.filter((blog)=>(blog.id != id))
        setBlogs(newBlog);
    }
    const blogNumber = blogs.length;
    return(
        <div className="home">
            <h1>All Blogs<strong style={blogNumber > 2 ? {color: 'blue'}:{color: 'rgb(209, 41, 41)'}}>({blogNumber})</strong></h1>
            {blogs.length == 0 ?<Empty/> :<BlogList blogs={blogs} del={deleteHandler} />}
        </div>
    );
}

export default Home;
