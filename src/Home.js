import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Vivian', id: 3 },
        { title: 'The God\'s are not to blame ', body: 'lorem ipsum...', author: 'Ola Rotimi', id: 4 }
      ]);
   
    return ( 
        <div className="home">
       {blogs.map((blog) => (
        <div className="blog-preview" key = {blog.id}>
            <h2>{ blog.title}</h2>
            <p>Wriiten by { blog.author }</p>
        </div>
       ))}
        </div>
     );
}
 
export default Home;