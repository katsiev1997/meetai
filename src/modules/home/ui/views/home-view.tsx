"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const HomeView = () => {
	const trpc = useTRPC();
	const { data } = useSuspenseQuery(
		trpc.hello.queryOptions({ text: "Antonio" })
	);

	return <div className="flex flex-col p-4 gapy-4">{data?.greeting}</div>;
};
