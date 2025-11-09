"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    slug: "product-a",
    name: "Product A",
    PriceBeforeDiscount: 45,
    price: 29.99,
    imgsrc: "/globe.svg",
    description: "This is Product A. A great item with a nice discount.",
  },
  {
    id: 2,
    slug: "product-b",
    name: "Product B",
    PriceBeforeDiscount: 70,
    price: 49.99,
    imgsrc: "/globe.svg",
    description: "Product B offers premium quality for a great price.",
  },
  {
    id: 3,
    slug: "product-c",
    name: "Product C",
    PriceBeforeDiscount: 35,
    price: 19.99,
    imgsrc: "/globe.svg",
    description: "Product C is popular among our customers.",
  },
  {
    id: 4,
    slug: "product-d",
    name: "Product D",
    PriceBeforeDiscount: 145,
    price: 99.99,
    imgsrc: "/globe.svg",
    description: "Product D is a top-tier product for professionals.",
  },
];

const ProductPage = () => {
  const router = useRouter();
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-semibold mb-4">Product not found 😢</h1>
        <Button onClick={() => router.push("/products")}>Back to Products</Button>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 p-8"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* صورة المنتج */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="relative w-64 h-64 lg:w-80 lg:h-80"
      >
        <Image
          src={product.imgsrc}
          alt={product.name}
          fill
          className="object-contain"
        />
      </motion.div>

      {/* معلومات المنتج */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-md text-center lg:text-left"
      >
        <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
          <span className="text-gray-400 line-through text-lg">
            ${product.PriceBeforeDiscount}
          </span>
          <span className="text-3xl font-extrabold text-green-600">
            ${product.price}
          </span>
        </div>

        <div className="flex gap-4 justify-center lg:justify-start">
          <Button
            className="px-6 py-3 text-lg"
            onClick={() => alert(`Buying ${product.name}...`)}
          >
            Buy Now
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push("/products")}
          >
            Back to Products
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductPage;
