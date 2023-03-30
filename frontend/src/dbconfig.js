export const user = process.env.NODE_ORACLEDB_USER || 'ezenbooks';
export const password = process.env.NODE_ORACLEDB_PASSWORD || 'a1234';
export const connectString =
  process.env.NODE_ORACLEDB_CONNECTIONSTRING || 'localhost:1521/xe';
export const externalAuth = process.env.NODE_ORACLEDB_EXTERNALAUTH
  ? true
  : false;
