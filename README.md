# firebase auth template

## how to use this template
### 1. Firebase プロジェクトを用意

* [Firebase コンソール](https://console.firebase.google.com/)でプロジェクト作成
* 「Hosting」を有効化

---

### 2. リポジトリに配置するファイル

* `public/index.html`（＋CSS, JS）のように、公開したいサイトのプログラムのファイルを `public` に配置
* ルートには `firebase.json` を置く

```json
{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}
```

---

### 3. Firebase CLI トークンを発行

ローカルで一度だけ実行：

```bash
npm install -g firebase-tools
firebase login:ci
```

👉 コマンドの実行後、長いトークンが出るのでコピー

---

### 4. GitHub Secrets に登録

リポジトリ → **Settings → Secrets and variables → Actions**

* Name: `FIREBASE_TOKEN`
* Value: 先ほどコピーしたトークンを貼り付け

---

### 5. GitHub Actions を作成

`.github/workflows/deploy.yml` を作成👇

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main  # mainブランチにpushしたらデプロイ

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Install Firebase CLI
        run: npm install -g firebase-tools

      - name: Deploy to Firebase
        run: firebase deploy --only hosting --token ${{ secrets.FIREBASE_TOKEN }}
```

---

### 6. 動作確認

1. `main` に push
2. GitHub Actions が動いて自動デプロイ
3. `https://<project-id>.web.app` に反映される

---
