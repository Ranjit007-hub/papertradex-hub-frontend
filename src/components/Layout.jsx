import React from 'react';
import theme from '../theme';
export default function Layout({ children }) {
  return (
    <div style={{ padding: theme.spacing.pagePadding, maxWidth: 1200, margin: '0 auto' }}>
      {children}
    </div>
  );
}
