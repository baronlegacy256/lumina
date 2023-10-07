import Layout from "../layouts/Layout";
import { Card } from "../components/ui/Card";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import {
  ArrowRight,
  Atom,
  Code,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  VideoIcon,
} from "lucide-react";
import { Badge } from "../components/ui/badge";

//A.I models
const models = [
  {
    label: "Chat",
    icon: MessageSquare,
    href: "/chat",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: "Text Completion",
    icon: Atom,
    href: "/completion",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    update: true,
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    update: true,
  },
];

export default function Dashboard() {
  return (
    <Layout>
      <div>
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Explore the power of AI
          </h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
            Chart with the smartest ChatGPT powered models
          </p>
        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {models.map((model, index) => {
            return (
              <Link key={index} to={model.href} className="m-3">
                <Card className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
                  <div className="flex items-center gap-x-4">
                    <div className={cn("p-2 w-fit rouded-md", model.bgColor)}>
                      <model.icon className={cn("w-8 h-8", model.color)} />
                    </div>
                    <div className="font-semibold">{model.label}</div>
                  </div>
                  {model.update && <Badge>Upcoming in next update</Badge>}
                  <ArrowRight className="w-5 h-5" />
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
