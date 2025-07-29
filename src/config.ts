import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "ConceptOnChain - Bid for future",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "andr1ahh466keu3urr7ry99h9k8vqym80h9a35cjlcgy366ysjfekq95sdll3r0",
            cw721: "andr1tvwtd62vnm0xd7k75lknr96h4vhm86uhy44s4emjjnpufj8pnslsrr4pd3",
            name: "AI Startups",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
        }
    ],
};

export default CONFIG;
