import React from "react";
import { Icon } from "react-native-elements";

const MyIcon = props => {
  const { name, color, size, iconStyle } = props;
  return (
    <Icon
      name={name}
      size={size}
      color={color}
      iconStyle={iconStyle}
      type="font-awesome"
    />
  );
};

export default MyIcon;
