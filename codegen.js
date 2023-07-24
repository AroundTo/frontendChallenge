module.exports = {
  schema: 'https://blue-surf-1040009.us-east-1.aws.cloud.dgraph.io/graphql',
  documents: 'src/**/!(*.d).{ts,tsx}',
  generates: {
    './src/graphql/graphql-types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
    './src/graphql/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
