import { StaticTokenListResolutionStrategy, TokenInfo } from "@solana/spl-token-registry";

const tokenMapOriginal = new StaticTokenListResolutionStrategy().resolve();
// export const tokenMap: TokenInfo[] = Array.from(tokenMapOriginal).concat([
  export const tokenMap: TokenInfo[] = Array.from([]).concat([
  {
    chainId: 103,
    address: '9NGDi2tZtNmCCp8SVLKNuGjuWAVwNF3Vap5tT8km5er9',
    name: 'Devnet USD Tether',
    decimals: 9,
    symbol: 'USDT',
    logoURI: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg',
    tags: undefined,
    extensions: undefined,
  },
  {
    chainId: 103,
    address: 'zVzi5VAf4qMEwzv7NXECVx5v2pQ7xnqVVjCXZwS9XzA',
    name: 'Devnet USD Coin',
    decimals: 6,
    symbol: 'USDC',
    logoURI: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    tags: undefined,
    extensions: undefined,
  },
  {
    "chainId": 101,
    "address": "G6nZYEvhwFxxnp1KZr1v9igXtipuB5zL6oDGNMRZqF3q",
    "symbol": "BAD",
    "name": "EA Bad",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/G6nZYEvhwFxxnp1KZr1v9igXtipuB5zL6oDGNMRZqF3q/EABadlogo.PNG",
    "tags": [
      "utility-token",
      "community-token",
      "meme-token"
    ],
    "extensions": {
      "twitter": "https://twitter.com/EABadtoken"
    }
  },
  {
    "chainId": 101,
    "address": "DFTZmEopSWrj6YcsmQAAxypN7cHM3mnruEisJPQFJbs7",
    "symbol": "zBTC",
    "name": "zBTC (ACUMEN)",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DFTZmEopSWrj6YcsmQAAxypN7cHM3mnruEisJPQFJbs7/logo.png",
    "extensions": {
      "website": "https://acumen.network/"
    }
  },
  {
    "chainId": 101,
    "address": "A8pnvbKWmTjjnUMzmY6pDJRHy3QdQNdqJdL1VFYXX4oW",
    "symbol": "zETH",
    "name": "zETH (ACUMEN)",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/A8pnvbKWmTjjnUMzmY6pDJRHy3QdQNdqJdL1VFYXX4oW/logo.png",
    "extensions": {
      "website": "https://acumen.network/"
    }
  },
  {
    "chainId": 101,
    "address": "9hZt5mP139TvzDBZHtruXxAyjYHiovKXfxW6XNYiofae",
    "symbol": "zSRM",
    "name": "zSRM (ACUMEN)",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9hZt5mP139TvzDBZHtruXxAyjYHiovKXfxW6XNYiofae/logo.png",
    "extensions": {
      "website": "https://acumen.network/"
    }
  },
  {
    "chainId": 101,
    "address": "BR31LZKtry5tyjVtZ49PFZoZjtE5SeS4rjVMuL9Xiyer",
    "symbol": "zSTEP",
    "name": "zSTEP (ACUMEN)",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BR31LZKtry5tyjVtZ49PFZoZjtE5SeS4rjVMuL9Xiyer/logo.png",
    "extensions": {
      "website": "https://acumen.network/"
    }
  },
  {
    "chainId": 101,
    "address": "7wZsSyzD4Ba8ZkPhRh62KshQc8TQYiB5KtdNknywE3k4",
    "symbol": "zRAY",
    "name": "zRAY (ACUMEN)",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BR31LZKtry5tyjVtZ49PFZoZjtE5SeS4rjVMuL9Xiyer/logo.png",
    "extensions": {
      "website": "https://acumen.network/"
    }
  },
  {
    "chainId": 101,
    "address": "EfLvzNsqmkoSneiML5t7uHCPEVRaWCpG4N2WsS39nWCU",
    "symbol": "MUDLEY",
    "name": "MUDLEY",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EfLvzNsqmkoSneiML5t7uHCPEVRaWCpG4N2WsS39nWCU/logo.png",
    "extensions": {
      "website": "https://www.mudley.io/"
    }
  },
  {
    "chainId": 101,
    "address": "GpYMp8eP3HADY8x1jLVfFVBVYqxFNxT5mFhZAZt9Poco",
    "symbol": "CAPE",
    "name": "Crazy Ape Coin",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GpYMp8eP3HADY8x1jLVfFVBVYqxFNxT5mFhZAZt9Poco/logo.png",
    "extensions": {
      "website": "https://www.crazyapecoin.com/"
    }
  },
  {
    "chainId": 101,
    "address": "7ApYvMWwHJSgWz9BvMuNzqzUAqYbxByjzZu31t8FkYDy",
    "symbol": "SFairy",
    "name": "Fairy Finance",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/debianos1/logo-token/main/fairyfinane%20.png",
    "extensions": {
      "twitter": "https://twitter.com/fairy_finance"
    }
  },
  {
    "chainId": 101,
    "address": "7Csho7qjseDjgX3hhBxfwP1W3LYARK3QH3PM2x55we14",
    "symbol": "LOTTO",
    "name": "Lotto",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7Csho7qjseDjgX3hhBxfwP1W3LYARK3QH3PM2x55we14/logo.png",
    "extensions": {
      "address": "0xb0dfd28d3cf7a5897c694904ace292539242f858",
      "assetContract": "https://etherscan.io/address/0xb0dfd28d3cf7a5897c694904ace292539242f858",
      "coingeckoId": "lotto",
      "serumV3Usdc": "9MZKfgZzPgeidAukYpHtsLYm4eAdJFnR7nhPosWT8jiv",
      "telegram": "https://t.me/lottofinance",
      "website": "https://lotto.finance"
    }
  },
  {
    "chainId": 101,
    "address": "7uv3ZvZcQLd95bUp5WMioxG7tyAZVXFfr8JYkwhMYrnt",
    "symbol": "BOLE",
    "name": "Bole Token",
    "decimals": 4,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7uv3ZvZcQLd95bUp5WMioxG7tyAZVXFfr8JYkwhMYrnt/logo.png",
    "extensions": {
      "coingeckoId": "bole-token",
      "serumV3Usdc": "9yGqsboBtvztDgGbGFEaBBT2G8dUMhxewXDQpy6T3eDm",
      "website": "https://tokenbole.com/"
    }
  },
  {
    "chainId": 101,
    "address": "7Qbjc2DZ6K2t6NtQhQnJfsi9V2Aa2KSmKyWZZEdfTXsT",
    "symbol": "XTAG",
    "name": "XTAG",
    "decimals": 9,
    "logoURI": "https://pbs.twimg.com/profile_images/1422971633048834054/PqdED5l7.png",
    "extensions": {
      "medium": "https://medium.com/xhashtag",
      "twitter": "https://twitter.com/xhashtagio",
      "website": "https://www.xhashtag.io/"
    }
  },
  {
    "chainId": 101,
    "address": "Bxp46xCB6CLjiqE99QaTcJAaY1hYF1o63DUUrXAS7QFu",
    "symbol": "mBRZ",
    "name": "SolMiner Bronze",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Bxp46xCB6CLjiqE99QaTcJAaY1hYF1o63DUUrXAS7QFu/logo.png",
    "extensions": {
      "medium": "https://solminer.medium.com/",
      "twitter": "https://twitter.com/SolMinerproject",
      "website": "https://solminer.app"
    }
  },
  {
    "chainId": 101,
    "address": "GZNrMEdrt6Vg428JzvJYRGGPpVxgjUPsg6WLqKBvmNLw",
    "symbol": "mPLAT",
    "name": "SolMiner Platinum",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GZNrMEdrt6Vg428JzvJYRGGPpVxgjUPsg6WLqKBvmNLw/logo.png",
    "extensions": {
      "medium": "https://solminer.medium.com/",
      "twitter": "https://twitter.com/SolMinerproject",
      "website": "https://solminer.app"
    }
  },
  {
    "chainId": 101,
    "address": "Er7a3ugS6kkAqj6sp3UmXEFAFrDdLMRQEkV9QH2fwRYA",
    "symbol": "mDIAM",
    "name": "SolMiner Diamond",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Er7a3ugS6kkAqj6sp3UmXEFAFrDdLMRQEkV9QH2fwRYA/logo.png",
    "extensions": {
      "medium": "https://solminer.medium.com/",
      "twitter": "https://twitter.com/SolMinerproject",
      "website": "https://solminer.app"
    }
  },
  {
    "chainId": 101,
    "address": "5JnZ667P3VcjDinkJFysWh2K2KtViy63FZ3oL5YghEhW",
    "symbol": "APYS",
    "name": "APYSwap",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5JnZ667P3VcjDinkJFysWh2K2KtViy63FZ3oL5YghEhW/logo.png",
    "tags": [
      "wrapped"
    ],
    "extensions": {
      "coingeckoId": "apyswap",
      "website": "https://apyswap.com"
    }
  },
  {
    "chainId": 101,
    "address": "ss1gxEUiufJyumsXfGbEwFe6maraPmc53fqbnjbum15",
    "symbol": "SS1",
    "name": "Naked Shorts",
    "decimals": 0,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ss1gxEUiufJyumsXfGbEwFe6maraPmc53fqbnjbum15/logo.png",
    "tags": [
      "nft"
    ],
    "extensions": {
      "animationUrl": "https://www.arweave.net/KBzRUmQNX6VKDH41N_uOETtJH21YtWXrOz270b8eqyo?ext=glb",
      "description": "After a gamma squeeze event he was left covered in theta. Due to the accident he lost his memories but gained the ability to refract light. He joins the tournament hoping to discover more about his past. His only clue is a damaged ID card with the word Malvin inscribed. Special: 'Now You See Me'",
      "imageUrl": "https://www.arweave.net/N-RGNyi1o1evhr7jTCXxHQlSndNPdnHWEzUTbTGMCl4",
      "twitter": "https://twitter.com/sol__survivor",
      "website": "https://www.sol-talk.com/sol-survivor"
    }
  },
  {
    "chainId": 101,
    "address": "GfJ3Vq2eSTYf1hJP6kKLE9RT6u7jF9gNszJhZwo5VPZp",
    "symbol": "SOLPAD",
    "name": "Solpad Finance",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GfJ3Vq2eSTYf1hJP6kKLE9RT6u7jF9gNszJhZwo5VPZp/logo.png",
    "tags": [
      "utility-token"
    ],
    "extensions": {
      "github": "https://github.com/solpad-finance",
      "telegram": "https://t.me/solpadfinance_chat",
      "telegramAnnouncements": "https://t.me/solpadfinance",
      "twitter": "https://twitter.com/FinanceSolpad",
      "website": "https://www.solpad.finance/"
    }
  },
  {
    "chainId": 101,
    "address": "A3iozx9T9wgrtybnecQ9rv56y9RF8ThUrwRGWiF7hsmZ",
    "symbol": "$SHIVER",
    "name": "Shibaverse",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/A3iozx9T9wgrtybnecQ9rv56y9RF8ThUrwRGWiF7hsmZ/logo.png",
    "extensions": {
      "coingeckoId": "shibaverse-token",
      "twitter": "https://twitter.com/theshibaverse",
      "website": "https://www.shibaverse.co"
    }
  },
  {
    "chainId": 101,
    "address": "FGMTuwmVVz9hUJzA8shYiEnM16wsYDoSmYoy13UZe1kk",
    "symbol": "SHIVER",
    "name": "Shibaverse",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FGMTuwmVVz9hUJzA8shYiEnM16wsYDoSmYoy13UZe1kk/logo.png",
    "extensions": {
      "coingeckoId": "shibaverse-token",
      "twitter": "https://twitter.com/theshibaverse",
      "website": "https://www.shibaverse.co"
    }
  },
  {
    "chainId": 101,
    "address": "ERPueLaiBW48uBhqX1CvCYBv2ApHN6ZFuME1MeQGTdAi",
    "symbol": "MIT",
    "name": "Muskimum Impact Token",
    "decimals": 8,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ERPueLaiBW48uBhqX1CvCYBv2ApHN6ZFuME1MeQGTdAi/logo.png",
    "tags": [
      "mit",
      "musk"
    ],
    "extensions": {
      "serumV3Usdc": "3mhrhTFrHtxe7uZhvzBhzneR3bD3hDyWcgEkR8EcvNZk",
      "twitter": "https://twitter.com/muskimum",
      "website": "https://muskimum.win/"
    }
  },
  {
    "chainId": 101,
    "address": "BsDrXiQaFd147Fxq1fQYbJQ77P6tmPkRJQJzkKvspDKo",
    "symbol": "SOLA",
    "name": "SolaPAD Token (deprecated)",
    "decimals": 8,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BsDrXiQaFd147Fxq1fQYbJQ77P6tmPkRJQJzkKvspDKo/logo.png",
    "tags": [
      "SOLA",
      "LaunchPAD"
    ],
    "extensions": {
      "twitter": "https://twitter.com/SolaPAD",
      "website": "https://www.solapad.org/"
    }
  },
  {
    "chainId": 101,
    "address": "7fCzz6ZDHm4UWC9Se1RPLmiyeuQ6kStxpcAP696EuE1E",
    "symbol": "SHBL",
    "name": "Shoebill Coin",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7fCzz6ZDHm4UWC9Se1RPLmiyeuQ6kStxpcAP696EuE1E/logo.png",
    "extensions": {
      "website": "https://shoebillco.in/"
    }
  },
  {
    "chainId": 101,
    "address": "GnaFnTihwQFjrLeJNeVdBfEZATMdaUwZZ1RPxLwjbVwb",
    "symbol": "SHBL-USDC",
    "name": "Raydium Permissionless LP Token (SHBL-USDC)",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GnaFnTihwQFjrLeJNeVdBfEZATMdaUwZZ1RPxLwjbVwb/logo.png",
    "tags": [
      "lp-token"
    ],
    "extensions": {
      "website": "https://raydium.io/"
    }
  },
  {
    "chainId": 101,
    "address": "Djoz8btdR7p6xWHoVtPYF3zyN9LU5BBfMoDk4HczSDqc",
    "symbol": "AUSS",
    "name": "Ausshole",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Djoz8btdR7p6xWHoVtPYF3zyN9LU5BBfMoDk4HczSDqc/logo.svg",
    "extensions": {
      "serumV3Usdc": "bNbYoc2KawipbXj76BiXbUdf2NcGKWkdp4S9uDvWXB1",
      "twitter": "https://twitter.com/ausstoken",
      "website": "https://auss.finance/"
    }
  },
  {
    "chainId": 101,
    "address": "TuLipcqtGVXP9XR62wM8WWCm6a9vhLs7T1uoWBk6FDs",
    "symbol": "TULIP",
    "name": "Tulip",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/sol-farm/token-logos/main/tulip.png",
    "tags": [
      "tulip",
      "tulip-protocol",
      "vaults"
    ],
    "extensions": {
      "coingeckoId": "solfarm",
      "serumV3Usdc": "8GufnKq7YnXKhnB3WNhgy5PzU9uvHbaaRrZWQK6ixPxW",
      "twitter": "https://twitter.com/TulipProtocol",
      "waterfallbot": "https://bit.ly/TULIPwaterfall",
      "website": "https://tulip.garden"
    }
  },
  {
    "chainId": 101,
    "address": "5trVBqv1LvHxiSPMsHtEZuf8iN82wbpDcR5Zaw7sWC3s",
    "symbol": "soJPYC",
    "name": "JPY Coin(Sollet)(Deprecated)",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5trVBqv1LvHxiSPMsHtEZuf8iN82wbpDcR5Zaw7sWC3s/logo.png",
    "tags": [
      "stablecoin",
      "ethereum",
      "wrapped-sollet"
    ],
    "extensions": {
      "website": "https://jpyc.jp/"
    }
  },
  {
    "chainId": 101,
    "address": "3QuAYThYKFXSmrTcSHsdd7sAxaFBobaCkLy2DBYJLMDs",
    "symbol": "TYNA",
    "name": "wTYNA",
    "decimals": 3,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3QuAYThYKFXSmrTcSHsdd7sAxaFBobaCkLy2DBYJLMDs/logo.png",
    "tags": [
      "ERC20",
      "ethereum"
    ],
    "extensions": {
      "address": "0x4ae54790c130B21E8CbaCAB011C6170e079e6eF5",
      "assetContract": "https://etherscan.io/address/0x4ae54790c130B21E8CbaCAB011C6170e079e6eF5",
      "bridgeContract": "https://etherscan.io/address/0xeae57ce9cc1984f202e15e038b964bb8bdf7229a",
      "twitter": "https://twitter.com/btc_AP",
      "website": "http://lendingbot.s3-website-us-east-1.amazonaws.com/whitepaper.html"
    }
  },
  {
    "chainId": 101,
    "address": "7zsKqN7Fg2s9VsqAq6XBoiShCVohpGshSUvoWBc6jKYh",
    "symbol": "soARDX",
    "name": "Wrapped ArdCoin (Sollet)",
    "decimals": 2,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7zsKqN7Fg2s9VsqAq6XBoiShCVohpGshSUvoWBc6jKYh/logo.png",
    "tags": [
      "wrapped-sollet",
      "ethereum"
    ],
    "extensions": {
      "coingeckoId": "ardcoin",
      "website": "https://ardcoin.com"
    }
  },
  {
    "chainId": 101,
    "address": "7zphtJVjKyECvQkdfxJNPx83MNpPT6ZJyujQL8jyvKcC",
    "symbol": "SSHIB",
    "name": "SolShib",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7zphtJVjKyECvQkdfxJNPx83MNpPT6ZJyujQL8jyvKcC/logo.png",
    "extensions": {
      "website": "https://solshib.com/"
    }
  },
  {
    "chainId": 101,
    "address": "HoSWnZ6MZzqFruS1uoU69bU7megzHUv6MFPQ5nqC6Pj2",
    "symbol": "SGI",
    "name": "SolGift",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HoSWnZ6MZzqFruS1uoU69bU7megzHUv6MFPQ5nqC6Pj2/logo.png",
    "extensions": {
      "website": "https://solshib.com/"
    }
  },
  {
    "chainId": 101,
    "address": "GpS9AavHtSUspaBnL1Tu26FWbUAdW8tm3MbacsNvwtGu",
    "symbol": "SOLT",
    "name": "Soltriever",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GpS9AavHtSUspaBnL1Tu26FWbUAdW8tm3MbacsNvwtGu/logo.png",
    "extensions": {
      "twitter": "https://twitter.com/_Soltriever",
      "website": "http://soltriever.info/"
    }
  },
  {
    "chainId": 101,
    "address": "2QK9vxydd7WoDwvVFT5JSU8cwE9xmbJSzeqbRESiPGMG",
    "symbol": "KEKW",
    "name": "kekwcoin",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2QK9vxydd7WoDwvVFT5JSU8cwE9xmbJSzeqbRESiPGMG/logo.png",
    "extensions": {
      "description": "Kekwcoin is a creative community platform for content creators to monetize their artwork and get financial support from investors.",
      "discord": "https://discord.gg/kekw",
      "medium": "https://kekwcoin.medium.com/",
      "serumV3Usdc": "N99ngemA29qSKqdDW7kRiZHS7h2wEFpdgRvgE3N2jy6",
      "twitter": "https://twitter.com/kekwcoin",
      "website": "https://kekw.io/"
    }
  },
  {
    "chainId": 101,
    "address": "qs9Scx8YwNXS6zHYPCnDnyHQcRHg3QwXxpyCXs5tdM8",
    "symbol": "POCO",
    "name": "POWER COIN",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/qs9Scx8YwNXS6zHYPCnDnyHQcRHg3QwXxpyCXs5tdM8/logo.png",
    "tags": [
      "social-token",
      "poco"
    ]
  },
  {
    "chainId": 101,
    "address": "AndyTyTHiXSHT3DhKSehsg3BEdAWMHbw9xVeeDS3WZYh",
    "symbol": "ANDY",
    "name": "Andy token",
    "decimals": 0,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AndyTyTHiXSHT3DhKSehsg3BEdAWMHbw9xVeeDS3WZYh/logo.png"
  },
  {
    "chainId": 101,
    "address": "7CVZWtuaA34gQZazbWwDhK8kFwPUubAiPaPnz6gAFjxF",
    "symbol": "DIGI",
    "name": "DIGI Token",
    "decimals": 8,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7CVZWtuaA34gQZazbWwDhK8kFwPUubAiPaPnz6gAFjxF/logo.png"
  },
  {
    "chainId": 101,
    "address": "VernWPaodzUcAXnZQAcCguQPbWJvUub1zuURzLvF128",
    "symbol": "VERNER",
    "name": "Verner Token",
    "decimals": 0,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/VernWPaodzUcAXnZQAcCguQPbWJvUub1zuURzLvF128/logo.png"
  },
  {
    "chainId": 101,
    "address": "FxCvbCVAtNUEKSiKoF6xt2pWPfpXuYFWYbuQySaRnV5R",
    "symbol": "LOOP",
    "name": "LC Andy Social Token",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FxCvbCVAtNUEKSiKoF6xt2pWPfpXuYFWYbuQySaRnV5R/logo.png",
    "tags": [
      "social-token",
      "loop"
    ]
  },
  {
    "chainId": 101,
    "address": "4MRVPdN41888CwKSpY37K8HtN2FM9Bc3xTnhf9EDdcou",
    "symbol": "MGT",
    "name": "Mofogasy Token",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4MRVPdN41888CwKSpY37K8HtN2FM9Bc3xTnhf9EDdcou/logo.png",
    "tags": [
      "social-token",
      "MGT"
    ]
  },
  {
    "chainId": 101,
    "address": "6DNkUoMa6vNo3CsxAw5XMJhjmdPbPBENHJ6w35eMXESo",
    "symbol": "MEME",
    "name": "MemeMarketplace",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6DNkUoMa6vNo3CsxAw5XMJhjmdPbPBENHJ6w35eMXESo/logo.png",
    "extensions": {
      "discord": "https://discord.gg/mememarketplace",
      "twitter": "https://twitter.com/MemeMarketNFT",
      "website": "https://www.mememarket.place"
    }
  },
  {
    "chainId": 101,
    "address": "pL5mVp1DByEFufunmymuBNFcSsyJftXguDMci7Jg1Du",
    "symbol": "MEW",
    "name": "MEWSOL",
    "decimals": 9,
    "logoURI": "https://cdn.jsdelivr.net/gh/YudaAdiPratama/MEWSOL/MEWWALLET2.png",
    "tags": [
      "MEME-Token",
      "Fun-Token",
      "MEW"
    ]
  },
  {
    "chainId": 101,
    "address": "3iXydLpqi38CeGDuLFF1WRbPrrkNbUsgVf98cNSg6NaA",
    "symbol": "Spro",
    "name": "Sproken Token",
    "decimals": 9,
    "logoURI": "https://cdn.jsdelivr.net/gh/kechricc/Sproken-Token-Logo/SprokenToken.png",
    "extensions": {
      "website": "https://www.sprokentoken.com/"
    }
  },
  {
    "chainId": 101,
    "address": "95GBBtPvFotNSLDuM4DYTukZhxptRbJjW7dMH45WMS2N",
    "symbol": "CCAT",
    "name": "Cute Baby Cat Coin",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/95GBBtPvFotNSLDuM4DYTukZhxptRbJjW7dMH45WMS2N/logo.png",
    "tags": [
      "community-token"
    ],
    "extensions": {
      "discord": "https://discord.gg/RhQTNhRk2X",
      "twitter": "https://twitter.com/CuteBabyCatCoin"
    }
  },
  {
    "chainId": 101,
    "address": "H5gczCNbrtso6BqGKihF97RaWaxpUEZnFuFUKK4YX3s2",
    "symbol": "BDE",
    "name": "Big Defi Energy",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/bigchickendefi/bigchicken/main/logo.png",
    "extensions": {
      "twitter": "https://twitter.com/Bigdefi",
      "website": "https://bigdefienergy.com"
    }
  },
  {
    "chainId": 101,
    "address": "cREsCN7KAyXcBG2xZc8qrfNHMRgC3MhTb4n3jBnNysv",
    "symbol": "DWT",
    "name": "DARK WEB TOKEN",
    "decimals": 2,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/cREsCN7KAyXcBG2xZc8qrfNHMRgC3MhTb4n3jBnNysv/logo.png",
    "tags": [
      "MEME"
    ],
    "extensions": {
      "serumV3Usdc": "526WW289h5wibg1Q55sK16CGoNip8H5d2AXVbaAGcUMb",
      "website": "https://www.darkwebtoken.live"
    }
  },
  {
    "chainId": 101,
    "address": "EdGAZ8JyFTFbmVedVTbaAEQRb6bxrvi3AW3kz8gABz2E",
    "symbol": "DOGA",
    "name": "Dogana",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EdGAZ8JyFTFbmVedVTbaAEQRb6bxrvi3AW3kz8gABz2E/logo.png",
    "extensions": {
      "serumV3Usdc": "H1Ywt7nSZkLDb2o3vpA5yupnBc9jr1pXtdjMm4Jgk1ay",
      "twitter": "https://twitter.com/DoganaOfficial"
    }
  },
  {
    "chainId": 101,
    "address": "3FoUAsGDbvTD6YZ4wVKJgTB76onJUKz7GPEBNiR5b8wc",
    "symbol": "CHEEMS",
    "name": "Cheems",
    "decimals": 4,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3FoUAsGDbvTD6YZ4wVKJgTB76onJUKz7GPEBNiR5b8wc/logo.png",
    "extensions": {
      "coingeckoId": "cheems",
      "serumV3Usdc": "5WVBCaUPZF4HP3io9Z56N71cPMJt8qh3c4ZwSjRDeuut",
      "twitter": "https://twitter.com/theCheemsToken",
      "website": "https://cheems.co/"
    }
  },
  {
    "chainId": 101,
    "address": "AWW5UQfMBnPsTaaxCK7cSEmkj1kbX2zUrqvgKXStjBKx",
    "symbol": "SBFC",
    "name": "SBF Coin",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AWW5UQfMBnPsTaaxCK7cSEmkj1kbX2zUrqvgKXStjBKx/logo.png",
    "tags": [
      "utility-token",
      "SBF",
      "sbfcoin",
      "SBFC"
    ],
    "extensions": {
      "twitter": "https://twitter.com/sbfcoin",
      "website": "https://www.sbfcoin.org/"
    }
  },
  {
    "chainId": 101,
    "address": "FRbqQnbuLoMbUG4gtQMeULgCDHyY6YWF9NRUuLa98qmq",
    "symbol": "ECOP",
    "name": "EcoPoo",
    "decimals": 0,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FRbqQnbuLoMbUG4gtQMeULgCDHyY6YWF9NRUuLa98qmq/logo.png",
    "tags": [
      "meme"
    ],
    "extensions": {
      "twitter": "https://twitter.com/EcoPoo_Official"
    }
  },
  {
    "chainId": 101,
    "address": "5p2zjqCd1WJzAVgcEnjhb9zWDU7b9XVhFhx4usiyN7jB",
    "symbol": "CATO",
    "name": "CATO",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5p2zjqCd1WJzAVgcEnjhb9zWDU7b9XVhFhx4usiyN7jB/logo.png",
    "tags": [
      "Meme-Token"
    ],
    "extensions": {
      "coingeckoId": "cato",
      "serumV3Usdc": "9fe1MWiKqUdwift3dEpxuRHWftG72rysCRHbxDy6i9xB",
      "telegram": "https://t.me/SolanaCATO",
      "twitter": "https://twitter.com/SolanaCATO",
      "website": "https://official.catodex.com"
    }
  },
  {
    "chainId": 101,
    "address": "J81fW7aza8wVUG1jjzhExsNMs3MrzwT5WrofgFqMjnSA",
    "symbol": "TOM",
    "name": "Tombili",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/J81fW7aza8wVUG1jjzhExsNMs3MrzwT5WrofgFqMjnSA/logo.png",
    "extensions": {
      "twitter": "https://twitter.com/cryptomindex",
      "website": "https://cryptomindex.com"
    }
  },
  {
    "chainId": 101,
    "address": "GunpHq4fn9gSSyGbPMYXTzs9nBS8RY88CX1so4V8kCiF",
    "symbol": "FABLE",
    "name": "Fable",
    "decimals": 0,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GunpHq4fn9gSSyGbPMYXTzs9nBS8RY88CX1so4V8kCiF/logo.png",
    "extensions": {
      "twitter": "https://twitter.com/fable_finance",
      "website": "https://fable.finance"
    }
  },
  {
    "chainId": 101,
    "address": "6L5DzH3p1t1PrCrVkudasuUnWbK7Jq9tYwcwWQiV6yd7",
    "symbol": "LZD",
    "name": "Lizard",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6L5DzH3p1t1PrCrVkudasuUnWbK7Jq9tYwcwWQiV6yd7/logo.png",
    "extensions": {
      "twitter": "https://twitter.com/lzd_sol",
      "website": "https://www.lzdsol.io"
    }
  },
  {
    "chainId": 101,
    "address": "EZqcdU8RLu9EChZgrY2BNVg8eovfdGyTiY2bd69EsPgQ",
    "symbol": "FELON",
    "name": "FuckElon",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EZqcdU8RLu9EChZgrY2BNVg8eovfdGyTiY2bd69EsPgQ/logo.png",
    "extensions": {
      "telegram": "https://t.me/joinchat/cgUOCIRSTJ9hZmY1",
      "telegramAnnouncements": "https://t.me/fuckelonmusktoday",
      "twitter": "https://twitter.com/FuckElonMusk8",
      "website": "https://fuckelonmusk.godaddysites.com/"
    }
  },
  {
    "chainId": 101,
    "address": "HBHMiauecxer5FCzPeXgE2A8ZCf7fQgxxwo4vfkFtC7s",
    "symbol": "SLNDN",
    "name": "Solanadon",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HBHMiauecxer5FCzPeXgE2A8ZCf7fQgxxwo4vfkFtC7s/logo.png",
    "extensions": {
      "telegramAnnouncements": "https://t.me/solanadonann",
      "twitter": "https://twitter.com/SolanadonCoin",
      "website": "https://solanadon.com/"
    }
  },
  
])