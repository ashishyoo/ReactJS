import { useState } from "react";

interface IUserProfile {
  name: string;
  age: number;
  email: string;
}

const UserProfile = () => {
  const [user, setUser] = useState<IUserProfile>({
    name: "",
    age: 0,
    email: "",
  });

  const handleName = (name: string) => {
    setUser((prev) => ({ ...prev, name }));
  };
  const handleAge = (age: string) => {
    setUser((prev) => ({ ...prev, age: Number(age) }));
  };
  const handleEmail = (email: string) => {
    setUser((prev) => ({ ...prev, email }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => handleName(e.target.value)}
        value={user.name}
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => handleAge(e.target.value)}
        value={user.age}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => handleEmail(e.target.value)}
        value={user.email}
      />
      <p>Name: {user.name} </p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
