import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  // TODO: use dynamic value to set schema URL
  schema: 'https://blue-surf-1040009.us-east-1.aws.cloud.dgraph.io/graphql',
  documents: ['src/graphql/queries.ts'],
  overwrite: true,
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
