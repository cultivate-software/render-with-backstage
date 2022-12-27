# Render decorators 🪆 for Backstage

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cultivate-software/render-with-backstage/release.yml?branch=main)
![Code Coverage](docs/coverage-badge.svg)
![npm (scoped)](https://img.shields.io/npm/v/@render-with/backstage)
![NPM](https://img.shields.io/npm/l/@render-with/backstage)
![PRs welcome](https://img.shields.io/badge/PRs-welcome-bright%20green)

Use the `withApis(..)` decorator if your component under test requires a [Backstage](https://backstage.io/docs/overview/what-is-backstage) `ApiProvider`:

Example:

```jsx
import { render, screen, withApis } from './test-utils'

// ...

it('fetches data', () => {
  render(<Plugin />, withApis(apis))
  expect(fetchMock).toHaveBeenCalledWith('http://url')
})
```

_Note: Refer to the [core library](https://github.com/cultivate-software/render-with-decorators) to learn more about how decorators can simplify writing tests for React components with [React Testing Library](https://www.npmjs.com/package/@testing-library/react)._

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Test Scenarios](#test-scenarios)
- [API](#api)
- [Issues](#issues)
- [Contributors](#contributors)
- [LICENSE](#license)

## Installation

This library is distributed via [npm](https://www.npmjs.com/), which is bundled with [node](https://nodejs.org/) and should be installed as one of your project's `devDependencies`.

First, install the [core library](https://github.com/cultivate-software/render-with-decorators) with a render function that supports decorators:

```shell
npm install --save-dev @render-with/decorators
```

Next, install the Backstage decorators provided by this library:

```shell
npm install --save-dev @render-with/backstage
```

or

for installation via [yarn](https://classic.yarnpkg.com/):

```shell
yarn add --dev @render-with/decorators
yarn add --dev @render-with/backstage
```

This library has the following `peerDependencies`:

![npm peer dependency version](https://img.shields.io/npm/dependency-version/@render-with/backstage/peer/@backstage/core-app-api)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@render-with/backstage/peer/@backstage/core-plugin-api)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@render-with/backstage/peer/@backstage/test-utils)

and supports the following `node` versions:

![node-current (scoped)](https://img.shields.io/node/v/@render-with/backstage)

## Setup

In your test-utils file, re-export the render function that supports decorators and the Backstage decorators:

```javascript
// test-utils.js
// ...
export * from '@testing-library/react'  // makes all React Testing Library's exports available
export * from '@render-with/decorators' // overrides React Testing Library's render function
export * from '@render-with/backstage'  // makes decorators like withApis(..) available
```

And finally, use the Backstage decorators in your tests:

```jsx
import { render, screen, withApis } from './test-utils'

// ...

it('fetches data', () => {
  render(<Plugin />, withApis(apis))
  expect(fetchMock).toHaveBeenCalledWith('http://url')
})
```

## Test Scenarios

### Need to provide certain API implementations?

If your component under test requires certain API implementations to function, use the `withApis(..)` decorators:

```jsx
import { render, screen, withApis } from './test-utils'

const fetchMock = jest.fn()

const apis = TestApiRegistry.from(
  [ fetchApiRef, { fetch: fetchMock } ],
)

it('fetches data', () => {
  render(<Plugin />, withApis(apis))
  expect(fetchMock).toHaveBeenCalledWith('http://url')
})
```

## API

_Note: This API reference uses simplified types. You can find the full type specification [here](https://github.com/cultivate-software/render-with-backstage/blob/main/types/index.d.ts)._

```
function withApis(apis: ApiHolder): Decorator
```

Wraps component under test in a Backstage `ApiProvider` using the given list of APIs.

## Issues

Looking to contribute? PRs are welcome. Checkout this project's [Issues](https://github.com/cultivate-software/render-with-backstage/issues?q=is%3Aissue+is%3Aopen) on GitHub for existing issues.

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[See Bugs](https://github.com/cultivate-software/render-with-backstage/issues?q=is%3Aissue+label%3Abug+is%3Aopen+sort%3Acreated-desc)

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding a 👍. This helps maintainers prioritize what to work on.

[See Feature Requests](https://github.com/cultivate-software/render-with-backstage/issues?q=is%3Aissue+label%3Aenhancement+sort%3Areactions-%2B1-desc+is%3Aopen)

### 📚 More Libraries

Please file an issue on the core project to suggest additional libraries that would benefit from decorators. Vote on library support adding a 👍. This helps maintainers prioritize what to work on.

[See Library Requests](https://github.com/cultivate-software/render-with-decorators/issues?q=is%3Aissue+label%3Alibrary+sort%3Areactions-%2B1-desc+is%3Aopen)

### ❓ Questions

For questions related to using the library, file an issue on GitHub.

[See Questions](https://github.com/cultivate-software/render-with-backstage/issues?q=is%3Aissue+label%3Aquestion+sort%3Areactions-%2B1-desc)

## Contributors

<table>
<tbody>
<tr>
  <td align="center">
    <a href="https://cultivate.software">
    <img alt="David Bieder" src="https://avatars.githubusercontent.com/u/9366720?v=4&s=100" />
    <br />
    <sub><b>David Bieder</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://cultivate.software">
    <img alt="cultivate(software)" src="https://avatars.githubusercontent.com/u/31018345?v=4&s=100" />
    <br />
    <sub><b>cultivate(software)</b></sub>
    </a>
  </td>
</tr>
</tbody>
</table>

## LICENSE

[MIT](LICENSE)