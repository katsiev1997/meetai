interface Props {
	params: Promise<{ agentId: string }>;
}

import { getQueryClient, trpc } from "@/trpc/server";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import {
	AgentIdView,
	AgentsIdViewError,
	AgentsIdViewLoading,
} from "@/modules/agents/ui/views/agent-id-view";

export default async function AgentIdPage({ params }: Props) {
	const { agentId } = await params;

	const queryClient = getQueryClient();
	void queryClient.prefetchQuery(
		trpc.agents.getOne.queryOptions({ id: agentId })
	);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Suspense fallback={<AgentsIdViewLoading />}>
				<ErrorBoundary fallback={<AgentsIdViewError />}>
					<AgentIdView agentId={agentId} />
				</ErrorBoundary>
			</Suspense>
		</HydrationBoundary>
	);
}
