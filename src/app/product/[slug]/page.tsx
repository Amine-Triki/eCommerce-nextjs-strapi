"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const products = [
  {
    id: 1,
    slug: "product-a",
    name: "Product A",
    PriceBeforeDiscount: 45,
    price: 29.99,
    imgsrc: ["/products/1.webp", "/products/1-1.webp", "/products/1-2.webp", "/products/1-3.avif"],
    description: "This is Product A. A great item with a nice discount.",
  },
  {
    id: 2,
    slug: "product-b",
    name: "Product B",
    PriceBeforeDiscount: 70,
    price: 49.99,
    imgsrc: ["/products/2.avif", "/products/2-1.avif", "/products/2-2.avif", "/products/2-3.avif"],
    description: "Product B offers premium quality for a great price.",
  },
  {
    id: 3,
    slug: "product-c",
    name: "Product C",
    PriceBeforeDiscount: 35,
    price: 19.99,
    imgsrc: ["/products/3.avif", "/products/3-1.avif", "/products/3-2.avif", "/products/3-3.avif"],
    description: "Product C is popular among our customers.",
  },
  {
    id: 4,
    slug: "product-d",
    name: "Product D",
    PriceBeforeDiscount: 145,
    price: 99.99,
    imgsrc: ["/products/4.avif", "/products/4-1.avif", "/products/4-2.avif", "/products/4-3.avif"],
    description: "Product D is a top-tier product for professionals.",
  },
];

const ProductPage = () => {
  const router = useRouter();
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomStyle, setZoomStyle] = useState({});
  const [isZooming, setIsZooming] = useState(false);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Product not found 😢</h2>
        <Button onClick={() => router.push("/products")}>Back to Products</Button>
      </div>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseMove = (e:any) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2)',
    });
    setIsZooming(true);
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
    setZoomStyle({});
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 p-8"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* قسم الصور */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col lg:flex-row gap-4 items-center"
      >
        {/* الصور المصغرة */}
        <div className="flex lg:flex-col gap-3 order-2 lg:order-1">
          {product.imgsrc.map((img, idx) => (
            <motion.button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              onMouseEnter={() => setSelectedImage(idx)}
              className={`relative w-16 h-16 lg:w-20 lg:h-20 border-2 rounded-lg overflow-hidden transition-all ${
                selectedImage === idx ? 'border-blue-500 shadow-lg' : 'border-gray-300 hover:border-gray-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={img}
                alt={`${product.name} view ${idx + 1}`}
                fill
                className="object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* الصورة الرئيسية مع Zoom */}
        <div 
          className="relative w-80 h-80 lg:w-96 lg:h-96 border-2 border-gray-200 rounded-lg overflow-hidden cursor-zoom-in order-1 lg:order-2"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={product.imgsrc[selectedImage]}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-200 ease-out"
            style={isZooming ? zoomStyle : {}}
          />
        </div>
      </motion.div>

      {/* معلومات المنتج */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-md text-center lg:text-left"
      >
        <h2 className="text-3xl font-bold mb-3">{product.name}</h2>

        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
          <span className="text-gray-400 line-through text-lg">
            ${product.PriceBeforeDiscount}
          </span>
          <span className="text-3xl font-extrabold text-green-600">
            ${product.price}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>

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