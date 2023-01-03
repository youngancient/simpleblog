import './Home.css';
import { useState } from 'react';
const Home = ()=>{
    const [blogs,setBlogs] = useState([
        {title:'My new website', body: 'A town hall different from Balablu blublu bulaba', author:'mario', id:1},
        {title:'My review of 2022', body: 'A town hall different from Balablu blublu bulaba', author:'Hanif', id:2},
        {title:'2023 ahead ahead', body: 'A town hall different from Balablu blublu bulaba', author:'Ghene', id:3},
        {title:'Finding You', body: 'A town hall different from Balablu blublu bulaba', author:'Jude', id:4},
    ])
    return(
        <div className="home">
            {
                blogs.map((blog)=>{
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                })
            }
        </div>
    );
}

export default Home;
