import {setupDiscordBot} from "./discord-bot.js";
import {} from "./web3.js";
const run = async () => {
	// marketplace subscription
	// const marketPlaceContract = web3.getMarketplaceContract();
	// marketPlaceContract.events.TokenListed([])
	// 	.on('connected', function(subscriptionId) { console.log('Listed-Events: ' + subscriptionId); })
	// 	.on('data', function(event) { listingsHandler.processListing(event); });
	// marketPlaceContract.events.TokenDelisted([])
	// 	.on('connected', function(subscriptionId) { console.log('DeListed-Events: ' + subscriptionId); })
	// 	.on('data', function(event) { listingsHandler.processListing(event); });
	// marketPlaceContract.events.TokenPurchased([])
	// 	.on('connected', function(subscriptionId) { console.log('Sale-Events: ' + subscriptionId); })
	// 	.on('data', function(event) { listingsHandler.processSale(event); });

	console.log('We are live...');
};

await setupDiscordBot();

run();