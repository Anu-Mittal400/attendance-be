import { type BaseSchema } from "../common/dto/base.dto";
import { ProviderType as PrismaProviderType } from "@prisma/client";
export interface IUser extends BaseSchema {
  name: string;
  email: string;
  active: boolean | null;
  role: "Employee" | "ADMIN";
  password?: string | null;
  refreshToken?: string | null;
  blocked?: boolean | null;
  blockReason?: string | null;
  provider: ProviderType;
  facebookId?: string | null;
  image?: string | null;
  linkedinId?: string | null;
}

export const ProviderType = PrismaProviderType;
export type ProviderType = PrismaProviderType;
