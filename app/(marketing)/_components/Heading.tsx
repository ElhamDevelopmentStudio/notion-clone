"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <motion.div
      className="max-w-3xl space-y-4 text-center mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Welcome, be happy you made it, I certainly am. This is{" "}
        <span className="underline text-gray-700 dark:text-gray-400">
          Notion Clone
        </span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
        Notion clone is just like notion except a bit worse, so good luck with
        this!
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button asChild>
            <Link href="/documents">
              Enter Notion Clone <ArrowRight className="h-4 w-4 m-2" />
            </Link>
          </Button>
        </motion.div>
      )}
      {!isAuthenticated && !isLoading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <SignInButton mode="modal">
            <Button>
              Sign-in with Github <Github className="h-4 w-4 m-2" />
            </Button>
          </SignInButton>
        </motion.div>
      )}
    </motion.div>
  );
};
