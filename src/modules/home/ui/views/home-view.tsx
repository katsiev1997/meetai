"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const HomeView = () => {
	const router = useRouter();
	const { data: session } = useSession();

	if (!session) {
		return <p>Loading...</p>;
	}

	return (
		<div className="flex flex-col p-4 gapy-4">
			<p>Logged in as {session.user.name}</p>
			<Button
				onClick={() =>
					signOut({
						fetchOptions: { onSuccess: () => router.push("/sign-in") },
					})
				}
			>
				Sign out
			</Button>
		</div>
	);
};
