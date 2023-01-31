import { assign, createMachine } from "xstate";

const appState =
	/** @xstate-layout N4IgpgJg5mDOIC5QEkAKACAKgJwIYGMBrMbAOgEsA7cgFwGIBlMXbfACwG0AGAXUVAAOAe1i1yQyvxAAPRAA4A7ACZSShQFYuXdQEYdANnUK5OgDQgAnogDM1gJyl1SzVx1K7SpfoU6Avr-M0LDwiEgpqeiYWdg4dPiQQYVEacUkE2QQncysEE0ctAusuawU7HQAWPwCQIJwCYjIAcTAaIIBBCAhsOFg6CAkwUlgaXBpB2pCG0mbWjA6unu54wRExCSkM-X0dUlsNYv1yuS4PBWzEcut9Uh191zlL6yVb-0CMOtCmlvbO7thYUgAMxa7AASnBhJRYGA+gNwgA3ITEIEgthUKBLKRJNZpUAZJ47EouAxHBSVcrnBBqLikO5aDTqfS2KpvYL1MIzH4Lf4omhgiESaF0EjYIRkAQAG1GgLFAFteex0ZiEtiUut0jZnrs7iTFOTKVd1KoCq5rHI7GS7IzXjV3pMOd85r8euEAGq4CXkCDoNB0ZUrZKpDaILaEokHI4nNQGuRyUjeYlGLjucpcfT+aqUIQQOBSCbs7BY1Zq3EyRAAWjslPL6eq+c+4VoRcD6rx8iU1lU+kU6nKCns3nKVcsNitpGTidjVwUtdZHymnKd3PgKuLQY1CHslJ0ck7zhN5V0DxedbtBemjvQ8z+AOBfLY4NgkOhzZxwdyZxHm50Rucu+sjy6OUNr1gul7Xi67qet6aCviW75HOUtLhmobiKIY+iUu4OwWi4Jw-smZKzrabINouV7OjyVBQV6PqoHB65tggQ5IYeBRKMc3auHY1gxgo8Y6uo6g9jOGa+EAA */
	createMachine(
		{
			id: "IP Tracker",
			initial: "init",
			states: {
				init: {
					description: "Starting State of Application",
					on: {
						Search: {
							target: "GetIP Address",
							actions: "updatePlaceholder",
						},
					},
				},
				"GetIP Address": {
					description: "Fetching API IP Address",
					initial: "fetchResponse",
					states: {
						fetchResponse: {
							entry: "isLoading",
							exit: "isLoading",
							invoke: {
								src: "getData",
								id: "fetching",
								onDone: [
									{
										target: "Valid IP",
										actions: "upDateContext",
									},
								],
								onError: [
									{
										target: "inValid IP",
										actions: "setErroMsg",
									},
								],
							},
						},
						"Valid IP": {
							type: "final",
						},
						"inValid IP": {
							always: {
								target: "#IP Tracker.init",
							},
						},
					},
					onDone: {
						target: "init",
					},
				},
			},
			context: {
				input: ``,
				placeholder: `😏check your IP Address or others`,
				isLoading: false,
				data: {
					country: `Canada`,
					timezone: `America/Toronto					`,
					lat: `6.5227`,
					lon: ` 3.6218`,
					query: `24.48.0.1`,
					isp: `Le Groupe`,
				},
			},
			predictableActionArguments: true,
			preserveActionOrder: true,
		},
		{
			actions: {
				updatePlaceholder: assign({
					placeholder: (context, event) => event.msg,
				}),
				upDateContext: assign({
					data: (context, event) => {
						console.log(event.data, `hmmm..`);
						return event.data;
					},
				}),
				isLoading: assign({
					isLoading: (context, event) => !context.isLoading,
				}),
				setErroMsg: assign({
					data: (context, event) => {
						console.log(context);
						return {
							country: `Error`,
							timezone: `Error`,
							lat: `Error`,
							lon: `Error`,
							query: `Error`,
							isp: `Error`,
						};
					},
				}),
			},
		}
	);

// const gg = createMachine({
// 	id: "IP Tracker",
// 	initial: "init",
// 	states: {
// 		init: {
// 			description: "Starting State of Application",
// 			on: {
// 				Search: {
// 					target: "GetIP Address",
// 					actions: "updatePlaceholder",
// 				},
// 			},
// 		},
// 		"GetIP Address": {
// 			description: "Fetching API IP Address",
// 			initial: "fetchResponse",
// 			states: {
// 				fetchResponse: {
// 					entry: "isLoading",
// 					exit: "isNotLoadig",
// 					invoke: {
// 						src: "getData",
// 						id: "fetching",
// 						onDone: [
// 							{
// 								target: "Valid IP",
// 								actions: "upDateContext",
// 							},
// 						],
// 						onError: [
// 							{
// 								target: "inValid IP",
// 								actions: "setErroMsg",
// 							},
// 						],
// 					},
// 				},
// 				"Valid IP": {
// 					type: "final",
// 				},
// 				"inValid IP": {
// 					always: {
// 						target: "#IP Tracker.init",
// 					},
// 				},
// 			},
// 			onDone: {
// 				target: "init",
// 			},
// 		},
// 	},
// 	context: {},
// 	predictableActionArguments: true,
// 	preserveActionOrder: true,
// });

export { appState as default };
