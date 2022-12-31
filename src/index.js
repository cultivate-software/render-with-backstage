import { ApiProvider } from '@backstage/core-app-api'
import { createVersionedContext, createVersionedValueMap } from '@backstage/version-bridge'

class TestAppContextImpl {
  getPlugins() { return [] }
  getSystemIcon() { return undefined }
  getSystemIcons() { return {} }
  getComponents() { return {} }
}

export const withApp = () => ui => {
  const Context = createVersionedContext('app-context')
  const versionedValue = createVersionedValueMap({ 1: new TestAppContextImpl() })
  return <Context.Provider value={versionedValue}>{ui}</Context.Provider>
}

export const withApis = apis => ui => <ApiProvider apis={apis}>{ui}</ApiProvider>
