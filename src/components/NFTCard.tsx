import {Text} from '@chakra-ui/react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';

import {useEffect, useState} from 'react';

import {Triangle} from 'iconsax-react';

type NFTCardProps = {
  isLoading: boolean;
  imageUrl: string;
  qty: string;
  clicked: () => void;
  tabId: string;
  loadingView?: boolean;
  selectCard?: boolean;
};

const NFTCard = ({
  imageUrl,
  qty,
  clicked,
  tabId,
  loadingView,
  selectCard,
  isLoading,
}: NFTCardProps) => {
  const [selectedCard, setSelectedCard] = useState<null | string>(null);
  const [isSelected, setSelected] = useState<boolean>(false);

  const handleSelectCard = async (selectedCardKey: string) => {
    clicked();
    setSelected(!isSelected);
    setSelectedCard(selectedCardKey);
  };

  useEffect(() => {
    if (tabId !== '') {
      setSelected(false);
      setSelectedCard(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabId]);

  useEffect(() => {
    if (!selectCard) {
      setSelected(false);
    } else {
      setSelected(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingView]);

  return (
    <Card
      key={imageUrl}
      style={{
        width: 'fit-content',
        backgroundColor: isSelected && `${imageUrl}` === selectedCard ? '#d5defb' : '#fff',
      }}
    >
      <CardActionArea onClick={() => (loadingView ? null : handleSelectCard(`${imageUrl}`))}>
        {isLoading ? (
          <Skeleton width={300} height={300} />
        ) : (
          <CardMedia style={{padding: 12}} component="img" image={imageUrl} alt="NFT image" />
        )}
        <div className="flex px-6 py-2 justify-center items-center gap-1">
          <div>
            <Triangle size="16" color="#131736" />
          </div>
          <Text>NFT Owned</Text>
          <Text>({qty})</Text>
        </div>
        <div
          id="fake-button"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            width: '100%',
            padding: '9px 12px',
            color: 'white',
            backgroundColor:
              !loadingView && isSelected && `${imageUrl}` === selectedCard ? '#406AFF' : '#161336',
            fontFamily: 'Syne',
          }}
        >
          <Text className="text-sm font-semibold normal-case">
            {loadingView ? 'Loading' : isSelected ? 'Viewed' : 'View Certificate'}
          </Text>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default NFTCard;
