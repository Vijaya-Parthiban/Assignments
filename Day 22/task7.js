const user = {
  username: "Vijaya123",
  login() {
    console.log(`${this.username} has logged in.`);
  },

  logout() {
    console.log(`${this.username} has logged out.`);
  }
};
user.login();
user.logout();