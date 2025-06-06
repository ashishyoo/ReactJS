import type { AdminInfoList } from "../types";

interface IAdminInfo {
  info: AdminInfoList;
}

const AdminInfo: React.FC<IAdminInfo> = ({ info }) => {
  return (
    <div>
      <h1>Admin Information</h1>
      <p>ID: {info.id}</p>
      <p>Name: {info.name}</p>
      <p>Email: {info.email}</p>
      <p>Admin: {String(info.isAdmin)}</p>
      <p>LastLogin: {info.lastLogin.toLocaleString()}</p>
    </div>
  );
};

export default AdminInfo;
