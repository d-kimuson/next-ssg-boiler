# Next SSG Boiler

[Next.js](https://nextjs.org/) ベースのSSGアプリケーションまたはサイト構築用のボイラープレートです

## 新しいプロジェクトを始める

[Node.js](https://nodejs.org/en/) と [yarn](https://yarnpkg.com/) が必要です

``` bash
$ git clone git@github.com:d-kimuson/ts-sass-postcss-boiler.git myapp && cd myapp
$ git remote remove origin
$ yarn install
```

`package.json` から `name` 属性を書き換えます

``` bash
$ yarn dev
```

で開発サーバーが起動します

## Linter

このリポジトリでは

- [ESLint](https://eslint.org/)
- [stylelint](https://stylelint.io/)
- [prettier](https://prettier.io/)

を導入していて、以下のスクリプトで実行できます

``` bash
$ yarn lint  # コードチェック
$ yarn fix   # 自動修正
```

## ルーティング

ルーティングを静的に検査できる [aspida/pathpida](https://github.com/aspida/pathpida) を導入しています

`src/utils/$path.ts` が自動生成され、`pagesPath` にルーティング型が定義されるので、以下のようにして型安全にリンクを貼ることができます

``` tsx:sample.tsx
import Link from "next/link"
import { pagesPath } from "@path"

<Link href={pagesPath.$url()}>click me</Link>
```

## テスト

テストツールとして、[Jest](https://jestjs.io/) を導入しています

``` bash
$ yarn test
```

で実行することができます

## デプロイする

``` bash
$ yarn build
```

で配信可能なビルドファイルが `out` 下に生成されます

``` bash
$ yarn start
```

で、http://localhost からビルドファイルが配信されるので、簡易的にローカルで本番環境を再現できます
