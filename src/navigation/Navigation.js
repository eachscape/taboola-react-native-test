import * as React from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import Taboola from '../components/Taboola';
import Config from 'react-native-config';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

function HomeScreen() {

  console.log(Config.TABOOLA_MODE, Config.TABOOLA_MODE_FRONTDOOR);
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={{flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}>
        <Taboola 
          viewId={'1233412'} 
          mode={Config.TABOOLA_MODE_FRONTDOOR || Config.TABOOLA_MODE}
          publisher={Config.TABOOLA_PUBLISHER_FRONTDOOR || Config.TABOOLA_PUBLISHER}
          pageUrl={Config.TABOOLA_PAGEURL_FRONTDOOR || Config.TABOOLA_PAGEURL} 
          placement={Config.TABOOLA_PLACEMENT_FRONTDOOR || Config.TABOOLA_PLACEMENT}
          pageType={Config.TABOOLA_PAGETYPE_FRONTDOOR || Config.TABOOOLA_PAGETYPE}
          targetType={Config.TABOOLA_TARGETTYPE_FRONTDOOR || Config.TABOOLA_TARGETTYPE}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function ArticleScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={{flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}>
      <Taboola 
          viewId={'317232'} 
          mode={Config.TABOOLA_MODE_ARTICLE || Config.TABOOLA_MODE}
          publisher={Config.TABOOLA_PUBLISHER_ARTICLE || Config.TABOOLA_PUBLISHER}
          pageUrl={Config.TABOOLA_PAGEURL_ARTICLE || Config.TABOOLA_PAGEURL} 
          placement={Config.TABOOLA_PLACEMENT_ARTICLE || Config.TABOOLA_PLACEMENT}
          pageType={Config.TABOOLA_PAGETYPE_ARTICLE || Config.TABOOOLA_PAGETYPE}
          targetType={Config.TABOOLA_TARGETTYPE_ARTICLE || Config.TABOOLA_TARGETTYPE}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function MoreScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={{flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}>
        <Taboola 
          viewId={'231287'} 
          mode={Config.TABOOLA_MODE_SECTION || Config.TABOOLA_MODE}
          publisher={Config.TABOOLA_PUBLISHER_SECTION || Config.TABOOLA_PUBLISHER}
          pageUrl={Config.TABOOLA_PAGEURL_SECTION || Config.TABOOLA_PAGEURL} 
          placement={Config.TABOOLA_PLACEMENT_SECTION || Config.TABOOLA_PLACEMENT}
          pageType={Config.TABOOLA_PAGETYPE_SECTION || Config.TABOOOLA_PAGETYPE}
          targetType={Config.TABOOLA_TARGETTYPE_SECTION || Config.TABOOLA_TARGETTYPE}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Article" component={ArticleScreen} />
            <Tab.Screen name="More" component={MoreScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}