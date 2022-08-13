import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {CustomButtonProps} from './type';

const CustomButton: FC<CustomButtonProps> = ({title, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <Text {...props}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
