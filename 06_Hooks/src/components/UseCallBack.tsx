import { useCallback, useState } from "react";
import { shuffle } from "../utils/shuffle";
import Search from "./Search";

const allUsers: string[] = [
  "Aryan",
  "Bishal",
  "Shikshya",
  "Prashant",
  "Prashamsa",
];

const UseCallBack = () => {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text: string) => {
    if (text.trim() === "") {
      setUsers(allUsers);
    } else {
      const filteredUsers = allUsers.filter((user) =>
        user.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredUsers);
    }
  }, []);

  const handleShuffle = () => {
    setUsers(shuffle(allUsers));
  };

  return (
    <div>
      <h1>useCallBack</h1>
      <button onClick={handleShuffle}>Shuffle</button>
      <Search onChange={handleSearch} />
      {users.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </div>
  );
};

export default UseCallBack;
