// services/fetchRestakers.js
const { request, gql } = require("graphql-request");
require("dotenv").config();

const API_KEY = process.env.GRAPH_API_KEY;
const endpoint = `https://gateway.thegraph.com/api/${API_KEY}/subgraphs/id/FWJpzndRE772QJB8i4tzBnynvxswW4LHsrgrSZXc2LK2`;

// GraphQL query: fetching top 25 deposits for demonstration
const query = gql`
  {
    deposits(first: 25) {
      id
      depositor
      token
      shares
    }
  }
`;

async function fetchRestakers() {
  try {
    const data = await request(endpoint, query);

    if (!data || !data.deposits || data.deposits.length === 0) {
      console.log("⚠️ No deposits returned from subgraph.");
      return [];
    }

    console.log(`📦 Fetched ${data.deposits.length} restakers from subgraph.`);

    const restakers = data.deposits.map((d) => ({
      address: d.depositor,
      amount: d.shares,
      validator: "0xmockValidator" // Placeholder for now
    }));

    return restakers;
  } catch (err) {
    console.error("❌ Subgraph fetch failed:", err.message);
    return [];
  }
}

module.exports = { fetchRestakers };
