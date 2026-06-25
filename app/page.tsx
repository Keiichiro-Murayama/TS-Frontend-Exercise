import WelcomeMessage from "@/components/chapter03/ex3-1/WelcomeMessage";
/**
 * トップページ
 */
export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">トップページ</h1>

      <WelcomeMessage />

      {/* ルーティング確認用の案内 */}
      <div className="mt-8 p-4 bg-blue-50 rounded">
        <h2 className="text-lg font-bold mb-2">作成したページ一覧</h2>
        <p className="mb-2">
          ブラウザのURLに以下のパスを入力して移動してみてください。
        </p>
        <ul className="list-disc ml-6">
          <li>
            <strong>/about</strong> （アバウトページ）
          </li>
          <li>
            <strong>/profile/settings</strong> （プロフィール設定）
          </li>
        </ul>
      </div>
    </main>
  );
}
