# 🛠 EigenLayer Restaking Info API

This project is a backend REST API that fetches and displays EigenLayer restaking data — including restakers, validators, and rewards. It uses a mix of real-time subgraph data and mock data for demonstration.

##  Features

| Endpoint                     | Description                                |
|------------------------------|--------------------------------------------|
| `GET /restakers`             | List of real restakers from EigenLayer     |
| `GET /validators`            | Mocked list of validators with metadata    |
| `GET /rewards/:address`      | Mocked reward breakdown for a user wallet  |

---

##  Tech Stack

- **Node.js** + **Express** – REST API
- **SQLite** – Lightweight DB for local storage
- **GraphQL** – Data fetched via The Graph (EigenLayer subgraph)
- **dotenv** – Secure environment variable handling
- **Postman** – API testing

---

## 🗂 Project Structure

.
├── controllers/ # Business logic for routes
├── models/ # SQLite schema and DB queries
├── routes/ # API route definitions
├── scripts/ # Sync data from subgraph to SQLite
├── services/ # External data fetch logic (e.g., GraphQL)
├── .env # API keys and DB name
├── server.js # Main entry point
├── package.json # Dependencies

---

##  API Preview

### ➤ `/restakers`

**GET** `/restakers`  
Returns restakers who have deposited into EigenLayer.

```json
[
  {
    "id": 1,
    "address": "0xabc123...",
    "amount": "100",
    "validator": "0xval456..."
  },
  ...
]
### ➤ `/validators`
GET /validators
Returns mocked metadata for validators.

json
Copy
Edit
[
  {
    "id": 1,
    "operator_id": "op_001",
    "address": "0xval456...",
    "total_stake": "15000",
    "status": "active",
    "slash_history": []
  }
]
### ➤ /rewards/:address
GET /rewards/0xabc123
Returns mock reward breakdown for a specific wallet.

json
Copy
Edit
{
  "user": "0xabc123",
  "total_rewards": "3.75 ETH",
  "breakdown": [
    { "validator": "0xValidator1", "amount": "2.0" },
    { "validator": "0xValidator2", "amount": "1.75" }
  ],
  "timestamps": ["2024-11-01T00:00:00Z", "2025-01-15T00:00:00Z"]
}
#### Setup Instructions ####
1.  Clone the repository
git clone https://github.com/YOUR_USERNAME/EigenLayer-Restaking-API.git
cd EigenLayer-Restaking-API
2. Install dependencies
npm install
3. Create .env file
## Create a .env file in the root directory:
GRAPH_API_KEY=your_actual_api_key_here
DB_NAME=restake.db
 You can get a free GRAPH_API_KEY from https://thegraph.com/studio

4. 🔧 Initialize the database
This creates the necessary SQLite tables.

bash
Copy
Edit
node models/init.js
5.  Sync real restaker data from subgraph
This fetches and stores actual EigenLayer restakers:

node scripts/sync.js
6. Start the server
npm start
Server will be running at:
http://localhost:3000

### Testing in Postman ###
You can use Postman or cURL to test:

GET http://localhost:3000/restakers

GET http://localhost:3000/validators

GET http://localhost:3000/rewards/0xabc123

