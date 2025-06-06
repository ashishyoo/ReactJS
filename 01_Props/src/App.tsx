import AdminInfo from "./components/AdminInfo";
import Button from "./components/Button";
import UserInfo from "./components/UserInfo";
import type { UserInfoList, AdminInfoList } from "./types";

const App = () => {
  const user: UserInfoList = { id: 1, name: "User", email: "user@user.com" };
  const admin: AdminInfoList = {
    id: 2,
    name: "Admin",
    email: "user@admin.com",
    isAdmin: true,
    lastLogin: new Date(),
  };

  return (
    <div>
      <Button
        label={"Click me"}
        onClick={() => {
          console.log("Clicked");
        }}
        disabled={false}
      />

      <UserInfo info={user} />
      <AdminInfo info={admin} />
    </div>
  );
};

export default App;
