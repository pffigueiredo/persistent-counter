
import { z } from 'zod';

// Counter schema
export const counterSchema = z.object({
  id: z.number(),
  name: z.string(),
  value: z.number().int(),
  updated_at: z.coerce.date()
});

export type Counter = z.infer<typeof counterSchema>;

// Input schema for incrementing counter
export const incrementCounterInputSchema = z.object({
  name: z.string().default('default'), // Allow specifying counter name, default to 'default'
  increment: z.number().int().positive().default(1) // How much to increment by, default 1
});

export type IncrementCounterInput = z.infer<typeof incrementCounterInputSchema>;

// Input schema for getting counter by name
export const getCounterInputSchema = z.object({
  name: z.string().default('default')
});

export type GetCounterInput = z.infer<typeof getCounterInputSchema>;
