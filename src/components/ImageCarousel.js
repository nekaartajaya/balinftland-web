import Carousel from 'react-material-ui-carousel';

import sharedStyles from '../../styles/limabeach/SharedStyles.module.css';

const ImageCarousel = props => {
  const item = {
    src: '/Headerslide.svg',
    width: props.width,
    height: props.height,
    alt: 'image illustration',
  };

  const items = [item, item, item, item];

  return (
    <Carousel
      indicatorContainerProps={{
        style: {
          marginTop: '-30px',
          position: 'absolute',
          zIndex: 1,
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: '#406AFF',
        },
      }}
      indicatorIconButtonProps={{
        style: {
          color: 'rgba(255, 255, 255, 0.4)',
        },
      }}
      navButtonsProps={{
        style: {
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: 0,
          margin: 0,
          padding: '5px 10px',
        },
      }}
      navButtonsAlwaysVisible
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = ({item}, i) => {
  return (
    <div className={sharedStyles.responsive}>
      <img src={item.src} alt={`${item.src}-${i}`} className="w-full" />
    </div>
  );
};

export default ImageCarousel;
