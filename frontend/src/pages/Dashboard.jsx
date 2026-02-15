import React, { useEffect, useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    LineChart, Line, AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import {
    Users, UserCheck, MessageSquare, Target, Clock,
    Globe, Smartphone, Monitor, ArrowUpRight, ArrowDownRight,
    ChevronRight, Calendar, Filter, Download
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {
    const [overview, setOverview] = useState(null);
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [overviewRes, leadsRes] = await Promise.all([
                    fetch(`${API_BASE_URL}/analytics/overview`),
                    fetch(`${API_BASE_URL}/analytics/leads`)
                ]);
                const overviewData = await overviewRes.json();
                const leadsData = await leadsRes.json();

                setOverview(overviewData.data);
                setLeads(leadsData.data);
            } catch (error) {
                console.error('Dashboard Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    if (loading) return (
        <div className="flex h-screen items-center justify-center bg-neutral-950 text-white">
            <div className="animate-pulse text-xl">Loading Intelligence...</div>
        </div>
    );

    const stats = [
        { label: 'Total Visitors', value: overview?.totalVisitors || 0, icon: Users, color: 'blue' },
        { label: 'Unique Visitors', value: overview?.uniqueVisitors || 0, icon: UserCheck, color: 'green' },
        { label: 'Leads Generated', value: overview?.totalLeads || 0, icon: MessageSquare, color: 'purple' },
        { label: 'Conversion Rate', value: `${overview?.conversionRate || 0}%`, icon: Target, color: 'orange' },
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-200 p-8 space-y-8">
            <div className="flex justify-between items-center bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 backdrop-blur-md">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Lead Intelligence</h1>
                    <p className="text-neutral-500 mt-1">Real-time portfolio performance & visitor behavior</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg border border-neutral-700 transition">
                        <Calendar size={18} /> Last 7 Days
                    </button>
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition shadow-lg shadow-blue-900/20">
                        <Download size={18} /> Export Data
                    </button>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <Card key={i} className="bg-neutral-900 border-neutral-800 overflow-hidden group hover:border-neutral-700 transition">
                        <CardContent className="p-6 relative">
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-${stat.color}-500/10 blur-[40px] rounded-full group-hover:bg-${stat.color}-500/20 transition`} />
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-neutral-500 text-sm font-medium">{stat.label}</p>
                                    <h3 className="text-3xl font-bold mt-2 text-white">{stat.value}</h3>
                                </div>
                                <div className={`p-3 rounded-xl bg-${stat.color}-500/10 text-${stat.color}-500`}>
                                    <stat.icon size={24} />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-1 text-xs text-green-500 bg-green-500/10 w-fit px-2 py-1 rounded-full">
                                <ArrowUpRight size={12} /> 12% increase
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-neutral-900 border-neutral-800 p-6 h-[400px]">
                    <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                        <Monitor size={18} className="text-blue-500" /> Visitor Traffic (Last 7 Days)
                    </h3>
                    <ResponsiveContainer width="100%" height="80%">
                        <AreaChart data={overview?.dailyTraffic || []}>
                            <defs>
                                <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                            <XAxis dataKey="_id" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#171717', border: '1px solid #404040', borderRadius: '8px' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Area type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorCount)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </Card>

                <Card className="bg-neutral-900 border-neutral-800 p-6 h-[400px]">
                    <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                        <Globe size={18} className="text-green-500" /> Leads Table
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="text-neutral-500 border-b border-neutral-800">
                                <tr>
                                    <th className="pb-3 px-2">Name</th>
                                    <th className="pb-3 px-2">Score</th>
                                    <th className="pb-3 px-2">Intent</th>
                                    <th className="pb-3 px-2 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-800">
                                {leads.slice(0, 5).map((lead, i) => (
                                    <tr key={i} className="hover:bg-neutral-800/30 transition">
                                        <td className="py-4 px-2 font-medium text-white">{lead.name}</td>
                                        <td className="py-4 px-2">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-16 bg-neutral-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-blue-500 transition-all" style={{ width: `${lead.leadScore}%` }} />
                                                </div>
                                                <span className="text-xs">{lead.leadScore}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-2">
                                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${lead.intent === 'high' ? 'bg-green-500/10 text-green-500' :
                                                lead.intent === 'medium' ? 'bg-orange-500/10 text-orange-500' : 'bg-neutral-500/10 text-neutral-500'
                                                }`}>
                                                {lead.intent}
                                            </span>
                                        </td>
                                        <td className="py-4 px-2 text-right">
                                            <button className="text-neutral-400 hover:text-white"><ChevronRight size={18} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
