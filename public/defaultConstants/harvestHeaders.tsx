export const harvestHeaders = {
  headers: {
    'Harvest-Account-Id': process.env.HARVEST_ACCOUNT_ID,
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
};
