import axios from "axios";
const endPointUrl = "/graphql";

class Api {
  graphqlRequest(query, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        headers: { "content-type": "application/json" },
        url: endPointUrl,
        data: JSON.stringify({
          query,
          variables: { ...data },
        }),
      })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}

export default Api;
