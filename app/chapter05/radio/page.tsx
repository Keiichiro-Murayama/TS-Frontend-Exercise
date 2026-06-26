"use client";

import { useState } from "react";
// 必要な部品をインポート
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FieldLabel,
  Field,
  FieldContent,
  FieldDescription,
} from "@/components/ui/field";

export default function RadioSample() {
  // 選択された値を管理するState（初期値は "apple"）
  const [fruit, setFruit] = useState<string>("apple");

  return (
    <div className="p-8">
      <h3 className="mb-4 font-bold">好きなフルーツは？</h3>

      {/* RadioGroup本体：onValueChangeでStateを更新する */}
      <RadioGroup value={fruit} onValueChange={setFruit} className="max-w-sm">
        {/* 選択肢1 */}
        <FieldLabel htmlFor="apple">
          <Field orientation={"vertical"}>
            <FieldContent>
              <div className="flex items-center space-x-2">
                {/* RadioGroupItemの value が、選択時にStateに保存される値 */}
                <RadioGroupItem value="apple" id="apple" />
                {/* Labelの htmlFor と Itemの id を一致させる（文字クリックで選択可能に） */}
                <Label htmlFor="apple">りんご</Label>
                <FieldDescription>
                  For individuals and small teams.
                </FieldDescription>
              </div>
            </FieldContent>
          </Field>
        </FieldLabel>

        {/* 選択肢1 */}
        <FieldLabel htmlFor="apple">
          <Field orientation={"horizontal"}>
            <FieldContent>
              {/* 選択肢2 */}
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="banana" id="banana" />
                <Label htmlFor="banana">ばなな</Label>
                <FieldDescription>
                  For individuals and small teams.
                </FieldDescription>
              </div>
            </FieldContent>
          </Field>
        </FieldLabel>
      </RadioGroup>

      <p className="mt-4 text-sm text-gray-500">選択中: {fruit}</p>
    </div>
  );
}
