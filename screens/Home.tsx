import { useIsFocused } from '@react-navigation/core';
import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import ActionCard from '../components/ActionCard';
import Latest from '../components/Latest';
import assets from '../constants/assets';
import {
  StyledImage,
  StyledText,
  StyledView,
} from '../constants/styles';
import { colors } from '../constants/theme';
import { Actions } from '../routes';

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
              <StyledView className='h-2 w-12.5 bg-zinc-400 mb-1.5 rounded-full' />
              <StyledView className='h-2 w-12 bg-zinc-400 mb-8 rounded-full' />
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
      </StyledView>
      <StyledView className='flex-1 px-5 -z-20 bg-gray-100 mt-2'>
        <FlatList
          data={Actions}
          numColumns={2}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ActionCard action={item} />}
        />
      </StyledView>
    </SafeAreaView>
  );
};

export default Home;
