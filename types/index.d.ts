import { ApiHolder } from '@backstage/core-plugin-api'
import { Decorator } from '@render-with/decorators'

export function withApp(): Decorator

export function withApis(apis: ApiHolder): Decorator