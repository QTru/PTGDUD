import React from "react";
import { useState, useEffect } from "react";
import styles from "./Loading_Error.module.css";
import axios from "axios";

function LoadingError() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

  //       return response.json();
  //     })
  //     .then((fetchedData) => {
  //       setData(fetchedData);
  //       setLoading(false);
  //     })
  //     .catch((fetchedError) => {
  //       setError(fetchedError.message);
  //       setLoading(false);
  //     });
  // }, []);

  // Async-Await
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  //       const fetchedData = await response.json();

  //       setData(fetchedData);
  //       setLoading(false);
  //     } catch (fetchedError) {
  //       setError(fetchedError.message);
  //       setLoading(false);
  //     }
  //   })();
  // }, []);

  // Axios
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((fetchedError) => {
        setError(fetchedError.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Loading</p>
      ) : error != null ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LoadingError;
