import qs from 'qs'
import { Project, PaginatedDocs } from 'types'

import { rest } from '@/api/rest'

export async function getProjects() {
  const collection = 'projects'
  const query = qs.stringify({
    depth: 2,
    limit: 100
  })

  const projectsData = await rest<PaginatedDocs<Project>>(
    collection + '?' + query
  )
  const projects = projectsData?.docs

  return projects
}
