/** @type {import('houdini').ConfigFile} */
const config = {
  apiUrl: 'http://localhost:4000/graphql',
  plugins: {
    'houdini-svelte': {
      client: './src/client',
      globalStorePrefix: 'G_'
    }
  },
  scalars: {
    // the name of the scalar we are configuring
    Date: {
      // the corresponding typescript type
      type: 'Date',
      // turn the api's response into that type
      unmarshal(val) {
        return new Date(val);
      },
      // turn the value into something the API can use
      marshal(date) {
        return date.getTime();
      }
    },
    /* in your case, something like */
    File: {
      // <- The GraphQL Scalar
      type: 'File'
    }
  }
};

export default config;
