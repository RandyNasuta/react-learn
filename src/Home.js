import { useState } from "react";

const Home = () => {
  //useState Hook
  //   const [name, setName] = useState("mario");
  //   const [age, setAge] = useState(20);
  //   const handleClick = () => {
  //     if (name === "mario") {
  //       setName("luigi");
  //       setAge(31);
  //     } else {
  //       setName("mario");
  //       setAge(20);
  //     }
  //   };

  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "luigi", id: 3 },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview">
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
