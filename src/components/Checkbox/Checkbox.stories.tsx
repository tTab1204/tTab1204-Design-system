import React, { useState } from 'react';
import Checkbox from './Checkbox';
export default {
  component: Checkbox,
  title: 'Components/Checkbox',
};
export const Basic = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  return <Checkbox id="checkbox" checked={isChecked} onChange={onChange} />;
};
export const Labeled = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  return <Checkbox id="checkbox_labeled" checked={isChecked} onChange={onChange} label="주영" />;
};
