import React from 'react'
import { useState, useEffect } from 'react'
import styles from './GetAPI.module.css'
import axios from 'axios'

function GetAPI() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]);

  // Fetch
  // useEffect(() => {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(fetchedData => setData(fetchedData));
  // }, []);

  // Async-Await
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(url);
  //     const fetchedData = await response.json();

  //     setData(fetchedData);
  //   })();
  // }, []);

  // Axios
  useEffect(() => {
    axios.get(url)
      .then(response => setData(response.data));
  }, []);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GetAPI