import React from "react";
import { useState, useEffect } from "react";
import styles from "./GetID.module.css";
import axios from "axios";

function GetID() {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputID, setInputID] = useState(null);

  function searchUserByID() {
    const url = `https://jsonplaceholder.typicode.com/users/${inputID}`;
    setLoading(true);
    setError(null);

    // Fetch
    // fetch(url)
    //   .then((response) => {
    //     if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    //     return response.json();
    //   })
    //   .then((fetchedData) => {
    //     setUser(fetchedData);
    //     setLoading(false);
    //   })
    //   .catch((fetchedError) => {
    //     setError(fetchedError.message);
    //     setLoading(false);
    //   });

    // Async-Await
    // (async () => {
    //   try {
    //     const response = await fetch(url);
    //     if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    //     const fetchedData = await response.json();

    //     setUser(fetchedData);
    //     setLoading(false);
    //   } catch (fetchedError) {
    //     setError(fetchedError.message);
    //     setLoading(false);
    //   }
    // })();

    // Axios
    axios
      .get(url)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((fetchedError) => {
        setError(fetchedError.message);
        setLoading(false);
      });
  }

  return (
    <div className={styles.container}>
      <input
        type="number"
        name=""
        id=""
        onChange={(event) => parseInt(setInputID(event.target.value))}
      />
      <button type="button" onClick={searchUserByID}>
        Search
      </button>
      {isLoading ? (
        <p>Loading</p>
      ) : error != null ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default GetID;
