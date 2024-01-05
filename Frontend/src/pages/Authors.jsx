import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(Authors_Data);

  useEffect(() => {
    const getAuthors = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:4000/api/users`);
        setAuthors(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getAuthors();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <section className="authors">
        {authors.length > 0 ? (
          <div className="container authors_container">
            {authors.map(({ _id: id, avatar, name, posts }) => {
              return (
                <Link key={id} to={`/posts/users/${id}`} className="author">
                  <div className="author_avatar">
                    <img
                      src={`http://localhost:4000/uploads/${avatar}`}
                      alt={`Image of ${name}`}
                    />
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
