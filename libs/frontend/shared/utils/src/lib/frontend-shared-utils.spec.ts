import { flatArray } from './frontend-shared-utils'

describe('frontendSharedUtils', () => {
  it('should work', () => {
    expect(flatArray([], 'pages')).toEqual([])
  })
})
