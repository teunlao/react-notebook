import { ResizableBox } from 'react-resizable';
import React from 'react';
import './resizable.css';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  return (
    <ResizableBox width={300} height={300} resizeHandles={['s']}>
      {children}
    </ResizableBox>
  );
};

export default Resizable;
