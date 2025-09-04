import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart,
  Box,
  Users,
  ShoppingCart,
  Megaphone,
  Layers,
  FileText,
  Bell,
  Settings,
} from "lucide-react";

const navItems = [
  { name: "Overview", icon: LayoutDashboard, to: "/DashboardLayout" },
  { name: "Analytics", icon: BarChart, to: "/", active: true },
  { name: "Products", icon: Box, to: "/products" },
  { name: "Customers", icon: Users, to: "/customers" },
  { name: "Orders", icon: ShoppingCart, to: "/orders", badge: 8 },
  { name: "Marketing", icon: Megaphone, to: "/marketing" },
  { name: "Inventory", icon: Layers, to: "/inventory" },
  { name: "Reports", icon: FileText, to: "/reports" },
  { name: "Notifications", icon: Bell, to: "/notifications", badge: 4 },
  { name: "Settings", icon: Settings, to: "/settings" },
];

const Sidebar = () => {
  return (
    <aside className="bg-white h-screen w-56 flex flex-col py-8 border-r">
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 relative transition-all duration-150 font-medium text-base ${
                  isActive || item.active ? "bg-gray-900 text-white" : ""
                }`
              }
            >
              <Icon size={22} className="" />
              <span>{item.name}</span>
              {item.badge && (
                <span className="absolute right-6 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
