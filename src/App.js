
import { useEffect, useState } from 'react';
import './App.css';

const URL = "https://rest-api-without-db.herokuapp.com/users";
console.log(URL);
const  App = () => {

  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const getAllUsers = () =>{
    fetch(URL)
    .then((res)=>{
      if(!res.ok){
        throw Error("could not found");
      }
      return res.json;
    })
    .then((data)=>{
      setUsers(data.users);
      
    })
    .catch((err)=>{
      setError(err.message);
    })
    .finally(()=>{
      setIsLoading(false);
    })
  }
  useEffect(()=>{
    getAllUsers();
  }, [])

  const handleDelete = (id) =>{
    fetch(URL + `/${id}`, {
      method : `DELETE`
    })
    .then((res)=>{
      if(!res.ok){
        throw Error("could not delete");
      }
      getAllUsers();
    })
    .catch((err)=>{
      setError(err.message);
    })

  }
  return (
    <div className="App">
      <h1>User Management App</h1>
      {isLoading && <h2>is Loading...</h2>}
      {error && <h2>{error}</h2>}
      <section>
      {users && users.map((user)=>{
          const {id, username, email} = user;
          return (
            <article key={id}>
              <p>{username}</p>
              <p>{email}</p>
              <button>Edit</button>
              <button onClick={()=>{handleDelete(id)}}>Delete</button>
            </article>
          );
      })}
      </section>
    </div>
  );
}

export default App;
