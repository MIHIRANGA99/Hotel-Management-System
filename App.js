import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ButtonComponent from './Screens/ButtonComponent';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';
import SampleCRUD from './Screens/SampleCRUD';
import TextFieldComponent from './Screens/TextFieldComponent';
import Welcome from './Screens/Welcome';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='Welcome' component={Welcome} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />

        {/* Components */}
        <Stack.Screen name='Button' component={ButtonComponent} />
        <Stack.Screen name='TextField' component={TextFieldComponent} />

        {/* remove this when project has done */}
        <Stack.Screen name='CRUD' component={SampleCRUD} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}