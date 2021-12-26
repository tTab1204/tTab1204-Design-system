import React from 'react';
import styled from 'styled-components';
import { COLORS, SHADOWS } from 'styles/Theme';
import { rem } from 'utils/styles';
import CheckIcon from './CheckIcon';
import Icons from './Icons';
import { defaultIconColor, iconSize } from 'constants/constants';
import DeleteIcon from './DeleteIcon';
import DropdownIcon from './DropdownIcon';
import HomeIcon from './HomeIcon';
import ProfileIcon from './ProfileIcon';
import ReviewIcon from './ReviewIcon';

export default {
  component: Icons,
  title: 'Components/Icons',
};

const IconContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  min-width: 120px;
  // 공부해야할 높이 속성
  height: 'max-content';
  border-radius: ${rem(6)};
  background: ${COLORS.white};
  box-shadow: ${SHADOWS.primary};
  overflow: hidden;
  margin: ${rem(8)};
  padding: ${rem(8)};
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  margin-bottom: ${rem(3)};
`;

const Text = styled.div`
  font-family: 'Pretendard';
  font-size: ${rem(11)};

  &:nth-child(4) {
    font-size: ${rem(10)};
    color: ${COLORS.gray_03};
    margin-bottom: ${rem(2)};
  }

  &:last-child {
    font-size: ${rem(10)};
    color: ${COLORS.primary};
  }
`;

const Divider = styled.div`
  min-width: 100%;
  height: 1px;
  background: ${COLORS.lightGray};
  margin: ${rem(8)} 0;
`;

const IconList = [
  { name: 'Check', icon: <CheckIcon size={iconSize} color={defaultIconColor} /> },
  { name: 'Delete', icon: <DeleteIcon size={iconSize} color={defaultIconColor} /> },
  { name: 'Dropdown', icon: <DropdownIcon size={iconSize} color={defaultIconColor} /> },
  { name: 'Home', icon: <HomeIcon size={iconSize} color={defaultIconColor} /> },
  { name: 'Profile', icon: <ProfileIcon size={iconSize} color={defaultIconColor} /> },
  { name: 'Review', icon: <ReviewIcon size={iconSize} color={defaultIconColor} /> },
];

export const Default = () => {
  return (
    <Icons>
      {IconList.map((item) => (
        <IconContainer>
          <IconWrapper>{item.icon}</IconWrapper>
          <Text>{item.name}</Text>
          <Divider />
          <Text>props:</Text>
          <Text>size, color</Text>
        </IconContainer>
      ))}
    </Icons>
  );
};
