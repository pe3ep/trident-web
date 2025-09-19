export interface ModrinthVersion {
  name: string
  version_number: string
  changelog: string
  dependencies: string
  game_versions: string[]
  version_type: 'release' | 'beta' | 'alpha'
  loaders: string[]
  featured: string
  status: 'listed' | 'archived' | 'draft' | 'unlisted' | 'scheduled' | 'unknown'
  requested_status?: 'listed' | 'archived' | 'draft' | 'unlisted'
  id: string
  proejct_id: string
  author_id: string
  date_published: string
  downloads: number
  changelog_url?: string
  files: ModrinthFile[]
}

export interface ModrinthFile {
  files: {
    sha512: string
    sha1: string
  }
  url: string
  filename: string
  primary: boolean
  file_type?: 'required-resource-pack' | 'optional-resource-pack'
}
