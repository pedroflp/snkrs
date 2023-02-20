import { createSaleorClient } from "@saleor/sdk";

const saleorClient = createSaleorClient({
  apiUrl: "https://snkrs.saleor.cloud/graphql/",
  channel: "default-channel",
});

export { saleorClient };
