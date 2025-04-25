export const authService = {
  login: (email, password) =>
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signIn`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }),
  register: (email, nickname, password, passwordConfirmation) =>
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signUp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, nickname, password, passwordConfirmation }),
    }),
  refresh: (refreshToken) =>
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    }),
};
