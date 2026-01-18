import { ModrinthVersion } from './types'

export default function ModrinthVersionComponent() {
  // const data = await fetch(`https://api.modrinth.com/v2/project/L6RCcsrd/version`, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then((res) => res.json())
  //   .catch((e) => console.error(e))
  const data = undefined

  if (data == undefined) {
    return <span className="text-foreground font-semibold">0.0.0</span>
  }

  let versionData: ModrinthVersion[] = data

  return <span>{versionData && versionData[0].version_number}</span>
}
