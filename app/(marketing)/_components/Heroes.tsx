"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Heroes = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="flex flex-col  justify-center max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-white dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-900 text-gray-900 dark:text-white rounded-lg shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <motion.div
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-60 sm:h-80 md:h-96 p-2 bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/bg.png"
            alt="Document"
            fill
            className="object-contain dark:hidden"
          />
          <Image
            src="/bg-dark.png"
            alt="Document"
            fill
            className="object-contain hidden dark:block"
          />
        </motion.div>
        <motion.div
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-60 sm:h-80 md:h-96 hidden md:block p-2 bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            src="/reading.png"
            fill
            alt="reading"
            className="object-contain dark:hidden"
          />
          <Image
            src="/reading-dark.png"
            fill
            alt="reading"
            className="object-contain hidden dark:block"
          />
        </motion.div>
      </div>
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Discover the Power of Notion Clone
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 max-w-3xl mx-auto">
          Simplify your workflow with an intuitive and powerful tool that adapts
          to your needs.
        </p>
        {isLoading && (
          <div className="w-full flex items-center justify-center mt-9 transition">
            <Spinner size="lg" />
          </div>
        )}{" "}
        {!isLoading && !isAuthenticated && (
          <SignInButton mode="modal">
            <motion.button
              className="mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-black hover:bg-gray-900 text-white text-lg sm:text-xl font-bold rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Signin
            </motion.button>
          </SignInButton>
        )}
        {!isLoading && isAuthenticated && (
          <Link href="/documents">
            <motion.button
              className="mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-black hover:bg-gray-900 text-white text-lg sm:text-xl font-bold rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create a Note...
            </motion.button>
          </Link>
        )}
      </motion.div>
    </div>
  );
};
