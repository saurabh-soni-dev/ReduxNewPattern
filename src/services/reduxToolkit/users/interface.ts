export interface userInitialState {
  data: Array<userData>;
  isLogin: boolean;
}
interface userData {
  name?: string | undefined;
  email?: string | undefined;
  mobile?: string | undefined;
  address?: string | undefined;
  zipcode?: string | undefined;
  password?: string | undefined;
}
