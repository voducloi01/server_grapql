import { Products } from './Entities/Product';
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";


const main = async () => {
  await createConnection({
    host    : 'localhost',
    type: "mysql",
    database: "userapp",
    username: "root",
    password: "",
    logging: true,
    synchronize: false,
    entities: [Users, Products],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
