import { CollectionConfig } from 'payload/types'

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name'
  },
  labels: {
    singular: 'Portfolio Project',
    plural: 'Portfolio Projects'
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'name',
      type: 'text'
    },
    {
      name: 'description',
      type: 'richText'
    },
    {
      name: 'image',
      label: 'image',
      type: 'upload',
      relationTo: 'media'
    }
  ],
  timestamps: false
}

export default Projects
