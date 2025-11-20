import React from 'react';
import Card from '../components/Card';
export default function PortfolioPage() {
  return (
    <div style={{ paddingTop: 8 }}>
      <h2>Portfolio</h2>
      <Card title="Portfolio Overview">
        <div>
          <div>Positions: None</div>
          <div>Virtual Balance: <strong>,000</strong></div>
        </div>
      </Card>
    </div>
  );
}
