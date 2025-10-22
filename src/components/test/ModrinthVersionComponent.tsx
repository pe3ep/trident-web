'use server'
import React from 'react'
import { ModrinthVersion } from './types'

export default async function ModrinthVersionComponent() {
  const data = await fetch(`https://api.modrinth.com/v2/project/L6RCcsrd/version`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())

  let versionData: ModrinthVersion[] = data

  return <div>{versionData && versionData[0].version_number}</div>
}
