import { createStackNavigator, createAppContainer } from 'react-navigation';
import Homepage from '../Homepage';
import Profile from '../Profile';
import RoutineList from '../RoutineList';

const RouteStack = createStackNavigator({
    Homepage: { screen: Homepage },
    Profile: { screen: Profile },
    RoutineList: { screen: RoutineList},
});

const Router = createAppContainer(RouteStack);

export default Router;