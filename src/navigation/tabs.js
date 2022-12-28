import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {icons, COLORS} from '../constants';
import {Home} from '../screens/Home';

import {Notification} from '../screens/Notification';
import {Search} from '../screens/Search';
import {Setting} from '../screens/Setting';
const {Navigator, Screen} = createBottomTabNavigator();

const tabOptions = {
  headerShown: false,
  showLabel: false,
  style: {
    height: '10%',
    backgroundColor: COLORS.black,
  },
};

export default Tabs = () => {
  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.black : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={{
                    tintColor,
                    width: 25,
                    heigth: 25,
                  }}
                />
              );
            case 'Search':
              return (
                <Image
                  source={icons.search_icon}
                  resizeMode="contain"
                  style={{
                    tintColor,
                    width: 25,
                    heigth: 25,
                  }}
                />
              );
            case 'Notification':
              return (
                <Image
                  source={icons.notification_icon}
                  resizeMode="contain"
                  style={{
                    tintColor,
                    width: 25,
                    heigth: 25,
                  }}
                />
              );
            case 'Setting':
              return (
                <Image
                  source={icons.menu_icon}
                  resizeMode="contain"
                  style={{
                    tintColor,
                    width: 25,
                    heigth: 25,
                  }}
                />
              );
          }
        },
      })}>
      <Screen component={Home} name="Home" options={tabOptions} />
      <Screen component={Search} name="Search" options={tabOptions} />
      <Screen
        component={Notification}
        name="Notification"
        options={tabOptions}
      />
      <Screen component={Setting} name="Setting" options={tabOptions} />
    </Navigator>
  );
};
