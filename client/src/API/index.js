import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "network-only",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "network-only",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  link: new HttpLink({ uri: "/graphql" }),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

class Api {
  queryRequest(query, data) {
    return new Promise((resolve, reject) => {
      client
        .query({
          query: gql`
            ${query}
          `,
          variables: { ...data },
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  mutationRequest(mutation, data) {
    return new Promise((resolve, reject) => {
      client
        .mutate({
          mutation: gql`
            ${mutation}
          `,
          variables: { ...data },
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}

export default Api;
