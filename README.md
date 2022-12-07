## Peepo NFT Market

- NFT collection details page using Opensea's api
- Tech/tools: Vite react/ts tooling, emotion styled-components, and react-query/axios for data fetching
- Used mostly custom built components and tried to keep dependencies usage lightweight to keep bundle small

### Features

- Includes a collection page for NFT assset with metadata displayed from OS api
- Search bar that allows user's to search nft collection by contract address
- Infinite scroll loading
- Mobile/tablet responsive

### Potential improvements

- Improvements can be made and app be built into a full NFT market place by adding wagmi hooks provider
  for wallet connection to allow user's to sign, bid/offer and make purchases
- Some limitation of OS public api, such as listing all NFT asset offers. Requires an api call to each
  asset per id which would hit throttle limit, but this can also be added as potential improvement if using internal api endpoint
- Built as a CSR app, but could use add in SSG/SSR for potential performance improvement on FCP (Next.js/Remix)
