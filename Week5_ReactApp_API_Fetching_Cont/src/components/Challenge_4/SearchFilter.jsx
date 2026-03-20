import React, { useState, useEffect } from "react";
import styles from "./SearchFilter.module.css";

function SearchFilter() {
  const [originalPosts, setOriginalPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchedQuery, setSearchedQuery] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();

      setOriginalPosts(data);
    })();
  }, []);

  function search() {
    setFilteredPosts(
      originalPosts.filter((post) => post.title.includes(searchedQuery)),
    );
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setSearchedQuery(e.target.value)}
      />
      <button type="button" onClick={search}>
        Search
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchFilter;
