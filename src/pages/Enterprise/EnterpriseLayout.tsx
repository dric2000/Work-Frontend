import {
  Bell,
  BookA,
  BookCheck,
  ChartNoAxesCombined,
  CircleQuestionMark,
  Diamond,
  Home,
  MessageSquare,
  Search,
  Settings,
  Users,
} from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../components/ui/input-group";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "../../components/ui/sidebar";

const items = [
  {
    title: "Tableau de bord",
    url: "/enterprise",
    icon: Home,
  },
  {
    title: "Projets",
    url: "/douanes/entrepotindustriel/enlevement",
    icon: BookA,
  },
  {
    title: "Tâches",
    url: "/douanes/entrepotindustriel/bonDeSortie",
    icon: BookCheck,
  },
  {
    title: "Employés",
    url: "/douanes/entrepotindustriel/registre",
    icon: Users,
  },
  {
    title: "Performances",
    url: "/douanes/entrepotindustriel/prorogation",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Paramètres",
    url: "/douanes/entrepotindustriel/inventaire",
    icon: Settings,
  },
];

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const pageTitles: Record<string, string> = {
    "/douanes/entrepothydrocarbure": "Tableau de bord",
    "/douanes/entrepothydrocarbure/declaration": "Déclaration",
    "/douanes/entrepothydrocarbure/registre": "Régistre",
    "/douanes/entrepothydrocarbure/enlevement": "Enlèvement",
    "/douanes/entrepothydrocarbure/bondesortie": "Bon de sortie",
    "/douanes/entrepothydrocarbure/prorogation": "Prorogation",
    "/douanes/entrepothydrocarbure/depot": "Dépot",
    "/douanes/entrepothydrocarbure/sorties": "Inventaire",
  };

  const currentTitle = pageTitles[location.pathname] || "Tableau de bord";

  return (
    <SidebarProvider className="w-full h-full max-w-none!">
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="pt-8 pb-8 flex items-center gap-2">
                <div className="bg-primary w-8 h-8 flex justify-center items-center rounded-md">
                  <Diamond className="text-white !w-5 !h-5" />
                </div>
                <h1 className="text-2xl text-primary font-bold">Work</h1>
              </SidebarGroupLabel>
              <Separator className="mb-3" />
              <SidebarGroupContent>
                <SidebarMenu className="p-1 gap-3">
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a
                          href={item.url}
                          className={
                            location.pathname === item.url
                              ? "bg-gray-200 text-black"
                              : ""
                          }
                        >
                          <item.icon className="!w-6 !h-6" />
                          <span className="text-md">{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Zone de contenu (facultative, selon ton layout final) */}

        <div className="flex flex-col h-full w-full p-5 ">
          <div className="flex justify-between ">
            <div>
              <InputGroup>
                <InputGroupInput
                  id="inline-start-input"
                  placeholder="Recherche globale..."
                />
                <InputGroupAddon align="inline-start">
                  <Search className="text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex gap-6">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenu>
                        <MessageSquare />
                      </NavigationMenu>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenu>
                        <Bell />
                      </NavigationMenu>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenu>
                        <CircleQuestionMark />
                      </NavigationMenu>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <Separator orientation="vertical" />
              <div className="flex gap-2 items-center">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Jean Dupont</p>
                  <span className="text-sm">Administrateur</span>
                </div>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/maxleiter.png"
                    alt="@maxleiter"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          <Separator className="mt-2" />
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
}
