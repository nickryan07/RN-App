import { createStackNavigator, createAppContainer } from 'react-navigation';
import Homepage from '../Login/Homepage';
import CreateAccount from '../Login/CreateAccount';
import Profile from '../Profile';
import RoutineList from '../RoutineList';

const RouteStack = createStackNavigator({
    Homepage: { screen: Homepage },
    CreateAccount: {screen: CreateAccount },
    Profile: { screen: Profile },
    RoutineList: { screen: RoutineList},
});

const Router = createAppContainer(RouteStack);

export default Router;