"use client";

// import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { LogoutButton } from "./logout-button";

export const UserButton = () => {
  const [user] = useAuthState(auth);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {/* {user?.image && <AvatarImage src={user.image} />} */}
          <AvatarFallback>
            {user?.email?.charAt(0).toLocaleUpperCase()}
            {/* <FaUser className="text-white" /> */}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer">
            <ExitIcon className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
