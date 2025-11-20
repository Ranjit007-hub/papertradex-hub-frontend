import React from 'react';
import Card from '../components/Card';
import SimpleButton from '../components/SimpleButton';
import Header from '../components/Header';
import Layout from '../components/Layout';
export default function Dashboard() {
  return (
    <Layout>
      <Header />
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
        <div>
          <Card title='Market Data (placeholder)'>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
              <div style={{ padding: 12, background: '#f8fafc', borderRadius: 6 }}>
                <strong>BTC/USDT</strong>
                <div>Price: —</div>
                <div>Change: —</div>
              </div>
              <div style={{ padding: 12, background: '#f8fafc', borderRadius: 6 }}>
                <strong>AAPL</strong>
                <div>Price: —</div>
                <div>Change: —</div>
              </div>
            </div>
          </Card>
          <Card title='Recent Trading Activity'>
            <div style={{ color: '#6b7280' }}>No activity yet — this will show recent simulated trades.</div>
          </Card>
        </div>
        <div>
          <Card title='Portfolio Summary'>
            <div style={{ marginBottom: 8 }}>
              <div>Virtual Balance: <strong>,000</strong></div>
              <div>Unrealized P/L: <strong>.00</strong></div>
            </div>
            <SimpleButton>View portfolio</SimpleButton>
          </Card>
          <Card title='Quick Actions'>
            <div style={{ display: 'flex', gap: 8 }}>
              <SimpleButton>Buy</SimpleButton>
              <SimpleButton>Sell</SimpleButton>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
