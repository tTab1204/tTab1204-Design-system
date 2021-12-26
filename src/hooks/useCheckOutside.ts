import React, { useEffect, useState, useRef } from 'react';

function useCheckOutside() {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  const handleCheckOutside = (ref: React.RefObject<HTMLDivElement>) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const handleClickOutside = (event: { target: HTMLDivElement | any }) => {
        if (ref.current && !ref.current.contains(event.target)) {
          handleClose();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  handleCheckOutside(wrapperRef);

  return {
    isActive,
    wrapperRef,
    handleClose,
    handleActive,
  };
}

export default useCheckOutside;
