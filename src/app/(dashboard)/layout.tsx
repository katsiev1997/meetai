import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboradNavbar } from "@/modules/dashboard/ui/components/dashboard-navbar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
	return (
		<SidebarProvider>
			<DashboardSidebar />
			<main className="flex flex-col h-screen w-screen bg-muted">
				<DashboradNavbar />
				{children}
			</main>
		</SidebarProvider>
	);
}
