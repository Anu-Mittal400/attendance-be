import { Prisma, PrismaClient, User } from "@prisma/client";
import { IUser } from "./user.dto";
import { prisma } from "../common/services/database.service";

/**
 * Create a new user
 */
export const createUser = async (data: any) => {
  const result = await prisma.user.create({
    data,
    select: {
      password: false,
      refreshToken: false,
      facebookId: false,
      id: true,
      name: true,
      email: true,
      active: true,
      role: true,
      blocked: true,
      blockReason: true,
      provider: true,
      linkedinId: true,
      image: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

/**
 * Update a user fully
 */
export const updateUser = async (id: string, data: IUser) => {
  const result = await prisma.user.update({
    where: { id },
    data,
    select: {
      password: false,
      refreshToken: false,
      facebookId: false,
      id: true,
      name: true,
      email: true,
      active: true,
      role: true,
      blocked: true,
      blockReason: true,
      provider: true,
      linkedinId: true,
      image: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

/**
 * Edit a user partially
 */
export const editUser = async (id: string, data: Partial<IUser>) => {
  const result = await prisma.user.update({
    where: { id },
    data,
    select: {
      password: false,
      refreshToken: false,
      facebookId: false,
      id: true,
      name: true,
      email: true,
      active: true,
      role: true,
      blocked: true,
      blockReason: true,
      provider: true,
      linkedinId: true,
      image: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

/**
 * Delete a user
 */
export const deleteUser = async (id: string) => {
  const result = await prisma.user.delete({
    where: { id },
    select: {
      password: false,
      refreshToken: false,
      facebookId: false,
      id: true,
      name: true,
      email: true,
      active: true,
      role: true,
      blocked: true,
      blockReason: true,
      provider: true,
      linkedinId: true,
      image: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

/**
 * Get user by ID
 */
export const getUserById = async (
  id: string,
  projection?: Prisma.UserSelect
) => {
  const result = await prisma.user.findUnique({
    where: { id },
    select: projection ?? {
      password: false,
      refreshToken: false,
      facebookId: false,
      id: true,
      name: true,
      email: true,
      active: true,
      role: true,
      blocked: true,
      blockReason: true,
      provider: true,
      linkedinId: true,
      image: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return result;
};

/**
 * Get all users
 */
export const getAllUser = async (
  projection?: Prisma.UserSelect,
  options?: {
    skip?: number;
    take?: number;
    orderBy?: Prisma.UserOrderByWithRelationInput;
    where?: Prisma.UserWhereInput;
  }
) => {
  const result = await prisma.user.findMany({
    select: projection ?? {
      password: false,
      refreshToken: false,
      facebookId: false,
      id: true,
      name: true,
      email: true,
      active: true,
      role: true,
      blocked: true,
      blockReason: true,
      provider: true,
      linkedinId: true,
      image: true,
      createdAt: true,
      updatedAt: true,
    },
    skip: options?.skip,
    take: options?.take,
    orderBy: options?.orderBy,
    where: options?.where,
  });

  return result;
};

/**
 * Get user by email
 */
export const getUserByEmail = async (
  email: string,
  projection?: Prisma.UserSelect
) => {
  const result = await prisma.user.findUnique({
    where: { email },
    select: projection ?? {
      password: false,
      refreshToken: false,
      facebookId: false,
      id: true,
      name: true,
      email: true,
      active: true,
      role: true,
      blocked: true,
      blockReason: true,
      provider: true,
      linkedinId: true,
      image: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

/**
 * Count total users
 */
export const countItems = async () => {
  return prisma.user.count();
};
