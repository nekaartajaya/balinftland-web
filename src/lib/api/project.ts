import DigilandAPI from '.';

type unlockablePayload = {
  signature: string;
  id: string;
  tokenId: number;
  nftId: string;
  projectId: string;
};

export const getUnlockableContent = async (payload: unlockablePayload) => {
  try {
    const {signature, id, projectId, nftId, tokenId} = payload;

    const values = {
      signature,
      id,
      tokenId,
    };

    const {data} = await DigilandAPI().request({
      url: `projects/${projectId}/nfts/${nftId}/unlockable-contents`,
      method: 'GET',
      params: values,
    });
    return data;
  } catch (error) {
    console.log({error});
  }
};
