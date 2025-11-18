import React, { useState, useEffect } from 'react';

// Modern Icons as SVG Components
const Icons = {
  Analytics: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Brain: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Lightning: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Chart: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Target: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Refresh: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  Report: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Warning: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  TrendingUp: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  TrendingDown: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
    </svg>
  ),
  Stable: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
    </svg>
  )
};

// Mock ML and Backend Services
const MLBackendService = {
  analyzeSystemHealth: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const healthScore = Math.max(65, Math.min(98, 85 + (Math.random() - 0.5) * 20));
    
    return {
      healthScore: Math.round(healthScore),
      anomaliesDetected: Math.random() < 0.3,
      confidence: Math.round((Math.random() * 0.4 + 0.6) * 100),
      recommendations: [
        'Monitor transformer load distribution',
        'Check substation temperature levels',
        'Review phase balancing',
        'Schedule preventive maintenance'
      ].slice(0, 2 + Math.floor(Math.random() * 2)),
      riskLevel: healthScore >= 90 ? 'LOW' : healthScore >= 75 ? 'MEDIUM' : 'HIGH'
    };
  },

  getAssetStatus: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const assets = [
      { id: 'TR-001', name: 'Main Transformer', status: 'online', load: 78, health: 92 },
      { id: 'TR-002', name: 'Backup Transformer', status: 'online', load: 45, health: 88 },
      { id: 'SUB-01', name: 'Primary Substation', status: 'online', load: 82, health: 85 },
      { id: 'SUB-02', name: 'Secondary Substation', status: 'maintenance', load: 0, health: 76 }
    ];

    return {
      totalAssets: assets.length,
      onlineAssets: assets.filter(a => a.status === 'online').length,
      assets: assets,
      maintenanceScheduled: assets.filter(a => a.status === 'maintenance').length
    };
  },

  getPowerFlowMetrics: async () => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const baseLoad = 1247;
    const variation = (Math.random() - 0.5) * 100;
    
    return {
      powerFlow: Math.round(baseLoad + variation),
      loadFactor: Math.max(70, Math.min(85, 78.5 + (Math.random() - 0.5) * 5)),
      efficiency: Math.max(94, Math.min(98, 96.8 + (Math.random() - 0.5) * 1)),
      availability: Math.max(98, Math.min(99.9, 99.1 + (Math.random() - 0.5) * 0.5))
    };
  },

  getPredictiveAlerts: async () => {
    await new Promise(resolve => setTimeout(resolve, 600));
    const alerts = Math.random() < 0.4 ? [{
      id: 'ALT-001',
      severity: 'MEDIUM',
      asset: 'TR-001',
      message: 'Rising temperature trend detected',
      timestamp: new Date(Date.now() - 300000)
    }] : [];

    return alerts;
  }
};

