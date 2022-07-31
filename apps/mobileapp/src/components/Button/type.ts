import {ViewStyle, ButtonProps, StyleProp} from 'react-native';

export type CustomButtonProps = {
  isFullWidth?: boolean;
  buttonProps: ButtonProps;
  style?: StyleProp<ViewStyle> & {
    color: string;
  };
};
