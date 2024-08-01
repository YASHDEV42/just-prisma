import { PrismaClient } from "@prisma/client";
import { allowedNodeEnvironmentFlags } from "process";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findMany();
  console.log("User created");
  console.log(user);
}
main();
