import { auth } from "@/lib/auth";
import { HomeView } from "@/modules/home/ui/views/home-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function Home() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		redirect("/sign-in");
	}
	return <HomeView />;
}
