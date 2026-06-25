/**
 * 設定ページ
 */
export default function ProfileSettingsPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">プロフィール設定</h1>
      <p>ここは「/profile/settings」のURLに対応するページです。</p>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p>
          深い階層のフォルダを作っても、Next.jsが自動的にURLのパスとして認識してくれます。
        </p>
      </div>
    </main>
  );
}
