import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2171356Navigator from '../features/BlankScreen2171356/navigator';
import BlankScreen1171355Navigator from '../features/BlankScreen1171355/navigator';
import BlankScreen0171354Navigator from '../features/BlankScreen0171354/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2171356: { screen: BlankScreen2171356Navigator },
BlankScreen1171355: { screen: BlankScreen1171355Navigator },
BlankScreen0171354: { screen: BlankScreen0171354Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
