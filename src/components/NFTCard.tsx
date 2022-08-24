import {Box, Image, Text} from '@chakra-ui/react';
import {Button, CardActionArea, CardActions} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import {useState} from 'react';

import styles from './NFTCard.module.css';

type NFTDescProps = {
  imageUrl: string;
  imageAlt: string;
};

const NFTCards = () => {
  const nftDescList = [
    {
      imageUrl: '/Unlockables/apart1.svg',
      imageAlt: 'Fragment1',
    },
    {
      imageUrl: '/Unlockables/apart2.svg',
      imageAlt: 'Fragment2',
    },
    {
      imageUrl: '/Unlockables/apart3.svg',
      imageAlt: 'Fragment3',
    },
    {
      imageUrl: '/Unlockables/apart3.svg',
      imageAlt: 'Fragment4',
    },
  ];

  const [selectedCard, setSelectedCard] = useState<null | string>(null);
  const [isSelected, setSelected] = useState(false);

  const handleSelectCard = (selectedCardKey: string) => {
    setSelected(!isSelected);
    setSelectedCard(selectedCardKey);
  };
  return (
    <>
      {nftDescList.map((nftDesc, i) => (
        <Card
          key={`${nftDesc.imageAlt}${i}`}
          className={
            isSelected && `${nftDesc.imageAlt}${i}` === selectedCard ? styles.selected : ''
          }
        >
          <CardActionArea onClick={() => handleSelectCard(`${nftDesc.imageAlt}${i}`)}>
            <CardMedia
              style={{padding: 12}}
              component="img"
              image={nftDesc.imageUrl}
              alt={nftDesc.imageAlt}
            />
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
                  isSelected && `${nftDesc.imageAlt}${i}` === selectedCard ? '#406AFF' : '#161336',
                fontFamily: 'Syne',
              }}
            >
              <Text className="text-sm font-semibold normal-case">View Certificate</Text>
            </div>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};

export default NFTCards;
