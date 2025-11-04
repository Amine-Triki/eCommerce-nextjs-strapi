"use client"

import Image from "next/image"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"
import { ShoppingCart, Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function NavigationMenuDemo() {
  const isMobile = useIsMobile()

  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b bg-background">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={140} height={140} />
        <span className="font-bold text-lg hidden">Mat store</span>
      </Link>

      {/* Desktop Menu */}
      {!isMobile && (
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/collections">Collections</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}

      {/* Right side: Cart + Menu */}
      <div className="flex items-center gap-3">
        {/* Cart Button */}
        <Link href="/cart">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-8 h-8" />
          </Button>
        </Link>

        {/* Mobile Menu (Sheet) */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-8 h-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                <Link href="/" className="text-lg font-medium hover:underline">
                  Home
                </Link>
                <Link
                  href="/collections"
                  className="text-lg font-medium hover:underline"
                >
                  Collections
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium hover:underline"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  )
}
