import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SettingScreen from './screens/SettingScreen';

//Screen names
const homeName = 'Home';
const detailsName = 'Blogs';
const settingsName = 'Setting';

const Tab = createBottomTabNavigator();

function MainContainer(){
    return(
        <NavigationContainer>
    <Tab.Navigator 
       initialRouteName={homeName}
       screenOptions={({route}) => ({
           tabBaricon:({focused, color, size}) =>{
               let iconName;
               let rn = route.name;

               if (rn == homeName) {
                   iconName=focused ? 'home' : 'home-outline';
               }else if (rn == detailName){
                   iconName = focused ? 'list' : 'list-outline';
               }else if (rn == settingName) {
                   iconName = focused ? 'setting' : 'setting-outline';
               }

               //you can return any component that you like here!
               return <Ionicons name={iconName} size={size} color={color}/>;
           }
       })}
       tabBarOptions={{
           activeTinColor: 'tomato',
           inactiveTinColor: 'gray',
           labelStyle: {paddingBottom: 10, fontSize: 10},
           style: {padding: 10, height: 70},
       }}>
        
       <Tab.Screen name={homeName} component={HomeScreen}/>
       <Tab.Screen name={detailsName} component={DetailScreen}/>
       <Tab.Screen name={settingsName} component={SettingScreen}/>
    
    </Tab.Navigator>
    </NavigationContainer>
    );
}
export default MainContainer