import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

export async function POST(request: Request) {
  let user = request.headers.get('x-mc-uuid')
  if (!user) {
    return Response.json({ success: false, error: 'x-mc-uuid is empty' }, { status: 400 })
  }

  const getUUId = await fetch(`https://api.minecraftservices.com/minecraft/profile/lookup/${user}`, {
    cache: 'force-cache',
  })
    .then((res) => res.json())
    .catch((e) => console.log(e))

  let uuid: string | null = getUUId?.id || null
  if (uuid == null) {
    return Response.json({ success: false, error: 'Invalid UUID in x-mc-uuid' }, { status: 400 })
  }

  const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.fixedWindow(3, '5s'),
  })

  const { success } = await ratelimit.limit(uuid)
  if (!success) {
    return Response.json({ success: false, error: 'Rate limited. Try again later' }, { status: 403 })
  }

  // MCCI API - Headers
  const headers: HeadersInit = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.set('User-Agent', `trident-web/${uuid}`)
  headers.set('X-API-Key', process.env.NOX_TOKEN!!)

  const body = await request.json()

  let mcci = await fetch('https://api.mccisland.net/graphql', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((e) => {
      console.log(e)
    })

  if (!mcci) {
    return Response.json({ success: false, error: "Error occured when querying MCCI's API" }, { status: 500 })
  }
  mcci.success = true
  return Response.json(mcci)
}
