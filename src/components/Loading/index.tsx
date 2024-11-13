"use client";
import { useLoading } from "@/hooks/useLoading";
import { Container, Paimon } from "./styles";

export default function Loading() {
	const isLoading = useLoading();

	if (!isLoading) return null;

	return (
		<Container>
			<Paimon src="/svgs/paimon.svg" alt="로딩중" />
		</Container>
	);
}
