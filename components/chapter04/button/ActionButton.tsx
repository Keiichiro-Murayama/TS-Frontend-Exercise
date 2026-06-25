"use client"; // クリックイベント(動き)を扱うため必須

// 受け取るデータのルール(型)
type ActionButtonProps = {
  label: string; // ボタンに表示する文字
  onClick: () => void; // クリックされた時に実行する関数
};

// コンポーネントの実装
export default function ActionButton({ label, onClick }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {label}
    </button>
  );
}
