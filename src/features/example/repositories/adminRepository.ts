// src/features/[...feature]/repositories/adminRepository.ts

import { BaseRepository } from "@/shared/repositories/baseRepository"
import { prisma } from "@/shared/lib/db"

export class AdminRepository extends BaseRepository<typeof prisma.admin> {}

export const adminRepository = new AdminRepository()