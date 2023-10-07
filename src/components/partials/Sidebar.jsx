import { Link, useLocation } from "react-router-dom";

import { cn } from "../../lib/utils";
import {
  Atom,
  BadgeCheck,
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  VideoIcon,
} from "lucide-react";

const Sidebar = () => {
  //get url
  const { url } = useLocation();

  //declare the app routes
  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/",
      color: "text-sky-500",
    },
    {
      label: "Chat",
      icon: MessageSquare,
      href: "/chat",
      color: "text-violet-500",
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      href: "/image",
      color: "text-pink-500",
    },
    {
      label: "Code Generation",
      icon: Code,
      href: "/code",
      color: "text-green-500",
    },
    {
      label: "Text Completion",
      icon: Atom,
      href: "/completion",
      color: "text-yellow-500",
    },

    {
      label: "Video Generation",
      icon: VideoIcon,
      href: "/video",
      color: "text-orange-500",
      update: true,
    },
    {
      label: "Music Generation",
      icon: MusicIcon,
      href: "/music",
      color: "text-emerald-500",
      update: true,
    },

    {
      label: "Pages",
      icon: BadgeCheck,
      href: "/pages",
      color: "text-teal-500",
    },
  ];

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      {" "}
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <img src="/logo.png" alt="logo" />
          </div>
          <h1 className={"text-2xl font-bold font-sans"}>Lumina</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((item, index) => {
            return (
              <Link
                className={cn(
                  "text-sm  group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  url === item.href ? "text-white bg-white/10" : "text-zinc-400"
                )}
                to={item.href}
                key={index}
              >
                <div className="flex items-center flex-1">
                  <item.icon className={cn("h-5 w-5 mr-3", item.color)} />
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
