import React from 'react';
import { ReactComponent as DeleteSvg } from 'assets/icons/delete.svg';
import { COLORS } from 'styles/Theme';

interface DeleteIconProps {
  size?: number;
  color?: string;
}

function DeleteIcon({ size = 16, color = `${COLORS.gray_02}` }: DeleteIconProps): JSX.Element {
  return <DeleteSvg width={size} height={size} fill={color} stroke={color} />;
}

export default DeleteIcon;
