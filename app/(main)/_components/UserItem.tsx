"use client";

import { ChevronRight, ChevronsLeftRight } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, UserProfile, useUser } from "@clerk/clerk-react";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import UserProfilePage from "./UserProfile";

export const UserItem = () => {
  const { user } = useUser();
  const handleSettings = () => {
    return <UserProfilePage />;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          role="button"
          className="flex items-center text-sm p-3 w-full bg-gray-100 dark:bg-[#1f1f1f] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-x-2 max-w-[150px]">
            <Avatar className="h-8 w-8 rounded-full ring-2 ring-primary">
              <AvatarImage
                src={user?.imageUrl}
                alt={`${user?.fullName}'s avatar`}
              />
            </Avatar>
            <span className="text-start font-medium text-gray-900 dark:text-gray-100 line-clamp-1">
              {user?.fullName}&apos;s Notion-Clone
            </span>
          </div>
          <ChevronsLeftRight className="rotate-90 ml-2 text-gray-500 dark:text-gray-400 h-5 w-5" />
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80 p-4 bg-white dark:bg-[#1f1f1f] rounded-lg shadow-lg transition-transform duration-200 transform origin-top-left"
        align="start"
        alignOffset={10}
        forceMount
      >
        <div className="flex flex-col space-y-4">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 leading-none">
            {user?.emailAddresses[0].emailAddress}
          </p>
          <div className="flex items-center gap-x-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Avatar className="h-12 w-12 rounded-full ring-2 ring-secondary">
              <AvatarImage
                src={user?.imageUrl}
                alt={`${user?.fullName}'s avatar`}
              />
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">
                {user?.fullName}&apos;s notion-clone
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator className="my-2 border-t border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col space-y-2">
          <Button className="w-auto text-white dark:text-black rounded-lg py-2">
            All Published Sites
          </Button>
        </div>

        <DropdownMenuSeparator className="my-2 border-t border-gray-200 dark:border-gray-700" />

        <DropdownMenuItem
          className="w-full cursor-pointer text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2 transition-colors duration-200"
          asChild
        >
          <SignOutButton>Log out</SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
