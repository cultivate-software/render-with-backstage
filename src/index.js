import { ApiProvider } from '@backstage/core-app-api'

export const withApis = apis => ui => <ApiProvider apis={apis}>{ui}</ApiProvider>
