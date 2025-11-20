import React from 'react';
import Card from '../components/Card';
import SimpleButton from '../components/SimpleButton';
export default function TradePage() {
  return (
    <div style={{ paddingTop: 8 }}>
      <h2>Trade</h2>
      <Card title='Quick Trade (paper)'>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input placeholder='Symbol (eg. BTC/USDT)' style={{ padding: 8, borderRadius: 6 }} />
          <input placeholder='Amount' style={{ padding: 8, borderRadius: 6 }} />
          <SimpleButton>Buy</SimpleButton>
          <SimpleButton>Sell</SimpleButton>
        </div>
      </Card>
    </div>
  );
}
