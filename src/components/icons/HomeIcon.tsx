import React from 'react';
import { ReactComponent as HomeSvg } from 'assets/icons/home.svg';
import { COLORS } from 'styles/Theme';

interface HomeIconProps {
  size?: number;
  color?: string;
}

function HomeIcon({ size = 16, color = `${COLORS.primary}` }: HomeIconProps): JSX.Element {
  return <HomeSvg width={size} height={size} fill={color} stroke={color} />;
}

export default HomeIcon;
