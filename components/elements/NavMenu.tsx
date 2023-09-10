"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const products = [
  {
    title: "Top Wear",
    href: "/topware",
    children: [
      {
        title: "Jacket",
        href: "/jackets",
      },
      {
        title: "T-shirt",
        href: "/shirts",
      },
      {
        title: "Sweatshirts",
        href: "/hoodies",
      },
    ],
  },
  {
    title: "Bottom Wear",
    href: "/bottomware",
    children: [
      {
        title: "Jean",
        href: "/jeans",
      },
      {
        title: "Trouser",
        href: "/trousers",
      },
      {
        title: "Short",
        href: "/shorts",
      },
    ],
  },
  {
    title: "Foot Wear",
    href: "/footware",
    children: [
      {
        title: "Sneaker",
        href: "/sneakers",
      },
      {
        title: "Boots & High heel",
        href: "/bootsnheels",
      },
    ],
  },
  {
    title: "Accessories",
    href: "/accessories",
    children: [
      {
        title: "Jewelry",
        href: "/jewelry",
      },
      {
        title: "Pockets",
        href: "/pockets",
      },
    ],
  },
];

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex items-start gap-5 p-4 md:w-[400px] lg:w-[660px]">
              {products.map((product, key) => (
                <div key={key} className="flex-1">
                  <Link
                    href={product.href}
                    className="text-[15px] font-semibold hover:text-gray-500 duration-300"
                  >
                    {product.title}
                  </Link>

                  <div className="flex flex-col gap-1 mt-2">
                    {product.children.map((child, index) => (
                      <Link
                        key={index}
                        href={child.href}
                        className="hover:underline underline-offset-2 mt-1"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Gender</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-fit ">
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none hover:shadow-md hover:bg-gray-200 duration-500"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-center w-[65px]">
                      Male
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>

              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none hover:shadow-md hover:bg-pink-200 duration-500"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-center w-[65px]">
                      Female
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>

              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none hover:shadow-md hover:bg-blue-100 duration-500"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-center w-[65px]">
                      Child
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/collections" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Collections
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
