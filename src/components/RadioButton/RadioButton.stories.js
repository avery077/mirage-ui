import React from 'react';
import {storiesOf} from '@storybook/react-native';

import RadioButton from './RadioButton';

storiesOf('RadioButton', module).add('example', () =>  
    <RadioButton
        color='red'
        style={{ color : "red" }}
        selected={false}
        text='test RadioButton'/>  
);