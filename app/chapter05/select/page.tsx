"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectSample() {
  const [framework, setFramework] = useState<string>("");

  return (
    <div className="p-8 max-w-md mx-auto mt-10 border rounded shadow-sm bg-white">
      <h3 className="mb-4 font-bold text-lg">好きなフレームワークは？</h3>

      <Select value={framework} onValueChange={setFramework}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="選択してください" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue.js</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
        </SelectContent>
      </Select>

      {/* ⭐️ ここから発展案3の追加部分 ⭐️ */}
      <div className="mt-6 p-4 border rounded-sm bg-gray-50 min-h-[80px] flex items-center justify-center">
        {/* ① まだ何も選ばれていない（空文字の）とき */}
        {framework === "" && (
          <p className="text-gray-400 text-sm">
            上のプルダウンから選んでみてね！
          </p>
        )}

        {/* ② React が選ばれたとき */}
        {framework === "react" && (
          <div className="text-center">
            <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-700 rounded">
              人気No.1
            </span>
            <p className="mt-2 text-blue-600 font-bold">
              仮想DOMによる高速な画面切り替えが特徴です！
            </p>
          </div>
        )}

        {/* ③ Vue.js が選ばれたとき */}
        {framework === "vue" && (
          <div className="text-center">
            <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded">
              書きやすい
            </span>
            <p className="mt-2 text-green-600 font-bold">
              HTMLに近くて、初心者にも優しい丁寧な設計です！
            </p>
          </div>
        )}

        {/* ④ Svelte が選ばれたとき */}
        {framework === "svelte" && (
          <div className="text-center">
            <span className="text-xs font-bold px-2 py-1 bg-orange-100 text-orange-700 rounded">
              超軽量
            </span>
            <p className="mt-2 text-orange-600 font-bold">
              サクサク動く！無駄なコードを極限まで削った次世代系です！
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
