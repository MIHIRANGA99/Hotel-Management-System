import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ButtonComponent from './Screens/Components/ButtonComponent';
import Home from './Screens/Home';
import HotelCardComponent from './Screens/Components/HotelCardComponent';
import Login from './Screens/Login';
import Register from './Screens/Register';
import SampleCRUD from './Screens/SampleCRUD';
import TextFieldComponent from './Screens/Components/TextFieldComponent';
import Welcome from './Screens/Welcome';
import Dashboard from './Screens/Admin/Dashboard';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='Welcome' component={Welcome} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='AdminDB' options={{title: 'Admin Dashboard'}} component={Dashboard} />

        {/* Components */}
        <Stack.Screen name='Button' component={ButtonComponent} />
        <Stack.Screen name='TextField' component={TextFieldComponent} />
        <Stack.Screen name='HotelCard' component={HotelCardComponent} />

        {/* remove this when project has done */}
        <Stack.Screen name='CRUD' component={SampleCRUD} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}