import {TextStyle, TouchableOpacityProps} from 'react-native';

export type TouchableOpacityPropsWithNoStyle = Omit<
  TouchableOpacityProps,
  'style'
>;

export type CustomButtonProps = TouchableOpacityPropsWithNoStyle & {
  title: string;
  style?: TextStyle;
};

export interface OnlyColor {
  color: string;
}
