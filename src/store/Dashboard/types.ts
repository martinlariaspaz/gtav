export type Database = {
  email: string;
  dbUsername: string;
  dbName: string;
  dbHost: string;
  dbPassword: string;
};

export type User = {
  fullName: string;
  email: string;
  birthDate: string;
  dni: string;
  username: string;
};

export type DashboardState = {
  user: User;
  database: Database[];
  loading: boolean;
};
