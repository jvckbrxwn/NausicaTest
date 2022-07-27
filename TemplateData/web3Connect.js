//https://testnet.bscscan.com/address/0x6daeaecd316c5ae92ed3a623535b0ff55356d6f4#code
const CONTRACT_ADDR = "0xfEB2D480019bc605a2Ce20903a90Db3f554F1E1c"
const contract_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"excludedAddress","type":"address"}],"name":"ExcludeFromFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"excludedAddress","type":"address"}],"name":"ExcludeFromReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"includedAddress","type":"address"}],"name":"IncludeInFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"includedAddress","type":"address"}],"name":"IncludeInReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"OwnerForcedSwapBack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"bool","name":"value","type":"bool"}],"name":"SetAutomatedMarketMakerPair","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"marketingFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidityFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reflectFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"devFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"burnFee","type":"uint256"}],"name":"SetBuyFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"marketingFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidityFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reflectFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"devFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"burnFee","type":"uint256"}],"name":"SetSellFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiquidity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"path","type":"address[]"}],"name":"SwapETHForTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"path","type":"address[]"}],"name":"SwapTokensForETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TransferForeignToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"dev","type":"address"}],"name":"UpdatedDevAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"marketing","type":"address"}],"name":"UpdatedMarketingAddress","type":"event"},{"inputs":[],"name":"_burnTokensToSend","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_buyBurnFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_buyDevFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_buyLiquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_buyMarketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_buyTaxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_devTokensToSwap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_isExcludedMaxTransactionAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityTokensToSwap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_marketingTokensToSwap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_sellBurnFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_sellDevFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_sellLiquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_sellMarketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_sellTaxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"airdropWallets","type":"address[]"},{"internalType":"uint256[]","name":"amount","type":"uint256[]"}],"name":"airdropToWallets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"automatedMarketMakerPairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexRouter","outputs":[{"internalType":"contract IDexRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableTransferDelay","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableTrading","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"updAds","type":"address"},{"internalType":"bool","name":"isEx","type":"bool"}],"name":"excludeFromMaxTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"forceSwapBack","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitsInEffect","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTransactionAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumTokensBeforeSwapAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"removeLimits","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setAutomatedMarketMakerPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"buyTaxFee","type":"uint256"},{"internalType":"uint256","name":"buyLiquidityFee","type":"uint256"},{"internalType":"uint256","name":"buyMarketingFee","type":"uint256"},{"internalType":"uint256","name":"buyDevFee","type":"uint256"},{"internalType":"uint256","name":"buyBurnFee","type":"uint256"}],"name":"setBuyFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devAddress","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_marketingAddress","type":"address"}],"name":"setMarketingAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"sellTaxFee","type":"uint256"},{"internalType":"uint256","name":"sellLiquidityFee","type":"uint256"},{"internalType":"uint256","name":"sellMarketingFee","type":"uint256"},{"internalType":"uint256","name":"sellDevFee","type":"uint256"},{"internalType":"uint256","name":"sellBurnFee","type":"uint256"}],"name":"setSellFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"tradingActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tradingActiveBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferDelayEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_to","type":"address"}],"name":"transferForeignToken","outputs":[{"internalType":"bool","name":"_sent","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newNum","type":"uint256"}],"name":"updateMaxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"updateMinimumTokensBeforeSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawStuckETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

const GAME_ADDR = "0xb1215b0B2261653955e125950cBfc84cbD8AB6Ad";
const gameAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"}],"name":"BoosterPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"}],"name":"gameFeePaid","type":"event"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"addNewBooster","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"boosterCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"boosters","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"payGameFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"playAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purchaseBooster","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_burnPercent","type":"uint256"}],"name":"setBurnPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_winningWallet","type":"address"}],"name":"setWinningWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateBoosterCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateGameFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"winningWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

let provider;
let account;
let signer;
let contract;
let gameApi;
let boosterCost;
let boosterPriceFromUnity = "";
let nagiBalance;
let initState = false;
let accounts = [];

