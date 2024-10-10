import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getApartments() {
  return prisma.apartment.findMany({
    include: { owner: true },
  });
}

export async function createApartment(data: Omit<Apartment, 'id' | 'createdAt' | 'updatedAt'>) {
  return prisma.apartment.create({
    data,
    include: { owner: true },
  });
}

export async function createUser(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
  return prisma.user.create({
    data,
  });
}

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}