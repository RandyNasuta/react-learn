import { useEffect, useState } from "react";
import BlogList from "./BlogList";

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
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);

  const [name, setName] = useState("Mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id != id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect Ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />
      <button onClick={() => setName("Luigi")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
