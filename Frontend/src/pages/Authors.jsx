import { useState } from "react";
import { Link } from "react-router-dom";

import Avatar1 from "../../mern-blog/avatar1.jpg";
import Avatar2 from "../../mern-blog/avatar2.jpg";
import Avatar3 from "../../mern-blog/avatar3.jpg";
import Avatar4 from "../../mern-blog/avatar4.jpg";
import Avatar5 from "../../mern-blog/avatar5.jpg";

const Authors_Data = [
  { id: 1, avatar: Avatar1, name: "John", posts: 6 },
  { id: 2, avatar: Avatar2, name: "Jane Doe", posts: 7 },
  { id: 3, avatar: Avatar3, name: "Haji", posts: 9 },
  { id: 4, avatar: Avatar4, name: "Saim", posts: 1 },
  { id: 5, avatar: Avatar5, name: "Bintu", posts: 4 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(Authors_Data);
  console.log(Authors_Data);
  return (
    <>
      <section className="authors">
        {authors.length > 0 ? (
          <div className="container authors_container">
            {authors.map(({ id, avatar, name, posts }) => {
              return (
                <Link key={id} to={`/posts/users/${id}`} className="author">
                  <div className="author_avatar">
                    <img src={avatar} alt={`Image of ${name}`} />
                  </div>
                  <div className="author_info">
                    <h4>{name}</h4>
                    <p>{posts}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <h2 className="center">No Authors Found.</h2>
        )}
      </section>
    </>
  );
};

export default Authors;
