import React from 'react';
import { MaskCover } from './Mask.styled';
import { MaskProps } from './types';

const Mask: React.FC<MaskProps> = ({ visible, onClick, color }) => {
  return <MaskCover visible={visible} onClick={onClick} color={color} />;
};

export default Mask;
