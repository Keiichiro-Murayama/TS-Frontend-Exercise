"use client";
// 💡 Tableに関連するすべての部品をインポートする
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function TableSample() {
  // 表示したいデータ
  const users = [
    { id: 1, name: "山田 太郎", email: "yamada@example.com", role: "管理者" },
    { id: 2, name: "鈴木 花子", email: "suzuki@example.com", role: "一般" },
    { id: 3, name: "佐藤 次郎", email: "sato@example.com", role: "一般" },
  ];

  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const selectAll = selectedRows.size === users.length;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(users.map((row) => row.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (id: number, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedRows(newSelected);
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-6">ユーザー一覧</h2>

      <Table>
        <TableCaption>
          システムに登録されているユーザーの一覧です。
        </TableCaption>
        <TableHeader className="bg-slate-50">
          <TableRow>
            <TableHead>
              <Checkbox
                id="select-all-checkbox"
                name="select-all-checkbox"
                checked={selectAll}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>名前</TableHead>
            <TableHead>メールアドレス</TableHead>
            <TableHead>権限</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {" "}
                <Checkbox
                  id={`row-${row.id}-checkbox`}
                  name={`row-${row.id}-checkbox`}
                  checked={selectedRows.has(row.id)}
                  onCheckedChange={(checked) =>
                    handleSelectRow(row.id, checked === true)
                  }
                />
              </TableCell>
              <TableCell className="font-medium">{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
