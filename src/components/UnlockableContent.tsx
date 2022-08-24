import {Tabs, TabList, TabPanels, Tab, TabPanel, Text, Grid} from '@chakra-ui/react';
import {useMediaQuery} from '@mui/material';

import NFTCards from 'src/components/NFTCard';
import PermissiveDocument from 'src/components/PermissiveDocument';

const StyledTabList = () => {
  const tabNames = [
    {
      id: 'all',
      title: 'All',
    },

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

  return (
    <div className="flex">
      <div className="pt-8 px-6">
        <Text className="text-base font-semibold mb-2">My NFTs</Text>
        <Text className="text-sm font-normal mb-4">
          Choose your NFT to view the Permissive Document
        </Text>

        <Tabs variant="unstyled">
          <StyledTabList />
          <TabPanels>
            <TabPanel>
              <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                <NFTCards />
              </Grid>
            </TabPanel>
            <TabPanel>
              <p>Only Fragments!</p>
            </TabPanel>
            <TabPanel>
              <p>Only Apartments!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      {isDesktop ? <PermissiveDocument /> : <></>}
    </div>
  );
};

export default UnlockableContent;
