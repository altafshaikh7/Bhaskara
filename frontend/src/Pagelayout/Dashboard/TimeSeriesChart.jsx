import React, { useState, useEffect } from 'react'

const TimeSeriesChart = () => {
  const [selectedMetric, setSelectedMetric] = useState('voltage')
  const [timeRange, setTimeRange] = useState('1h')
  const [isLive, setIsLive] = useState(true)

  const metricOptions = [
    { value: 'voltage', label: 'Voltage (kV)' },
    { value: 'current', label: 'Current (A)' },
    { value: 'temperature', label: 'Temperature (°C)' },
    { value: 'frequency', label: 'Frequency (Hz)' }
  ]

  const timeRangeOptions = [
    { value: '15m', label: 'Last 15 minutes' },
    { value: '1h', label: 'Last 1 hour' },
    { value: '6h', label: 'Last 6 hours' },
    { value: '24h', label: 'Last 24 hours' }
  ]

  // Simple chart rendering without recharts
  const renderSimpleChart = () => {
    return (
      <div className="h-80 bg-gray-900 rounded-lg p-4 flex items-end justify-between">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div 
              className="w-4 bg-blue-500 rounded-t hover:bg-blue-400 transition-colors"
              style={{ height: `${30 + Math.sin(i * 0.5) * 20 + Math.random() * 10}px` }}
            />
            <span className="text-xs text-gray-500 mt-1">{i}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <span className="text-lg">📈</span>
          <h2 className="text-lg font-semibold text-white">Time Series Analysis</h2>
          {isLive && (
            <div className="flex items-center space-x-1 text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Live</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-3">
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="w-40 bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-white text-sm"
          >
            {metricOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="w-40 bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-white text-sm"
          >
            {timeRangeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button
            className={`px-3 py-1 rounded-lg text-sm flex items-center space-x-2 ${
              isLive 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600'
            }`}
            onClick={() => setIsLive(!isLive)}
          >
            <span>{isLive ? '⏸️' : '▶️'}</span>
            <span>{isLive ? 'Pause' : 'Resume'}</span>
          </button>
        </div>
      </div>
      <div className="p-4">
        {renderSimpleChart()}

        {/* Chart Controls */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <span>🕒</span>
              <span>Last updated: {new Date().toLocaleTimeString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>💾</span>
              <span>20 data points</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center space-x-2 text-sm">
              <span>📥</span>
              <span>Export</span>
            </button>
            <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center space-x-2 text-sm">
              <span>🔍</span>
              <span>Fullscreen</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeSeriesChart