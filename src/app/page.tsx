"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn, signOut, signUp, useSession } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {
	const { data: session, isPending, error, refetch } = useSession();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSignUp = () => {
		signUp.email(
			{
				email,
				password,
				name,
			},
			{
				onError: () => {
					window.alert("Something went wrong");
				},
				onSuccess: () => {
					window.alert("User created");
				},
			}
		);
	};

	const onLogin = () => {
		signIn.email(
			{
				email,
				password,
			},
			{
				onError: () => {
					window.alert("Something went wrong");
				},
				onSuccess: () => {
					window.alert("User created");
				},
			}
		);
	};

	if (session) {
		return (
			<div className="flex flex-col p-4 gapy-4">
				<p>Logged in as {session.user.name}</p>
				<Button onClick={() => signOut()}>Sign out</Button>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-y-10">
			<div className="p-4 flex flex-col gap-y-4">
				<Input
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button onClick={onSignUp}>Create user</Button>
			</div>
			<div className="p-4 flex flex-col gap-y-4">
				<Input
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button onClick={onLogin}>Login</Button>
			</div>
		</div>
	);
}
