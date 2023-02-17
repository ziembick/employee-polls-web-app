export const LOGIN_USER = "LOGIN_USER";

export function loginUser(userId) {
  return {
    type: LOGIN_USER,
    userId,
  };
}