async function init() {
    provider = getBlockchainProvider();
    account = await requetsAccount();
    signer = getSigner(account);

    contract = new ethers.Contract(CONTRACT_ADDR, contract_abi, signer);
    gameApi = new ethers.Contract(GAME_ADDR, gameAbi, signer);

    var isOnline = true;
    setInterval(function () {
        if (!isOnline && navigator.onLine) {
            isOnline = true;
            CompleteCallback("ApplicationManager", "OnNetworkState", isOnline.toString());
        } else if (isOnline && !navigator.onLine) {
            isOnline = false;
            CompleteCallback("ApplicationManager", "OnNetworkState", isOnline.toString());
        }
    }, 100);

    gameApi.on("BoosterPurchased", async (player) => {
        CompleteCallback("MetamaskService", "OnBuyBoosterSuccess", "");
        await getBalance();
    });
    gameApi.on("gameFeePaid", async (player) => {
        CompleteCallback("MetamaskService", "OnPayFeeSuccess", "");
        await getBalance();
    });
}

async function switchNetwork() {
    var chainId = ethers.utils.hexlify(56);
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: chainId}],
        });
        CompleteCallback("MetamaskService", "OnNetworkChanged", chainId);
    } catch (switchError) {
        console.log(switchError.code)
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: chainId,
                            chainName: 'Nausica Mainnet',
                            nativeCurrency: {
                                name: 'Binance',
                                symbol: 'BNB', // 2-6 characters long
                                decimals: 18,
                            },
                            rpcUrls: ['https://bsc-dataseed.binance.org/'] /* ... */,
                        },
                    ],
                });
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{chainId: chainId}],
                });
            } catch (addError) {
                // handle "add" error
            }
        }
        // handle other "switch" errors
    }
}

async function buyBooster(price) {
    boosterPriceFromUnity = price;
    try {
        const result = await contract.functions.allowance(account, GAME_ADDR);
        const val = parseInt(result[0]);
        if (val < price) {
            try {
                await approve();
            } catch (e) {
                CompleteCallback("MetamaskService", "OnBuyBoosterError", e.data.message);
                return;
            }
        }
        var amount = ethers.utils.parseEther(price, 9);
        const options = {
            value: amount
        };
        await gameApi.functions.purchaseBooster(options);
    } catch (e) {
        CompleteCallback("MetamaskService", "OnBuyBoosterError", "You don't have enough funds to make a purchase");
    } finally {
    }
}

async function payFee() {
    try {
        const result = await contract.functions.allowance(account, GAME_ADDR);
        const val = parseInt(result[0]);
        if (val <= 0) {
            try {
                await approve();
            } catch (e) {
                CompleteCallback("MetamaskService", "OnPayFeeError", e.message);
                return;
            }
        }
        await gameApi.functions.payGameFee();
    } catch (e) {
        console.log(e);
        console.log(e.data);
        var message = e.message.concat('\n', e.data ? e.data.message : '');
        CompleteCallback("MetamaskService", "OnPayFeeError", message);
    } finally {
    }
}

async function approve() {
    const approve = await contract.functions.approve(GAME_ADDR, "115792089237316195423570985008687907853269984665640564039457584007913129639935");
}

async function requestMetamaskAuth(phrase) {
    if (checkMetamaskInstalled()) {
        try {
            await switchNetwork();
            const signedMessage = await signer.signMessage(phrase);
            CompleteCallback('MetamaskService', 'ConnectedToMetamaskHandler',
                JSON.stringify({
                    address: account,
                    message: phrase,
                    signature: signedMessage
                }));
        } catch (e) {
            CompleteCallback('MetamaskService', 'MetamaskErrorHandler', e.message);
        }
    }
}

async function getBalance() {
    nagiBalance = await provider.getBalance(account);

    CompleteCallback('MetamaskService', 'CompleteGetBalance',
        JSON.stringify({
            balance: ethers.utils.formatUnits(nagiBalance).toString()
        }));
}

function checkMetamaskInstalled() {
    if (window.ethereum != undefined && window.ethereum.isMetaMask) {
        return true;
    } else {
        CompleteCallback('MetamaskService', 'MetamaskErrorHandler', JSON.stringify({
            type: 'ConnectToMetamask',
            message: 'Metamask is not installed'
        }));
        return false;
    }
}

async function requetsAccount() {
    const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
    });
    return account = accounts[0];
}

function getSigner(account) {
    return getMetamaskProvider().getSigner(account);
}

function getMetamaskProvider() {
    return new ethers.providers.Web3Provider(window.ethereum);
}

function getBlockchainProvider() {
    return new ethers.providers.Web3Provider(window.ethereum, "any");
}

function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
}
