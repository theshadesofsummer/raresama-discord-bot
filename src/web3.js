import Web3 from "web3";

const web3 = new Web3(
	new Web3.providers.WebsocketProvider('wss://rpc.exosama.com', {
		clientConfig: {
			keepalive: true,
			keepaliveInterval: 60000,
		},
		reconnect: {
			auto: true,
			delay: 2500,
			onTimeout: true,
		},
	})
);


