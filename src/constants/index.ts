import { StaticTokenListResolutionStrategy, TokenInfo } from "@solana/spl-token-registry";

const tokenMapOriginal = new StaticTokenListResolutionStrategy().resolve();
export const tokenMap: TokenInfo[] = Array.from(tokenMapOriginal).concat([
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
    "address": "Fm9rHUTF5v3hwMLbStjZXqNBBoZyGriQaFM6sTFz3K8A",
    "symbol": "MBS",
    "name": "MonkeyBucks",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Fm9rHUTF5v3hwMLbStjZXqNBBoZyGriQaFM6sTFz3K8A/logo.png",
    "tags": [
      "utility-token",
      "game-token",
      "game-currency",
      "GameFi",
      "Gaming"
    ],
    "extensions": {
      "coingeckoId": "monkeyball",
      "description": "MonkeyLeague is the next-gen esports metaverse empowering players to create, play, compete, and earn.",
      "discord": "https://discord.gg/monkeyleague",
      "facebook": "https://www.facebook.com/TheMonkeyLeague",
      "instagram": "https://www.instagram.com/themonkeyleague/",
      "medium": "https://medium.com/@MonkeyLeague",
      "reddit": "https://www.reddit.com/r/MonkeyBallGame",
      "telegram": "https://t.me/MonkeyLeague_Official",
      "twitter": "https://twitter.com/TheMonkeyLeague",
      "website": "https://www.monkeyleague.io/"
    }
  },
  {
    "chainId": 101,
    "address": "FCuoMii64H5Ee4eVWBjP18WTFS8iLUJmGi16Qti1xFQ2",
    "symbol": "EDB",
    "name": "Emerald Block",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/SBPToken/token-list/main/assets/mainnet/FCuoMii64H5Ee4eVWBjP18WTFS8iLUJmGi16Qti1xFQ2/logo.png",
    "tags": [
      "utility-token"
    ],
    "extensions": {
      "discord": "https://discord.gg/kzPBdWtbrK",
      "instagram": "https://instagram.com/solblockpunks",
      "twitter": "https://twitter.com/solblockpunks",
      "website": "https://solblockpunks.com"
    }
  },
  {
    "chainId": 101,
    "address": "HfYFjMKNZygfMC8LsQ8LtpPsPxEJoXJx4M6tqi75Hajo",
    "symbol": "CWAR",
    "name": "Cryowar Token",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HfYFjMKNZygfMC8LsQ8LtpPsPxEJoXJx4M6tqi75Hajo/logo.png",
    "tags": [
      "utility-token"
    ],
    "extensions": {
      "discord": "https://discord.com/invite/cryowar",
      "telegram": "https://t.me/cryowar",
      "twitter": "https://twitter.com/CryowarDevs",
      "website": "https://cryowar.com"
    }
  },
  {
    "chainId": 101,
    "address": "BqRtfrNpvRAW3KW319hvhPoTu76wKU2LTdXJyG9CyDze",
    "symbol": "ECHO",
    "name": "EchoDao",
    "decimals": 9,
    "logoURI": "https://i.imgur.com/HnnxQND.png",
    "tags": [
      "utility-token",
      "DAO-fork"
    ],
    "extensions": {
      "discord": "https://discord.com/invite/NtvVPs4WnY",
      "serumV3Usdc": "8bjQ8XvzrDxKxHhTccpLkqGLbBrCAAPuv6KHrgN95nDW",
      "twitter": "https://twitter.com/echodao_sol",
      "website": "https://echodao.xyz"
    }
  },
  {
    "chainId": 101,
    "address": "HCXXtXPasqcF4BVsrPQPfHMQPUofoCbDbjsTUANFSHDR",
    "symbol": "MONKE",
    "name": "MONKE TOKEN",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HCXXtXPasqcF4BVsrPQPfHMQPUofoCbDbjsTUANFSHDR/logo.png",
    "tags": [
      "community-token",
      "meme-token"
    ],
    "extensions": {
      "website": "https://monketoken.xyz/"
    }
  },
  {
    "chainId": 101,
    "address": "7gfwZiMD3B6hJWxejr4E3PdsfyVndfuGuk97LfDhJNNh",
    "symbol": "DIBU",
    "name": "DickButt",
    "decimals": 9,
    "logoURI": "https://cdn.jsdelivr.net/gh/xRoBBeRT/DickButtLogo/DickButt.png",
    "tags": [
      "community-token",
      "meme-token"
    ],
    "extensions": {
      "discord": "https://discord.com/invite/solanadickbutt",
      "twitter": "https://twitter.com/SolanaDickButt",
      "website": "https://solanadickbutt.com"
    }
  },
  {
    "chainId": 101,
    "address": "6JdcMdhqgCtcP4U9tieRqmKLhPLxRMLC67QfmdXAJBvZ",
    "symbol": "KITTY",
    "name": "KITTY SOLANA",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6JdcMdhqgCtcP4U9tieRqmKLhPLxRMLC67QfmdXAJBvZ/logo.png",
    "tags": [
      "meme-token"
    ],
    "extensions": {
      "coingeckoId": "kitty-solana",
      "coinmarketcap": "https://coinmarketcap.com/currencies/kitty-solana/",
      "discord": "https://discord.gg/XaRfbtsscz",
      "serumV3Usdc": "8bjQ8XvzrDxKxHhTccpLkqGLbBrCAAPuv6KHrgN95nDW",
      "twitter": "https://twitter.com/kitty_solana",
      "website": "https://kittysolana.com/"
    }
  },
  {
    "chainId": 101,
    "address": "HDiA4quoMibAGeJQzvxajp3Z9cvnkNng99oVrnuNj6px",
    "symbol": "KSAMO",
    "name": "KING SAMO",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HDiA4quoMibAGeJQzvxajp3Z9cvnkNng99oVrnuNj6px/logo.png",
    "tags": [
      "meme-token"
    ],
    "extensions": {
      "discord": "https://discord.com/invite/R8QhkNHn",
      "telegram": "https://t.me/TokenKingSamo",
      "twitter": "https://twitter.com/kingsamocoin",
      "website": "https://kingsamo.com"
    }
  },
  {
    "chainId": 101,
    "address": "73YQDsoPB3t5n5GqX53tKrwJK1n6HCZ935MEbo2gEYU5",
    "symbol": "KAJAME",
    "name": "Kajame",
    "decimals": 4,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/73YQDsoPB3t5n5GqX53tKrwJK1n6HCZ935MEbo2gEYU5/logo.png",
    "tags": [
      "meme-token",
      "social-token",
      "community-token"
    ],
    "extensions": {
      "blog": "https://blog.me-idea.in.th",
      "website": "https://kajame.xyz"
    }
  },
  {
    "chainId": 101,
    "address": "DJKX1cX2SPPaTdYBeuriUeQUUEpi2UGBGGPQthNMrgaa",
    "symbol": "MONKE",
    "name": "MONKE TOKEN",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DJKX1cX2SPPaTdYBeuriUeQUUEpi2UGBGGPQthNMrgaa/logo.png",
    "tags": [
      "community-token",
      "meme-token"
    ],
    "extensions": {
      "website": "https://monketoken.xyz/"
    }
  },
  {
    "chainId": 101,
    "address": "6TgvYd7eApfcZ7K5Mur7MaUQ2xT7THB4cLHWuMkQdU5Z",
    "symbol": "OTR",
    "name": "Otter Finance",
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6TgvYd7eApfcZ7K5Mur7MaUQ2xT7THB4cLHWuMkQdU5Z.png",
    "tags": [
      "meme-token"
    ],
    "extensions": {
      "discord": "https://discord.gg/chfgc9wxnw",
      "serumV3Usdc": "4k4WXdmrWjCG71E4pxMs6SQRRB5cypGNYatKb2iMnqN4",
      "twitter": "https://twitter.com/otter_finance",
      "website": "http://www.otterfinance.site"
    }
  },
  {
    "chainId": 101,
    "address": "382HfaEjcUNhwoGbYmL58DVX8GUvjrXiTPchCWKjchWA",
    "symbol": "SPLN",
    "name": "SHEEPLANA",
    "decimals": 6,
    "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/382HfaEjcUNhwoGbYmL58DVX8GUvjrXiTPchCWKjchWA.png",
    "tags": [
      "meme-token"
    ],
    "extensions": {
      "discord": "https://discord.gg/zV9dyHfxGb",
      "twitter": "https://twitter.com/sheeplana_coin",
      "website": "https://www.sheeplana.online/"
    }
  },
])