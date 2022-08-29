import {Tabs, TabList, TabPanels, Tab, TabPanel, Text, Grid, Center} from '@chakra-ui/react';
import useMintHook from '@hooks/use-mint.hooks';
import {getChallenge} from '@lib/api/auth';
import {getUnlockableContent} from '@lib/api/project';
import {useMediaQuery} from '@mui/material';

import {useState, useEffect} from 'react';

import getConfig from 'next/config';

import contractInterface from '../../public/contracts/LBSFragment.json';

import NFTCard from 'src/components/NFTCard';
import PermissiveDocument from 'src/components/PermissiveDocument';
import {useContractRead, useAccount, useSignMessage} from 'wagmi';

const EmptyNFTContent = () => {
  return (
    <div className="flex">
      <div className="pt-8 px-6">
        <Text className="text-base font-semibold mb-2">My NFTs</Text>
        <Text className="text-sm font-normal mb-4">
          Choose your NFT to view the Permissive Document
        </Text>

        <Tabs variant="unstyled">
          <StyledTabList setTabId={() => null} />
          <TabPanels>
            <TabPanel>
              <div className="flex flex-col justify-center">
                <img
                  src="/Unlockables/EmptyNFT.svg"
                  alt="empty-nft"
                  className="max-w-[200px] mx-auto"
                />
                <Center className="text-[#8F98AA] desktop:text-[16px]">
                  There is no eligible NFT
                </Center>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col justify-center">
                <img
                  src="/Unlockables/EmptyNFT.svg"
                  alt="empty"
                  className="max-w-[200px] mx-auto"
                />
                <Center className="text-[#8F98AA] desktop:text-[16px]">
                  There is no eligible NFT
                </Center>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

const StyledTabList = ({setTabId}) => {
  const tabNames = [
    {
      id: 'nft-fragments',
      title: 'NFT Fragments',
    },
    {
      id: 'nft-apartments',
      title: 'NFT Apartments',
    },
  ];

  return (
    <TabList className="gap-2 mb-8">
      {tabNames.map(tabName => (
        <Tab
          key={tabName.id}
          _selected={{color: 'white', bg: '#131736'}}
          className="rounded-[150px] border-[1px] border-[#131736]"
          onClick={() => setTabId(tabName.id)}
        >
          <Text fontSize="sm" fontWeight="normal">
            {tabName.title}
          </Text>
        </Tab>
      ))}
    </TabList>
  );
};

const UnlockableContent = () => {
  const isDesktop = useMediaQuery('(min-width: 919px)', {noSsr: true});

  const [tabId, setTabId] = useState<string>('');
  const [signature, setSignature] = useState<string>('');
  const [document, setDocument] = useState<string>('');
  const [loadingView, setLoadingView] = useState<boolean>(false);
  const [selectCard, setSelectCard] = useState<boolean>(false);

  const {address} = useAccount();

  const {signMessage} = useSignMessage({
    onSuccess(data) {
      setSignature(data);
      setSelectCard(true);
    },
    onError() {
      setLoadingView(false);
      setSelectCard(false);
    },
  });

  const {publicRuntimeConfig} = getConfig();
  const lbsfContractAddress = publicRuntimeConfig.lbsfContractAddress;

  const {abi} = contractInterface;

  const tokenId = 1;

  const {data} = useContractRead({
    addressOrName: lbsfContractAddress,
    contractInterface: abi,
    functionName: 'balanceOf',
    args: [address, tokenId],
  });

  const {fetchNFTImageByTokenId, ownedImage, loading} = useMintHook();

  useEffect(() => {
    if (data && Number(data.toString()) > 0) {
      fetchNFTImageByTokenId(tokenId);
    }
  }, [data]);

  useEffect(() => {
    (async () => {
      if (address && signature) {
        const url = await getUnlockableContent({
          signature: signature,
          id: address,
          tokenId: 1,
          nftId: process.env.NEXT_PUBLIC_LBSF_CONTRACT_ADDRESS,
          projectId: 'lima-beach-signature',
        });
        setLoadingView(false);
        setDocument(url);
        if (!url) setSelectCard(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature]);

  useEffect(() => {
    setDocument('');
  }, [tabId]);

  if (!address || !data || Number(data.toString()) === 0) {
    return <EmptyNFTContent />;
  }

  const getNonce = async () => {
    setLoadingView(true);
    const nonce = await getChallenge({id: address});
    if (nonce) {
      signMessage({message: nonce.nonce});
    }
  };

  return (
    <div className="flex">
      {isDesktop ? (
        <>
          <div className="pt-8 px-2 desktop:px-10 w-full h-[calc(100vh-90px)] overflow-y-scroll hide-scrollbar">
            <Text className="text-base font-semibold mb-2">My NFTs</Text>
            <Text className="text-sm font-normal mb-4">
              Choose your NFT to view the Permissive Document
            </Text>

            <Tabs variant="unstyled">
              <StyledTabList setTabId={setTabId} />
              <TabPanels>
                <TabPanel>
                  <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                    <NFTCard
                      imageUrl={ownedImage}
                      qty={data.toString()}
                      clicked={() => getNonce()}
                      tabId={tabId}
                      loadingView={loadingView}
                      selectCard={selectCard}
                      isLoading={loading}
                    />
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <div className="flex flex-col justify-center">
                    <img
                      src="/Unlockables/EmptyNFT.svg"
                      alt="empty"
                      className="max-w-[200px] mx-auto"
                    />
                    <Center className="text-[#8F98AA] desktop:text-[16px]">
                      There is no eligible NFT
                    </Center>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
          <PermissiveDocument tabId={tabId} document={document} />
        </>
      ) : (
        <div className="pt-8 px-2 desktop:px-10 w-full h-[calc(100vh-90px)] overflow-y-scroll hide-scrollbar">
          <Text className="text-base font-semibold mb-2">My NFTs</Text>
          <Text className="text-sm font-normal mb-4">
            Choose your NFT to view the Permissive Document
          </Text>

          <Tabs variant="unstyled">
            <StyledTabList setTabId={setTabId} />
            <TabPanels>
              <TabPanel>
                <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                  <NFTCard
                    imageUrl={ownedImage}
                    qty={data.toString()}
                    clicked={() => getNonce()}
                    tabId={tabId}
                    loadingView={loadingView}
                    selectCard={selectCard}
                    isLoading={loading}
                  />
                </Grid>
              </TabPanel>
              <TabPanel>
                <div className="flex flex-col justify-center">
                  <img
                    src="/Unlockables/EmptyNFT.svg"
                    alt="empty-nft"
                    className="max-w-[200px] mx-auto"
                  />
                  <Center className="text-[#8F98AA] desktop:text-[16px]">
                    There is no eligible NFT
                  </Center>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default UnlockableContent;
