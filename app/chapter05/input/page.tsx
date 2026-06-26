import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

export default function InputDemo() {
  return (
    <div className="p-8 max-w-sm">
      <h2 className="text-2xl font-bold mb-6">ユーザー登録フォーム</h2>

      {/* 項目間の余白を空けるための div */}
      <div className="space-y-2">
        {/* htmlFor と id を "email" で一致させるのが重要！ */}
        <Field>
          <FieldLabel htmlFor="input-field-username">
            メールアドレス <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="input-field-username"
            type="email"
            placeholder="入力必須"
            required
          ></Input>
          <FieldDescription>例：sample@example.com </FieldDescription>
        </Field>
      </div>
    </div>
  );
}
