import { getSupabaseService } from '../libs/supabase/service.adapter'

export default defineEventHandler(async (event) => {
  // Protected — requires a valid session cookie (validated by server/middleware/session.ts)
  if (!event.context.user) {
    throw createError({ statusCode: 401, message: 'Authentification requise.' })
  }

  const supabase = getSupabaseService(event)

  // Fetch last 100 visits
  const { data: logs, error } = await supabase
    .from('visitor_logs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100)

  if (error) {
    throw createError({ statusCode: 500, message: error.message })
  }

  // Compute aggregate stats from the full table
  const { count: total } = await supabase
    .from('visitor_logs')
    .select('*', { count: 'exact', head: true })

  const { data: countries } = await supabase
    .from('visitor_logs')
    .select('country')

  const { data: paths } = await supabase
    .from('visitor_logs')
    .select('path')

  const uniqueCountries = new Set(
    (countries ?? []).map((r) => r.country).filter(Boolean),
  ).size

  const uniquePaths = new Set((paths ?? []).map((r) => r.path)).size

  return {
    stats: {
      total: total ?? 0,
      uniqueCountries,
      uniquePaths,
    },
    logs: logs ?? [],
  }
})
