import { memo, useCallback, useRef, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { latest } from '../constants/dummy';
import { ILatest } from '../constants/interface';
import {
  StyledImage,
  StyledLinearGradient,
  StyledText,
  StyledView,
} from '../constants/styles';
import { colors } from '../constants/theme';

const Pagination = (props: { index: number }) => {
  return (
    <StyledView className='absolute bottom-8 left-3 w-full rounded-md mx-2 flex-row'>
      {latest.map((_, i) => (
        <StyledView
          key={i}
          className='w-1.5 h-1.5 rounded-full mx-[0.95]'
          style={[
            props.index === i
              ? {
                  backgroundColor: colors.primary,
                  width: 24,
                  height: 6,
                  borderRadius: 8,
                }
              : {
                  borderRadius: 100,
                  backgroundColor: colors.white,
                },
          ]}
        />
      ))}
    </StyledView>
  );
};

const Slide = memo((props: { data: ILatest }) => {
  const { data } = props;
  return (
    <StyledView className='justify-center items-center flex-1'>
      <StyledImage
        source={{ uri: data.image }}
        resizeMode='cover'
        className='h-36 w-[374]'
      />
      <StyledLinearGradient
        className='z-[4] h-[45%] w-full absolute bottom-0'
        colors={['#000000', 'transparent']}
        start={{ x: 0, y: 1.1 }}
        end={{ x: 0, y: 0 }}
      />
      <StyledView className='absolute p-10 bottom-0 -left-5 z-[4] flex-col space-y-2 -mb-2'>
        {data.id === 0 ? (
          <StyledView className='bg-orange-500 p-1 w-16 items-center rounded-md'>
            <StyledText className='font-medium text-white text-xl'>
              Latest
            </StyledText>
          </StyledView>
        ) : null}
        <StyledText className='font-semibold text-xl text-white'>
          {data.title}
        </StyledText>
      </StyledView>
    </StyledView>
  );
});

const Latest = () => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  const onScroll = useCallback((event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand)
      setIndex(roundIndex);
  }, []);

  const optimizations = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 1,
    keyExtractor: useCallback((e: any) => e.id, []),
    getItemLayout: useCallback(
      (_: any, index: any) => ({
        index,
        length: 525,
        offset: index * 500,
      }),
      [],
    ),
  };

  return (
    <StyledView className='mb-10'>
      <FlatList
        data={latest}
        style={{ borderRadius: 15, marginBottom: 12 }}
        renderItem={({ item }) => <Slide data={item} />}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
      <Pagination index={index} />
    </StyledView>
  );
};

export default Latest;
