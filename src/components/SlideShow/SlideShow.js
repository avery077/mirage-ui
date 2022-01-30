import React, {useEffect, useState, useRef, useCallback} from 'react';
import { StyleSheet, ScrollView, View, Dimensions, Text, ActivityIndicator, Image } from 'react-native';

const SlideShow = (props) => {
  const [ dimension, setDimension ] = useState(Dimensions.get('window'));
  const [ selectedIndex, setSelectedIndex] = useState(0);

  const scrollRef = useRef();
  let intervalId = null;

  const onChange = () => {
    setDimension(Dimensions.get('window'));
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
  });

  const onSlideChange = useCallback(() => {
    const newIndex = selectedIndex === props.imageList?.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);

    scrollRef?.current?.scrollTo({
      animated: true,
      y: 0,
      x: dimension.width * newIndex,
    });
  }, [selectedIndex]);

  const startInterval = useCallback(() => {
    intervalId = setInterval(onSlideChange, 4000);
  }, [onSlideChange]);

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalId);
    };
  }, [onSlideChange]);

  const onTouchStart = () => {
    clearInterval(intervalId);
  };

  const onTouchEnd = () => {
    startInterval();
  };

  const setIndex = event => {
    let viewSize = event.nativeEvent.layoutMeasurement.width;
    let contentOffset = event.nativeEvent.contentOffset.x;
    let carouselIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(carouselIndex);
  };

  return (
    <View style={{width: dimension.width}}>
      <ScrollView
        horizontal
        ref={scrollRef}
        onMomentumScrollEnd={setIndex}
        showsHorizontalScrollIndicator={false}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        pagingEnabled>
        {props.imageList?.map((value, key) => (
          <Image
            source={{uri: `${value.url}`}}
            style={{width: dimension?.width, height: 350, resizeMode: 'cover'}}
            PlaceholderContent={<ActivityIndicator />}
          />
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          paddingBottom: 10
        }}>
        {props.imageList?.map((val, key) => (
          <Text
            key={key}
            style={[key === selectedIndex ? {color: 'white'} : {color: '#888'}, { marginLeft: 2, }]}>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SlideShow;