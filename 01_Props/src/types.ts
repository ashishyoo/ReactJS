type UserInfoList = {
  id: number;
  name: string;
  email: string;
};

type AdminInfoList = UserInfoList & {
  isAdmin: boolean;
  lastLogin: Date;
};

export { type UserInfoList, type AdminInfoList };
