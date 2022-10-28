import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.user.create({
    data: {
      email: 'meet@gmail.com',
      password: '$2b$10$VEAWku9L2Hkdt24nRjf7xOLbKo1CNk0qMWaLEZdeMpLjlk7tujWcO',
      name: 'qwerty',
      roles: 'Admin',
    },
  });
  console.log({ result });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

//"password": "qwerty123456"