const SystemStatusOverview = () => {
  const [systemMetrics, setSystemMetrics] = useState({
    overallHealth: 0,
    dataQuality: 99.2,
    connectionStatus: 'connecting',
    lastUpdate: new Date(),
    activeAlerts: 0,
    totalAssets: 0,
    onlineAssets: 0,
    maintenanceScheduled: 0
  });

  const [quickStats, setQuickStats] = useState([]);
  const [mlAnalysis, setMlAnalysis] = useState(null);
  const [assetStatus, setAssetStatus] = useState([]);
  const [predictiveAlerts, setPredictiveAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadSystemData = async () => {
    setIsLoading(true);
    try {
      const [healthAnalysis, assetStatus, powerMetrics, alerts] = await Promise.all([
        MLBackendService.analyzeSystemHealth(),
        MLBackendService.getAssetStatus(),
        MLBackendService.getPowerFlowMetrics(),
        MLBackendService.getPredictiveAlerts()
      ]);

      setSystemMetrics({
        overallHealth: healthAnalysis.healthScore,
        dataQuality: 99.2 + (Math.random() - 0.5) * 0.3,
        connectionStatus: 'connected',
        lastUpdate: new Date(),
        activeAlerts: alerts.length,
        totalAssets: assetStatus.totalAssets,
        onlineAssets: assetStatus.onlineAssets,
        maintenanceScheduled: assetStatus.maintenanceScheduled
      });

      setQuickStats([
        {
          id: 'power-flow',
          label: 'Power Flow',
          value: powerMetrics.powerFlow.toLocaleString(),
          unit: 'MW',
          trend: powerMetrics.powerFlow > 1247 ? 'up' : 'down',
          trendValue: `${((powerMetrics.powerFlow - 1247) / 1247 * 100).toFixed(1)}%`,
          status: 'healthy',
          icon: 'Lightning'
        },
        {
          id: 'load-factor',
          label: 'Load Factor',
          value: powerMetrics.loadFactor.toFixed(1),
          unit: '%',
          trend: Math.abs(powerMetrics.loadFactor - 78.5) < 0.5 ? 'stable' : powerMetrics.loadFactor > 78.5 ? 'up' : 'down',
          trendValue: `${(powerMetrics.loadFactor - 78.5).toFixed(1)}%`,
          status: 'healthy',
          icon: 'Chart'
        },
        {
          id: 'efficiency',
          label: 'Efficiency',
          value: powerMetrics.efficiency.toFixed(1),
          unit: '%',
          trend: powerMetrics.efficiency > 96.8 ? 'up' : 'down',
          trendValue: `${(powerMetrics.efficiency - 96.8).toFixed(1)}%`,
          status: 'healthy',
          icon: 'Target'
        },
        {
          id: 'availability',
          label: 'Availability',
          value: powerMetrics.availability.toFixed(1),
          unit: '%',
          trend: powerMetrics.availability > 99.1 ? 'up' : 'down',
          trendValue: `${(powerMetrics.availability - 99.1).toFixed(1)}%`,
          status: 'healthy',
          icon: 'Shield'
        }
      ]);

      setMlAnalysis(healthAnalysis);
      setAssetStatus(assetStatus.assets);
      setPredictiveAlerts(alerts);

    } catch (error) {
      setSystemMetrics(prev => ({ ...prev, connectionStatus: 'disconnected' }));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSystemData();
    const interval = setInterval(loadSystemData, 30000);
    return () => clearInterval(interval);
  }, []);

  const getHealthColor = (health) => {
    if (health >= 90) return 'text-green-500';
    if (health >= 75) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getHealthBgColor = (health) => {
    if (health >= 90) return '#10B981';
    if (health >= 75) return '#F59E0B';
    return '#EF4444';
  };

  const getTrendIcon = (trend) => {
    const IconComponent = trend === 'up' ? Icons.TrendingUp : trend === 'down' ? Icons.TrendingDown : Icons.Stable;
    return <IconComponent />;
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-green-500';
      case 'down': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'text-green-500';
      case 'maintenance': return 'text-yellow-500';
      case 'offline': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm">Loading system analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* System Health Overview */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
              <Icons.Brain />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">AI System Health</h2>
              <p className="text-sm text-gray-400">Real-time analytics & predictions</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
              systemMetrics.connectionStatus === 'connected' 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-red-500/20 text-red-400'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                systemMetrics.connectionStatus === 'connected' ? 'bg-green-500 animate-pulse' : 'bg-red-500'
              }`} />
              <span className="text-sm font-medium capitalize">{systemMetrics.connectionStatus}</span>
            </div>
            <div className="text-sm text-gray-400">
              {systemMetrics.lastUpdate.toLocaleTimeString()}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Health Score */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#374151" strokeWidth="8" fill="none" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  stroke={getHealthBgColor(systemMetrics.overallHealth)}
                  strokeWidth="8" 
                  fill="none"
                  strokeDasharray={`${systemMetrics.overallHealth * 2.51} 251`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className={`text-3xl font-bold ${getHealthColor(systemMetrics.overallHealth)}`}>
                  {systemMetrics.overallHealth}%
                </span>
                <span className="text-xs text-gray-400 mt-1">Health Score</span>
              </div>
            </div>
            
            {mlAnalysis && (
              <div className="space-y-2">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  mlAnalysis.riskLevel === 'LOW' ? 'bg-green-500/20 text-green-400' :
                  mlAnalysis.riskLevel === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {mlAnalysis.riskLevel} Risk
                </div>
                <div className="text-sm text-gray-400">
                  ML Confidence: {mlAnalysis.confidence}%
                </div>
              </div>
            )}
          </div>

          {/* Key Metrics */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                <div className="text-2xl font-bold text-blue-400">{systemMetrics.onlineAssets}/{systemMetrics.totalAssets}</div>
                <div className="text-sm text-gray-400 mt-1">Assets Online</div>
              </div>
              <div className="text-center p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                <div className="text-2xl font-bold text-green-400">{systemMetrics.dataQuality.toFixed(1)}%</div>
                <div className="text-sm text-gray-400 mt-1">Data Quality</div>
              </div>
              <div className="text-center p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                <div className="text-2xl font-bold text-purple-400">{systemMetrics.activeAlerts}</div>
                <div className="text-sm text-gray-400 mt-1">Active Alerts</div>
              </div>
              <div className="text-center p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                <div className="text-2xl font-bold text-yellow-400">{systemMetrics.maintenanceScheduled}</div>
                <div className="text-sm text-gray-400 mt-1">Maintenance</div>
              </div>
            </div>
          </div>

          {/* ML Recommendations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">AI Recommendations</h3>
            <div className="space-y-3">
              {mlAnalysis?.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-700/30 rounded-lg border border-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icons.Check />
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{rec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat) => {
          const IconComponent = Icons[stat.icon];
          return (
            <div
              key={stat.id}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-5 hover:border-gray-600 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700/50 rounded-lg">
                  <IconComponent />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${getTrendColor(stat.trend)}`}>
                  {getTrendIcon(stat.trend)}
                  <span className="font-medium">{stat.trendValue}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-gray-400">{stat.unit}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Asset & Alerts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Asset Monitoring */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Asset Monitoring</h3>
          <div className="space-y-3">
            {assetStatus.map((asset) => (
              <div key={asset.id} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    asset.status === 'online' ? 'bg-green-500' :
                    asset.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <div>
                    <div className="text-sm font-medium text-white">{asset.name}</div>
                    <div className="text-xs text-gray-400">{asset.id}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-white">{asset.load}% Load</div>
                  <div className="text-xs text-gray-400">Health: {asset.health}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Predictive Alerts */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Predictive Alerts</h3>
          <div className="space-y-3">
            {predictiveAlerts.length > 0 ? (
              predictiveAlerts.map((alert) => (
                <div key={alert.id} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Icons.Warning />
                      <span className="text-sm font-medium text-white">{alert.asset}</span>
                    </div>
                    <span className="text-xs px-2 py-1 bg-red-500 text-white rounded-full">
                      {alert.severity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">{alert.message}</p>
                  <div className="text-xs text-gray-400">
                    {alert.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Icons.Check />
                <p className="mt-2 text-sm">No critical alerts</p>
                <p className="text-xs">All systems operating normally</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* System Status Footer */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full animate-pulse ${
                systemMetrics.activeAlerts > 0 ? 'bg-red-500' : 'bg-green-500'
              }`} />
              <div>
                <span className="text-sm font-medium text-white">
                  {systemMetrics.activeAlerts > 0 
                    ? `${systemMetrics.activeAlerts} Active Alerts` 
                    : 'All Systems Normal'
                  }
                </span>
                <div className="text-xs text-gray-400">
                  Last updated: {systemMetrics.lastUpdate.toLocaleTimeString()}
                </div>
              </div>
            </div>
            
            {systemMetrics.maintenanceScheduled > 0 && (
              <div className="flex items-center space-x-2 text-sm text-yellow-400">
                <Icons.Warning />
                <span>{systemMetrics.maintenanceScheduled} maintenance scheduled</span>
              </div>
            )}
          </div>

          <div className="flex space-x-3">
            <button 
              onClick={loadSystemData}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              <Icons.Refresh />
              <span>Refresh</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium">
              <Icons.Report />
              <span>Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatusOverview;