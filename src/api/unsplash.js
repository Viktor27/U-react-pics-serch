import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 23af5b99501be1911b6424e0f8987943566184261d1d0483237f8b5e4294052d"
  }
});
