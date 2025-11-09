"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

// 🧩 تعريف نوع المنتج
interface Product {
  id: number;
  slug: string;
  name: string;
  PriceBeforeDiscount: number;
  price: number;
  imgsrc: string;
}

const Products = () => {
  const router = useRouter();

  // منتجات تجريبية
  const products: Product[] = [
    {
      id: 1,
      slug: "product-a",
      name: "Product A",
      PriceBeforeDiscount: 45,
      price: 29.99,
      imgsrc: "/globe.svg",
    },
    {
      id: 2,
      slug: "product-b",
      name: "Product B",
      PriceBeforeDiscount: 70,
      price: 49.99,
      imgsrc: "/globe.svg",
    },
    {
      id: 3,
      slug: "product-c",
      name: "Product C",
      PriceBeforeDiscount: 35,
      price: 19.99,
      imgsrc: "/globe.svg",
    },
    {
      id: 4,
      slug: "product-d",
      name: "Product D",
      PriceBeforeDiscount: 145,
      price: 99.99,
      imgsrc: "/globe.svg",
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          whileHover={{ scale: 1.05 }}
          onClick={() => router.push(`/product/${product.slug}`)}
          className="cursor-pointer"
        >
          <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={product.imgsrc}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-gray-500 line-through">
                  ${product.PriceBeforeDiscount}
                </span>
                <span className="text-xl font-bold text-green-600">
                  ${product.price}
                </span>
              </div>
            </CardContent>
            <CardFooter className="justify-center pb-4">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/product/${product.slug}`);
                }}
                className="w-full"
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Products;
