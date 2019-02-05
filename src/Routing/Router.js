import { createStackNavigator, createAppContainer } from 'react-navigation';
import Homepage from '../Login/Homepage';
import CreateAccount from '../Login/CreateAccount';
import Profile from '../Users/Profile';
import RoutineList from '../Routines/RoutineList';
import Routine from '../Routines/Routine';

const RouteStack = createStackNavigator({
    Homepage: { screen: Homepage },
    CreateAccount: {screen: CreateAccount },
    Profile: { screen: Profile },
    RoutineList: { screen: RoutineList},
    Routine: {screen: Routine},
});

const Router = createAppContainer(RouteStack);

export default Router;