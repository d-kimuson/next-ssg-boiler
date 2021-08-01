import { pagesPath } from "~/utils/$path"

describe("Jestの疎通テスト", () => {
  it("テストができる", () => {
    expect(true).toBe(true)
  })

  it("pathsが解決できている", () => {
    expect(pagesPath).toBeDefined()
  })
})
