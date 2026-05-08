// Expose Nitro/H3 auto-imports as globals (like in the Nuxt runtime)
import { defineEventHandler, createError, readBody } from 'h3'

Object.assign(globalThis, { defineEventHandler, createError, readBody })
