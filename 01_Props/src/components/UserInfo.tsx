import type { UserInfoList } from "../types";

interface IUserInfo {
  info: UserInfoList;
}

const UserInfo: React.FC<IUserInfo> = ({ info }) => {
  return (
    <div>
      <h1>User Information</h1>
      <p>ID: {info.id}</p>
      <p>Name: {info.name}</p>
      <p>Email: {info.email}</p>
    </div>
  );
};

export default UserInfo;
