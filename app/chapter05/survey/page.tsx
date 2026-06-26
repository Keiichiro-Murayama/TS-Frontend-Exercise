"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function SurveyPage() {
  const [contactMethod, setContactMethod] = useState<string>("email");
  const [agreed, setAgreed] = useState<boolean>(false);
  // 修正点：アラートの表示状態を管理するStateを追加
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleSubmit = () => {
    // 修正点：ボタンクリック時にStateをtrueにしてアラートを表示させる
    setShowAlert(true);

    // 実際の運用ではここで contactMethod などをAPIに送信する処理を行います
    console.log("送信されたデータ:", { contactMethod });
  };

  return (
    <div className="p-8 max-w-sm mx-auto space-y-8">
      <h2 className="text-2xl font-bold">アンケートフォーム</h2>

      {/* ラジオボタンエリア */}
      <div className="space-3">
        <Label className="text-base">希望する連絡方法</Label>
        <RadioGroup
          defaultValue="email"
          value={contactMethod}
          onValueChange={setContactMethod}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email">Email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="phone" id="phone" />
            <Label htmlFor="phone">電話</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="post" id="post" />
            <Label htmlFor="post">郵送</Label>
          </div>
        </RadioGroup>
      </div>

      {/* チェックボックスエリア */}
      <div className="flex items-center space-x-2 p-4 bg-muted rounded-md">
        <Checkbox
          id="terms"
          checked={agreed}
          onCheckedChange={(checked) => setAgreed(checked as boolean)}
        />
        <Label htmlFor="terms">利用規約に同意する</Label>
      </div>

      {/* 送信ボタン */}

      <AlertDialog>
        <AlertDialogTrigger>
          <Button disabled={!agreed} className="w-full">
            確定
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              送信後は修正できません。 連絡方法：{contactMethod}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>戻る</AlertDialogCancel>
            <AlertDialogAction>確定</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
