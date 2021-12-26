import React from 'react';
import styled from 'styled-components';
import { rem } from 'utils/styles';
import { COLORS } from 'styles/Theme';
import CheckIcon from 'components/icons/CheckIcon';

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CheckBox = styled.label<{ checked: boolean }>`
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1px solid ${COLORS.primary};
  background: ${({ checked }) => (checked ? `${COLORS.primary}` : `${COLORS.white}`)};
  border-radius: ${rem(3)};
  cursor: pointer;
  & > svg {
    position: absolute;
  }

  transition: ease 0.1s;
`;
const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const Label = styled.label`
  display: inline-block;
  font-family: 'Pretendard';
  line-height: ${rem(16)};
  padding-left: ${rem(6)};
  cursor: pointer;
`;
interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string | null;
}
export default function Checkbox({ id, checked, onChange, label }: CheckboxProps) {
  return (
    <CheckboxContainer>
      <CheckBox checked={checked} htmlFor={id}>
        <HiddenCheckbox id={id} type="checkbox" onChange={onChange} checked={checked} />
        <CheckIcon size={14} color={COLORS.white} />
      </CheckBox>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
    </CheckboxContainer>
  );
}
