import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oeqju721uq01z77y5k59xv/master",
  cache: new InMemoryCache(),
});
