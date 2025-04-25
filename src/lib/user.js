export const userService = {
  getMe: () =>
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }),
};
