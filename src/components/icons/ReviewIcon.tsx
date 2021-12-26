import React from 'react';
import { ReactComponent as ReviewSvg } from 'assets/icons/review.svg';
import { COLORS } from 'styles/Theme';

interface ReviewIconProps {
  size?: number;
  color?: string;
}

function ReviewIcon({ size = 16, color = `${COLORS.primary}` }: ReviewIconProps): JSX.Element {
  return <ReviewSvg width={size} height={size} fill={color} stroke={color} />;
}

export default ReviewIcon;
