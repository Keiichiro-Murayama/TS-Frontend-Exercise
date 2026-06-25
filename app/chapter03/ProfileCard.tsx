type ProfileCardProps = {
  name: string;
  age: number;
};

export default function ProfileCard({ name, age }: ProfileCardProps) {
  return (
    <div className="border p-4 rounded shadow-sm mb-4 bg-white">
      <h2 className="text-lg font-bold">名前：{name}</h2>
      <p className="text-gray-600">年齢：{age}歳</p>
    </div>
  );
}
