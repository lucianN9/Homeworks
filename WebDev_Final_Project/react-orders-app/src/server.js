// This is the main communication with the server

const server = {
  // Fetch function for the Main Course

  async getMainCourse() {
    const response = await fetch("http://localhost:3000/mainCourse");
    const data = response.ok ? await response.json() : [];

    return data;
  },

  // Fetch function for the Dessert

  async getDessert() {
    const response = await fetch("http://localhost:3000/dessert");
    const data = response.ok ? await response.json() : [];

    return data;
  },

  // Fetch function for the Drinks

  async getDrinks() {
    const response = await fetch("http://localhost:3000/drinks");
    const data = response.ok ? await response.json() : [];

    return data;
  },
};

export default server;
