# 提督室 (admiral-office)

Claude のデスクトップ版・モバイル版アプリ向けのカスタムテーマ mod です。
紺と金を基調にした海軍の執務室をイメージしています。

- **ダークモード**: 紺の海と真鍮の金。月と星、水平線を進む艦影。
- **ライトモード**: 海図の紙と紺のインク。霞んだ昼の海。
- **背景アニメーション**: 海図の方眼、ゆっくり回る羅針盤（4分で1周）、三層の波、横切る艦隊（3分で1往路）。
  OS の「視差効果を減らす」設定がオンなら動きを止めます。

図形はすべてオリジナルで、既存ゲームの画像・ロゴ・キャラクターは使っていません。

## インストール

ターミナルの Claude Code セッションで:

```
/plugin install admiral-office --marketplace kazu-storm01/admiral-office-theme
```

`Add marketplace?` には `y`、スコープは user を選んでください。

シェルから:

```bash
claude plugin install admiral-office --marketplace kazu-storm01/admiral-office-theme
```

デスクトップアプリ（`/plugin` が使えない場所）では、入力欄の横の + → Plugins → Add marketplace に
`kazu-storm01/admiral-office-theme` を入れ、Add plugin を押します。

非公開リポジトリの場合、GitHub で読み取り権限があり、そのマシンに github.com の認証情報
（SSH キー、または `gh auth login` のあと `gh auth setup-git`）が必要です。

## 表示される場所

テーマの色と背景が描かれるのは Claude のデスクトップ版とモバイル版アプリです。ターミナルや
エディタ拡張では描かれません。

## ファイル構成

| ファイル | 内容 |
| --- | --- |
| `hooks/register.tsx` | 配色の定義と、セッション開始時にテーマを適用する処理 |
| `hooks/scene.js` | 背景の SVG シーン（昼と夜の両方） |
| `hooks/make-colors.js` | 数色から全体の配色を作るヘルパー（Claude Code 同梱のものをそのまま複製。編集しない） |

## カスタマイズ

- 色: `hooks/register.tsx` の `anchors`（背景と文字）と `roles`（アクセント、エラー、成功などの色）
- 背景: `hooks/scene.js` の SVG。速さは `@keyframes` を使っている `animation` の秒数で変えられます

## ライセンス

MIT（`LICENSE` を参照）。`hooks/make-colors.js` と `hooks/make-colors.d.ts` は Claude Code が
mod 作成用に提供しているファイルです。
