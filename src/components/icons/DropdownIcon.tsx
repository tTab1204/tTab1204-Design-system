import React from 'react';
import { ReactComponent as DropdownSvg } from 'assets/icons/dropdown.svg';
import { COLORS } from 'styles/Theme';

interface DropdownIconProps {
  size?: number;
  color?: string;
}

function DropdownIcon({ size = 16, color = `${COLORS.gray_02}` }: DropdownIconProps): JSX.Element {
  return <DropdownSvg width={size} height={size} fill={color} stroke={color} strokeWidth="0.5" />;
}

export default DropdownIcon;
