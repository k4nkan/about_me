# Firebase Hosting 自動デプロイ手順

## 0. 事前準備
- Firebase プロジェクトを作成
- Firebase CLI でトークンを発行
- GitHub Secrets に `FIREBASE_TOKEN` を登録

## 1. このリポジトリを clone または fork

   ```bash
   git clone https://github.com/k4nkan/firebase_auth_template.git
   cd template-repo
   ```

## 2. 自分のサイトのコードで `my-website` の中身を置き換え

## 3. `main` ブランチに push

   ```bash
   git add .
   git commit -m "add my site"
   git push origin main
   ```

## 4. push すると Github Actions が自動デプロイ

## 5. Firebase Hosting の URL で公開を確認