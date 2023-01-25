import { createStackNavigator } from '@react-navigation/stack';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Routes } from './routes';

const Stack = createStackNavigator();

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  const [loaded] = useFonts({
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
  });
  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'
      >
        {Routes.map((route, index) => (
          <Stack.Screen
            name={route.title}
            component={route.component}
            key={index}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
