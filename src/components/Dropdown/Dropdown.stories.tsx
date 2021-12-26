/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react';
import Dropdown, { OptionData } from './Dropdown';
import HomeIcon from 'components/icons/HomeIcon';
import ReviewIcon from 'components/icons/ReviewIcon';
import ProfileIcon from 'components/icons/ProfileIcon';
import DeleteIcon from 'components/icons/DeleteIcon';

export default {
  component: Dropdown,
  title: 'Components/Dropdown',
};

export const Basic = () => {
  const options = [
    { value: 'option' },
    { value: 'option1' },
    { value: 'option2' },
    { value: 'option3' },
  ];

  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option: OptionData, handleClose: () => void) => {
    setSelected(option);
    handleClose();
  };

  return <Dropdown width={240} options={options} selected={selected} handleSelect={handleSelect} />;
};

export const WithIcon = () => {
  const options: OptionData[] = [
    { icon: <HomeIcon />, value: '아이콘과 함께1' },
    { icon: <ReviewIcon />, value: '아이콘과 함께2' },
    { icon: <ProfileIcon />, value: '아이콘과 함께3' },
    { icon: <DeleteIcon />, value: '비활성화된 옵션', disabled: true },
  ];
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option: OptionData, handleClose: () => void) => {
    if (!option.disabled) {
      setSelected(option);
      handleClose();
    }
  };

  return (
    <Dropdown
      width={220}
      icons={true}
      options={options}
      selected={selected}
      handleSelect={handleSelect}
    />
  );
};
