import './style.css';

const BlogList = ({blogs,del}) => {
    return ( 
        <div className="Bloglist">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div className="button">
                        <button onClick={()=> del(blog.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
        
     );
}
 
export default BlogList;