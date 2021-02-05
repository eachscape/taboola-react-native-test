import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import RNTaboolaView from '@taboola/react-native-taboola';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export default function Taboola({
    viewID, 
    mode, 
    publisher, 
    pageUrl, 
    placement, 
    pageType,
    targetType
}) {

    const isFocused = useIsFocused();
    const [taboolaHeight, setTaboolaHeight] = React.useState(0);
    const _onLoadSuccess = ({nativeEvent}) => {
      setTaboolaHeight(parseInt(nativeEvent.height));
    }
  
    React.useEffect(()=> {
      if(!isFocused) {
        setTaboolaHeight(0);
      }
    }, [isFocused]);

    return isFocused && 
      (<RNTaboolaView
          viewID={viewID}
          mode={mode}
          publisher={publisher}
          pageType = {pageType}
          pageUrl = {pageUrl}
          placement = {placement}
          targetType ={targetType}
          scrollEnabled = {true}
          interceptScroll = {true}
          taboolaHandleOrganicClick = {true}
          style={{...styles.taboola, height: taboolaHeight}}
          onDidLoad={_onLoadSuccess}
          onDidFailToLoad = {
            (event) => {
                console.warn('onRenderFail placementName: ' + event.nativeEvent.placementName);
                console.warn('onRenderFail error: ' + event.nativeEvent.error);
            }
          }
      />)
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: SCREEN_WIDTH
    },
    taboola: {
      flex: 1,
      width: SCREEN_WIDTH
    }
  });