import React from 'react';
import {storiesOf} from '@storybook/react-native';

import SlideShow from './SlideShow';

const imageList = [
    {url: 'https://picsum.photos/1280/250'},
    {url: 'https://picsum.photos/1281/250'},
    {url: 'https://picsum.photos/1282/250'},
    {url: 'https://picsum.photos/1283/250'},
    {url: 'https://picsum.photos/1284/250'},
  ]

storiesOf('SlideShow', module).add('example', () => <SlideShow imageList={[]}/>);