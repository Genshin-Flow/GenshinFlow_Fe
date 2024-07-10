"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

type ChildrenType = {
	children: React.ReactNode;
};

export default function QueryProvider({ children }: ChildrenType) {
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
