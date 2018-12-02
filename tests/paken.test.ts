import paken from '../src'

describe('paken', () => {
  it('load environment variable from package.json', async () => {
    const pkg = await paken.load()
    expect(pkg).toHaveProperty('pkg')
  })
})
