import React, { useEffect, useState } from 'react';
import './App.css';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from './firebase-config'

//Primer parte (Conectar db y levantar data) (read)
function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    getUsers()
  }, [usersCollectionRef]);

  //2da Parte (create)
  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState(0)
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) })
  }

  //3ra parte (update)
  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id);
    const newField = { age: age + 1 };
    await updateDoc(userDoc, newField);
  }

  //4ta parte (delete)

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc)

  }



  return (
    <div className="App">
      <div className="App-box">
        <div className="App-data">
          <input type="text" placeholder='Name...'
            onChange={(event) => { setNewName(event.target.value) }} />
          <input type="number" placeholder='Age...'
            onChange={(event) => { setNewAge(event.target.value) }} />
          <button onClick={createUser}>Create User</button>
          {users.map((user) => {
            return (
              <div className='data-view'>
                <h1> Name: {user.name}</h1>
                <h1>Age:{user.age}</h1>
                <button onClick={() => { updateUser(user.id, user.age) }}> Increase Age +1</button>
                <button onClick={() => { deleteUser(user.id) }}>Delete User</button>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
