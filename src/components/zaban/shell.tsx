import { Link, useLocation } from "@tanstack/react-router";
import {
  BookOpen,
  LayoutDashboard,
  Layers,
  NotebookPen,
  ChartNoAxesCombined,
  UserRound,
  Leaf,
  Flame,
  Zap,
  Bell,
  Moon,
  Sun,
  ArrowLeft,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import squirrel from "@/assets/zaban-squirrel.png";
import { useLearning } from "@/features/learning/store";
import { faNumber } from "@/features/learning/content";
import type { ReactNode } from "react";
const navigation = [
  { to: "/", title: "خانهٔ من", icon: LayoutDashboard },
  { to: "/levels", title: "مسیر یادگیری", icon: Layers },
  { to: "/vocabulary", title: "دفتر واژگان", icon: NotebookPen },
  { to: "/progress", title: "پیشرفت من", icon: ChartNoAxesCombined },
  { to: "/profile", title: "حساب کاربری", icon: UserRound },
] as const;
export function Shell({ children }: { children: ReactNode }) {
  const state = useLearning();
  const path = useLocation({ select: (l) => l.pathname });
  return (
    <div className="site-layout">
      <aside className="sidebar">
        <Link to="/" className="brand">
          <img src={squirrel} width={46} height={48} className="brand-icon" alt="سنجاب زبان‌لند" />
          <div>
            زبان‌لند<div className="brand-subtitle">هر روز، یک قدم به دنیای تازه</div>
          </div>
        </Link>
        <nav className="nav-section" aria-label="منوی اصلی">
          {navigation.map((n) => (
            <Link key={n.to} to={n.to} className={`nav-item ${path === n.to ? "active" : ""}`}>
              <n.icon />
              {n.title}
              {n.to === "/levels" && <span className="mr-auto pill">A1</span>}
            </Link>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-tip">
            <img src={squirrel} width={102} height={96} alt="سنجاب همراه یادگیری" />
            <h3 className="text-sm font-bold">قدم‌های کوچک، رویاهای بزرگ!</h3>
            <p>
              هر روز کمی انگلیسی،
              <br />
              هر روز یک دنیای تازه.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/placement">
                سطحم را پیدا کن <ArrowLeft />
              </Link>
            </Button>
          </div>
          <Link to="/about" className="nav-item mb-3">
            <Info />
            دربارهٔ زبان‌لند
          </Link>
          <Link to="/profile" className="sidebar-user">
            <div className="avatar">{state.name.slice(0, 1)}</div>
            <div className="flex-1">
              <strong>{state.name}</strong>
              <p className="text-muted-foreground mt-1 text-[10px]">زبان‌آموز تازه‌نفس 🌱</p>
            </div>
            <ArrowLeft className="size-4 text-muted-foreground" />
          </Link>
        </div>
      </aside>
      <main className="site-main">
        <header className="topbar">
          <div className="topbar-title flex items-center gap-2">
            <Leaf className="size-5 text-primary" />
            <span className="hidden md:inline">به جنگل یادگیری خوش اومدی!</span>
            <Link to="/" className="md:hidden brand-mobile">
              زبان‌لند
            </Link>
          </div>
          <div className="topbar-controls">
            <span className="top-counter text-peach">
              <Flame className="size-5" />
              {faNumber(state.completed.length ? 1 : 0)}{" "}
              <span className="hidden sm:inline">روز</span>
            </span>
            <span className="top-counter text-sunshine">
              <Zap className="size-5" />
              {faNumber(state.xp)} <span className="hidden sm:inline">امتیاز</span>
            </span>
            <div className="h-5 border-l border-border" />
            <Button
              variant="ghost"
              size="icon"
              aria-label={state.dark ? "حالت روشن" : "حالت تاریک"}
              title={state.dark ? "حالت روشن" : "حالت تاریک"}
              onClick={() => state.update({ dark: !state.dark })}
            >
              {state.dark ? <Sun /> : <Moon />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="یادآوری روزانه"
              title="یادآوری روزانه"
              asChild
            >
              <Link to="/profile">
                <Bell />
              </Link>
            </Button>
          </div>
        </header>
        <div className="content soft-enter">{children}</div>
      </main>
      <nav className="mobile-nav" aria-label="منوی موبایل">
        {navigation.map((n) => (
          <Link key={n.to} to={n.to} className={path === n.to ? "active" : ""}>
            <n.icon />
            <span>{n.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
export function PageHeading({ title, description }: { title: string; description: string }) {
  return (
    <>
      <h1 className="page-heading">{title}</h1>
      <p className="page-description">{description}</p>
    </>
  );
}
export function metadata(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | زبان‌لند` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | زبان‌لند` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
