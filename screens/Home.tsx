import { useIsFocused } from '@react-navigation/core';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import Slide from '../components/Latest';
import Latest from '../components/Latest';
import assets from '../constants/assets';
import { latest } from '../constants/dummy';
import { colors, fonts, shadows, sizes } from '../constants/theme';

const FocusedStatusBar = (props: any) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={colors.black} />

      <View
        style={{
          paddingHorizontal: sizes.base * 2,
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'column' }}>
            <View
              style={{
                height: 6,
                width: 65,
                backgroundColor: colors.gray,
                marginBottom: 4,
                borderRadius: 100,
              }}
            />
            <View
              style={{
                height: 6,
                width: 35,
                backgroundColor: colors.gray,
                marginBottom: 20,
                borderRadius: 100,
              }}
            />
            <Text
              style={{
                fontSize: sizes.extraLarge + 7,
                color: colors.black,
                fontFamily: fonts.semiBold,
              }}
            >
              Home
            </Text>
          </View>
          <Image
            source={assets.user}
            style={{
              width: 68,
              height: 68,
              marginBottom: 40,
              paddingLeft: -sizes.extraLarge,
            }}
          />
        </View>
        <Latest />
        <View
          style={{
            width: '100%',
            borderRadius: sizes.large,
            ...shadows.medium,
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Text>Test</Text>
          <TextInput placeholder='Search...' style={{ flex: 1 }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
