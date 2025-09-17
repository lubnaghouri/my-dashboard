
import React from 'react'
import { Card, Statistic, Row, Col } from 'antd'
import { Line, Bar } from '@ant-design/charts'

const userGrowthData = [
  { month: 'Jan', users: 120 },
  { month: 'Feb', users: 200 },
  { month: 'Mar', users: 350 },
  { month: 'Apr', users: 400 },
  { month: 'May', users: 600 },
  { month: 'Jun', users: 750 },
]

const salesData = [
  { product: 'Product A', sales: 240 },
  { product: 'Product B', sales: 380 },
  { product: 'Product C', sales: 150 },
  { product: 'Product D', sales: 420 },
]

const lineConfig = {
  data: userGrowthData,
  xField: 'month',
  yField: 'users',
  point: { size: 5, shape: 'diamond' },
  color: '#1677ff',
  smooth: true,
  height: 220,
}

const barConfig = {
  data: salesData,
  xField: 'product',
  yField: 'sales',
  color: '#52c41a',
  height: 220,
}

function Analytics() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Analytics Dashboard</h1>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card className="shadow-lg">
            <Statistic
              title="Active Users"
              value={750}
              valueStyle={{ color: '#1677ff' }}
              suffix="/ month"
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="shadow-lg">
            <Statistic
              title="Total Sales"
              value={1190}
              valueStyle={{ color: '#52c41a' }}
              prefix="$"
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="shadow-lg">
            <Statistic
              title="Conversion Rate"
              value={12.5}
              precision={2}
              valueStyle={{ color: '#faad14' }}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={[24, 24]} className="mt-8">
        <Col xs={24} md={12}>
          <Card title="User Growth" className="shadow-lg">
            <Line {...lineConfig} />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Sales by Product" className="shadow-lg">
            <Bar {...barConfig} />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Analytics