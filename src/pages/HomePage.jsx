import { useEffect, useState } from "react";
import User from "../components/User";

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("users"); // get data from local storage
    const usersData = JSON.parse(data) || []; // parse the data from string to javascript array
    console.log(usersData);

    setUsers(usersData); // set the users state with the data from local storage
  }, []);

  // async function fetchUsers() {
  //   const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/master/data/users.json");
  //   const data = await response.json();
  //   setUsers(data);
  // }

  return (
    <div className="page">
      <section className="grid">
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </section>
    </div>
  );
}
