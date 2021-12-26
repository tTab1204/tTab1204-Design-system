import React from 'react';
import { ReactComponent as CheckSvg } from 'assets/icons/check.svg';

interface CheckIconProps {
  size: number;
  color: string;
}

function CheckIcon({ size, color }: CheckIconProps): JSX.Element {
  return <CheckSvg width={size} height={size} fill={color} stroke={color} strokeWidth="0.5" />;
}

export default CheckIcon;
