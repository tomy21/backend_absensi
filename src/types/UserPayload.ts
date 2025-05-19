export interface UserPayload {
  Id: string;
  UserName: string;
  Password: string;
  Email: string;
  RoleId: number;
  role: {
    Name: string;
    Divisi: string;
  };
}
