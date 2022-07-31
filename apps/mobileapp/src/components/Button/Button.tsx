import React, {FC} from 'react';
import {View, Button, StyleProp, ViewStyle} from 'react-native';

import {CustomButtonProps} from './type';

const CustomButton: FC<CustomButtonProps> = ({
  style,
  buttonProps,
  isFullWidth,
}) => {
  const buttonStyle: StyleProp<ViewStyle> = {
    ...(style as Object),
    alignSelf: !isFullWidth ? 'flex-start' : undefined,
  };

  return (
    <View style={buttonStyle}>
      <Button {...buttonProps} color={style?.color} />
    </View>
  );
};

export default CustomButton;
