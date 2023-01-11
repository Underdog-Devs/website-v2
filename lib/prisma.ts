import { PrismaClient } from '@prisma/client';

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var, no-unused-vars, vars-on-top
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma
  || new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === 'production') {
// 	prisma = new PrismaClient();
// } else {
// 	/* global globalThis */
// 	// eslint-disable-next-line no-undef
// 	const globalWithPrisma = global as typeof globalThis & {
//     prisma: PrismaClient;
//   };
// 	if (!globalWithPrisma.prisma) {
// 		globalWithPrisma.prisma = new PrismaClient();
// 	}
// 	prisma = globalWithPrisma.prisma;
// }

export default prisma;
