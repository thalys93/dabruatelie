import axios from "axios";

function api () {

  const api = new axios.create({
  baseURL: "http://localhost:1337/api/dabru-users",
});

}

export default api 