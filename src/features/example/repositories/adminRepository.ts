// src/features/[...feature]/repositories/adminRepository.ts

import { BaseRepository } from "@src/shared/repositories/baseRepository"
import { prisma } from "@src/shared/lib/db"

export class AdminRepository extends BaseRepository<typeof prisma.admin> {}

export const adminRepository = new AdminRepository()
