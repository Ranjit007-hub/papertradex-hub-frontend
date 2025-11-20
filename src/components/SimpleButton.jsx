import React from 'react';
import theme from '../theme';

export default function SimpleButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 12px',
        borderRadius: 6,
        border: `1px solid ${theme.colors.primary}`,
        background: theme.colors.primary,
        color: '#fff',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
}
