import { PrismaClient } from "@prisma/client";


const globalForPrisma = globalThis as unknown as {
    prisma : PrismaClient | undefined
}

//if theres a prisma if not then make it,and assign it to the variable of prisma
export const prisma =
    globalForPrisma.prisma ?? 
        new PrismaClient({
            log :['query'],
        })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma