const { Client } = require("pg");

const client = new Client(process.env.DATABASE_URL);

module.exports = async () => {
  await client.connect();
  // try {
  //   const results = await client.query("SELECT NOW()");
  //   console.log(results);
  // } catch (err) {
  //   console.error("error executing query:", err);
  // } finally {
  //   client.end();
  // }
  return client
}

// export DATABASE_URL="postgresql://DakkaPik86:wSm_56_iCHlFC9pthGAz_A@speedy-cuscus-9754.7tt.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"