import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { rem } from 'utils/styles';
import useCheckOutside from 'hooks/useCheckOutside';
import DropdownIcon from 'components/icons/DropdownIcon';
import { COLORS, SHADOWS } from 'styles/Theme';

const Wrapper = styled.div<{
  width: number;
  icons: boolean | undefined | null;
  ref: any;
}>`
  width: ${({ width }) => width}px;
  min-width: 160px;
  max-width: ${({ icons }) => (icons ? '220px' : '160px')};
`;

const SelectBox = styled.div<{
  isActive: boolean;
  icons: boolean | undefined | null;
}>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ isActive }) => (isActive ? `${rem(10)} ${rem(10)} 0 0` : rem(10))};
  background: ${COLORS.white};
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: ${rem(12)};
  line-height: ${rem(18)};
  color: ${COLORS.black};
  padding: ${rem(8)} ${rem(12)} ${rem(8)} ${rem(16)};
  box-shadow: ${SHADOWS.primary};
  cursor: pointer;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;

  & > svg:first-child {
    margin-right: ${rem(8)};
  }
`;

const Options = styled.div<{
  isActive: boolean;
  width: number;
  icons: boolean | undefined | null;
}>`
  position: absolute;
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  width: ${({ width }) => width}px;
  min-width: 160px;
  max-width: ${({ icons }) => (icons ? '220px' : '160px')};
  border-radius: 0 0 ${rem(10)} ${rem(10)};
  background: ${COLORS.white};
  box-shadow: ${SHADOWS.primary};
`;

const Option = styled.div<{ disabled: boolean | undefined }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: ${rem(12)};
  line-height: ${rem(18)};
  color: ${({ disabled }) => (disabled ? COLORS.gray_02 : COLORS.black)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: ${rem(8)} ${rem(12)} ${rem(8)} ${rem(16)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${({ disabled }) => (disabled ? 'none' : COLORS.gray_01)};
    transition: ease 0.1s;
  }

  :last-child {
    border-radius: 0 0 ${rem(10)} ${rem(10)};
  }
`;

const Text = styled.div`
  width: 100%;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const HiddenBox = styled.div`
  width: 16px;
  height: 16px;
`;

export interface OptionData {
  value: string;
  icon?: ReactNode;
  disabled?: boolean | undefined;
}

interface SelectProps {
  width: number;
  icons?: boolean | undefined | null;
  options: OptionData[];
  selected: OptionData;
  handleSelect: (option: OptionData, close: () => void) => void;
}

export default function Dropdown({
  width,
  icons,
  options,
  selected,
  handleSelect,
}: SelectProps): JSX.Element {
  const { isActive, wrapperRef, handleClose, handleActive } = useCheckOutside();

  const filteredOptions = options.filter((option) => selected.value !== option.value);

  return (
    <Wrapper ref={wrapperRef} width={width} icons={icons}>
      <SelectBox onClick={handleActive} isActive={isActive} icons={icons}>
        <Text>{selected.value}</Text>
        <IconsWrapper>
          {icons && selected.icon}
          <DropdownIcon size={16} color={COLORS.gray_03} />
        </IconsWrapper>
      </SelectBox>
      <Options isActive={isActive} width={width} icons={icons}>
        {filteredOptions.map(
          (option: OptionData) =>
            selected !== option && (
              <Option
                key={option.value}
                disabled={option?.disabled}
                onClick={() => handleSelect(option, handleClose)}
              >
                <Text>{option.value}</Text>
                <IconsWrapper>
                  {icons && option.icon}
                  <HiddenBox />
                </IconsWrapper>
              </Option>
            ),
        )}
      </Options>
    </Wrapper>
  );
}
