import React from 'react';
import { Arrow } from './styles/ArrowButton';

const ArrowButton = ({ callback, children }) => (
<Arrow onClick={callback}>{children}</Arrow>
);

export default ArrowButton;