import { assign, createMachine } from "xstate";

const getIP = async (context) => {
	const response = await fetch(`http://ip-api.com/json/${context}`),
		data = await response.json();
	console.log(data);
	return data;
};

const appState =
	/** @xstate-layout N4IgpgJg5mDOIC5QEkAKACAKgJwIYGMBrMbAOgEsA7cgFwGIBlMXbfACwG0AGAXUVAAOAe1i1yQyvxAAPRAA4A7ACZSShQFYuXdQEYdANnUK5OgDQgAnogDM1gJyl1SzVx1K7SpfoU6Avr-M0LDwiEgpqeiYWdg4dPiQQYVEacUkE2QQncysEE0ctAusuawU7HQAWPwCQIJwCYjIAcTAaIIBBCAhsOFg6CAkwUlgaXBpB2pCG0mbWjA6unu54wRExCSkM-X0dUlsNYv1yuS4PBWzEcut9Uh191zlL6yVb-0CMOtCmlvbO7thYUgAMxa7AASnBhJRYGA+gNwgA3ITEIEgthUKBLKRJNZpUAZJ47EouAxHBSVcrnBBqLikO5aDTqfS2KpvYL1MIzH4Lf4omhgiESaF0EjYIRkAQAG1GgLFAFteex0ZiEtiUut0jZnrs7iTFOTKVd1KoCq5rHI7GS7IzXjV3pMOd85r8euEAGq4CXkCDoNB0ZUrZKpDaILaEokHI4nNQGuRyUjeYlGLjucpcfT+aqUIQQOBSCbs7BY1Zq3EyRAAWjslPL6eq+c+4VoRcD6rx8iU1lU+kU6nKCns3nKVcsNitpGTidjVwUtdZHymnKd3PgKuLQY1CHslJ0ck7zhN5V0DxedbtBemjvQ8z+AOBfLY4NgkOhzZxwdyZxHm50Rucu+sjy6OUNr1gul7Xi67qet6aCviW75HOUtLhmobiKIY+iUu4OwWi4Jw-smZKzrabINouV7OjyVBQV6PqoHB65tggQ5IYeBRKMc3auHY1gxgo8Y6uo6g9jOGa+EAA */
	createMachine(
		{
			id: "IP Tracker",
			initial: "init",
			states: {
				init: {
					description: "Starting State of Application",
					entry: "isLoading",
					on: {
						Search: {
							target: "GetIP Address",
							actions: ["updatePlaceholder", "updateIP"],
						},
					},
					invoke: {
						src: (context) => {
							return getIP(context.ip);
						},
						id: "Mounting First",
						onDone: {
							actions: ["upDateContext", "isLoading"],
						},
						onError: {
							actions: "isLoading",
						},
					},
				},
				"GetIP Address": {
					description: "Fetching API IP Address",
					initial: "fetchResponse",
					states: {
						fetchResponse: {
							entry: "isLoading",
							invoke: {
								src: (context, event) => {
									return getIP(context.ip);
								},
								id: "fetching",
								onDone: [
									{
										target: "Valid IP",
										actions: ["upDateContext", "isLoading"],
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
								target: "#IP Tracker.result",
							},
						},
					},
					onDone: {
						target: "result",
					},
				},
				result: {
					on: {
						Search: {
							target: "GetIP Address",
							actions: ["updatePlaceholder", "updateIP"],
						},
					},
				},
			},
			context: {
				ip: ``,
				input: ``,
				placeholder: `😏check your IP Address or others`,
				isLoading: false,
				data: {
					country: `---`,
					timezone: `---	`,
					lat: `9.1021`,
					lon: `18.2812`,
					query: `---`,
					isp: `---`,
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
					data: (context, event) => ({
						country: event.data.country,
						timezone: event.data.timezone,
						query: event.data.query,
						isp: event.data.isp,
						lat: event.data.lat,
						lon: event.data.lon,
					}),
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
				updateIP: assign({
					ip: (context, event) => event.val,
				}),
			},
			guards: {},
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
