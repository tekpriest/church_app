import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { latest } from '../constants/dummy';
import { ILatest } from '../constants/interface';
import { colors, fonts, sizes } from '../constants/theme';

interface LatestProps {
  data: ILatest;
}

const Pagination = (props: { index: number }) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 30,
        left: 38,
        width: '100%',
        borderRadius: 4,
        marginHorizontal: 2,
        flexDirection: 'row',
      }}
    >
      {latest.map((_, i) => (
        <View
          key={i}
          style={[
            {
              width: 8,
              height: 8,
              borderRadius: 8,
              marginHorizontal: 2,
            },
            props.index === i
              ? {
                  backgroundColor: colors.primary,
                  width: 28,
                  height: 8,
                  borderRadius: 8,
                }
              : {
                  borderRadius: 100,
                  backgroundColor: colors.white,
                },
          ]}
        />
      ))}
    </View>
  );
};

const Slide = (props: LatestProps) => {
  const { data } = props;
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <Image
        source={{ uri: data.image }}
        resizeMode='cover'
        style={{
          height: 280,
          width: 374,
        }}
      />
      <LinearGradient
        colors={['#000000', 'transparent']}
        style={{
          zIndex: 4,
          height: '45%',
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}
        start={{ x: 0, y: 1.5 }}
        end={{ x: 0, y: 0 }}
      />
      <View
        style={{
          position: 'absolute',
          padding: 10,
          bottom: 24,
          left: 10,
          zIndex: 4,
        }}
      >
        {data.id === 0 ? (
          <View
            style={{
              backgroundColor: colors.primary,
              padding: 5,
              width: 60,
              alignItems: 'center',
              borderRadius: 7,
            }}
          >
            <Text
              style={{
                fontFamily: fonts.medium,
                color: colors.white,
                fontSize: sizes.medium,
              }}
            >
              Latest
            </Text>
          </View>
        ) : null}
        <Text
          style={{
            fontFamily: fonts.medium,
            color: colors.white,
          }}
        >
          {data.title}
        </Text>
      </View>
    </View>
  );
};

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

  useEffect(() => {
    console.warn(index);
  }, [index]);

  const optimizations = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((e: any) => e.id, []),
    getItemLayout: useCallback(
      (_: any, index: any) => ({
        index,
        length: 400,
        offset: index * 400,
      }),
      [],
    ),
  };

  return (
    <>
      <FlatList
        data={latest}
        style={{ borderRadius: 15 }}
        renderItem={({ item }) => <Slide data={item} />}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        {...optimizations}
      />
      <Pagination index={index} />
    </>
  );
};

export default Latest;
