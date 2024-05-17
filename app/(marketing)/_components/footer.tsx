"use client";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-200 p-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Logo />
          <p className="text-center md:text-left pl-1">
            A better way to manage your notes and projects. Try Notion Clone
            today!
          </p>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-6 w-6 text-blue-600 hover:text-blue-800" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-6 w-6 text-blue-400 hover:text-blue-600" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6 text-pink-600 hover:text-pink-800" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6 text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 text-blue-700 hover:text-blue-900" />
            </motion.a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p>Email: elhamullah.hossaini@gmail.com</p>
          <p>Phone: (+93) 765488987</p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-lg font-semibold pl-3">Quick Links</h4>
          <Link href="/privacy-policy" passHref>
            <Button variant="link" size="sm">
              Privacy Policy
            </Button>
          </Link>
          <Link href="/terms-of-service" passHref>
            <Button variant="link" size="sm">
              Terms of Service
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-lg font-semibold">
            Subscribe to recieve our updates
          </h4>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-300"
            />
            <Button variant="default" size="sm">
              <Mail className="h-4 w-4 mr-2" /> Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-600 dark:text-gray-400 text-center">
        <p>
          &copy; {new Date().getFullYear()} Notion Clone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
