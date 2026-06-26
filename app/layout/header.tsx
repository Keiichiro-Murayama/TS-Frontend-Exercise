/**
 * 演習 5-5 ナビゲーションメニューで新しい共通ページを作成する
 * メニューのヘッダー
 */
"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  const cartCount = 3;
  return (
    <header className="border-b border-green-200 bg-green-100 p-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-green-900">
          <Link href="/">商品管理システム</Link>
        </h1>

        <NavigationMenu>
          {/* 💡 項目が増えたため、スマホなどの狭い画面でも綺麗に折り返せるよう flex-wrap をこっそり付けておくと安全です */}
          <NavigationMenuList className="flex flex-wrap justify-end items-center">
            {/* メニュー1：ログイン */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}
              >
                <Link href="/api/auth/login">ログイン</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* メニュー2：ログアウト */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}
              >
                <Link href="/api/auth/logout">ログアウト</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* メニュー3：ユーザー登録 */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}
              >
                <Link href="/api/users/register">ユーザー登録</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* メニュー4：商品キーワード検索 */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}
              >
                <Link href="/api/products/search">商品キーワード検索</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* メニュー5：商品登録 */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}
              >
                <Link href="/api/products/register">商品登録</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* メニュー6：商品変更 */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}
              >
                <Link href="/api/products/update">商品変更</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full ml-4"
                  >
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                      <AvatarBadge className="bg-green-500 border-2 border-green-100 w-3 h-3 rounded-full" />
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-32">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem variant="destructive">
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
