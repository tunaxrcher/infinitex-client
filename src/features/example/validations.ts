// src/features/[...feature]/validations.ts

import { z } from "zod"
import { baseTableSchema } from "@/shared/validations/pagination"

export const featureFiltersSchema = baseTableSchema.object({
  action: z.string().optional(),
})

export type FeatureFiltersSchema = z.infer<typeof featureFiltersSchema>