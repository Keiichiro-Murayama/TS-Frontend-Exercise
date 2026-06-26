import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardSample() {
  return (
    <div className="p-8 bg-slate-300 min-h-screen">
      <Card className="max-w-md mx-auto mt-10">
        <CardHeader>
          <CardTitle>ログイン</CardTitle>
          <CardDescription>アカウント情報を追加してください</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-gray-500 text-center py-4">
            入力フォームを配置
          </p>
        </CardContent>
        <CardFooter className="flex flex-col ">
          <Button variant={"outline"}>キャンセル</Button>
          <Button>ログイン</Button>
          <Button variant="ghost">ゴースト</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
