// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import MyProfile from './components/MyProfile';
import MyAccount from './components/MyAccount';
import Voucher from './components/Voucher';
import Transaction from './components/Transaction';
import Article from './components/Article';
import ArticleDetail from './components/ArticleDetail';
import Wallet from './components/Wallet';

const Tab = createBottomTabNavigator();
const ArticleStack = createStackNavigator();
const ProfileStack = createStackNavigator();

// Create a stack navigator for the Profile screens (MyProfile and MyAccount)
function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="My Profile" component={MyProfile} options={{ title: 'My Profile' }} />
      <ProfileStack.Screen name="My Account" component={MyAccount} options={{ title: 'My Account' }} />
    </ProfileStack.Navigator>
  );
}

// Create a stack navigator for the Article screens
function ArticleStackNavigator() {
  return (
    <ArticleStack.Navigator>
      <ArticleStack.Screen name="Article" component={Article} />
      <ArticleStack.Screen name="ArticleDetail" component={ArticleDetail} options={{ title: 'Article Details' }} />
    </ArticleStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="My Profile"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'My Profile':
                iconName = 'person';
                break;
              case 'Voucher':
                iconName = 'pricetag';
                break;
              case 'Transaction':
                iconName = 'swap-horizontal';
                break;
              case 'Article':
                iconName = 'document-text';
                break;
              case 'Wallet':
                iconName = 'wallet';
                break;
              default:
                iconName = 'card-outline';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        })} >
  
        <Tab.Screen name="My Profile" component={ProfileStackNavigator} options={{ headerShown: false }} />
        <Tab.Screen name="Voucher" component={Voucher} />
                <Tab.Screen name="Article" component={ArticleStackNavigator} options={{ headerShown: false }} />
        <Tab.Screen name="Transaction" component={Transaction} />
        <Tab.Screen name="Wallet" component={Wallet} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
