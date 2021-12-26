import React from 'react';
import { ReactComponent as ProfileSvg } from 'assets/icons/profile.svg';
import { COLORS } from 'styles/Theme';

interface ProfileIconProps {
  size?: number;
  color?: string;
}

function ProfileIcon({ size = 16, color = `${COLORS.primary}` }: ProfileIconProps): JSX.Element {
  return <ProfileSvg width={size} height={size} fill={color} stroke={color} />;
}

export default ProfileIcon;
