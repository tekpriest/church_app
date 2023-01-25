import { useIsFocused } from '@react-navigation/core';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import Latest from '../components/Latest';
import assets from '../constants/assets';
import {
  StyledImage,
  StyledText,
  StyledView,
} from '../constants/styles';
import { colors, fonts, shadows, sizes } from '../constants/theme';

const FocusedStatusBar = (props: any) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={colors.black} />

      <StyledView className='px-5 mt-10'>
        <StyledView className='flex-row justify-between items-start mb-8'>
          <StyledView className='flex-col'>
            <StyledView>
              <StyledView className='h-1.5 w-[65] bg-zinc-400 mb-2 rounded-full' />
              <StyledView className='h-1.5 w-10 bg-zinc-400 mb-8 rounded-full' />
            </StyledView>
            <StyledText className='text-black text-4xl font-bold'>
              Home
            </StyledText>
          </StyledView>
          <StyledImage
            source={assets.user}
            className='w-16 h-16 -mt-1'
          />
        </StyledView>
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
      </StyledView>
    </SafeAreaView>
  );
};

export default Home;
