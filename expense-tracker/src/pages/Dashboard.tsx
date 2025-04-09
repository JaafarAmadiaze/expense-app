import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import * as Icons from "lucide-react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  // Expense data for line chart
  const expenseData = [
    { name: "Jan", expenses: 1800 },
    { name: "Feb", expenses: 1200 },
    { name: "Mar", expenses: 1600 },
    { name: "Apr", expenses: 1900 },
    { name: "May", expenses: 2100 },
    { name: "Jun", expenses: 2345.5 },
    { name: "Jul", expenses: 2000 },
  ];

  // Spending by category data
  const spendingData = [
    { name: "Food", value: 35 },
    { name: "Transport", value: 20 },
    { name: "Shopping", value: 15 },
    { name: "Bills", value: 25 },
    { name: "Other", value: 5 },
  ];

  // Recent transactions data
  const transactions = [
    {
      id: 1,
      description: "Grocery Store",
      category: "Food",
      date: "01/07/2023",
      amount: -84.32,
      icon: <Icons.ShoppingCart className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 2,
      description: "Monthly Salary",
      category: "Income",
      date: "01/07/2023",
      amount: 3500.00,
      icon: <Icons.DollarSign className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 3,
      description: "Netflix Subscription",
      category: "Entertainment",
      date: "30/06/2023",
      amount: -15.99,
      icon: <Icons.Tv className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 4,
      description: "Gas Station",
      category: "Transport",
      date: "29/06/2023",
      amount: -45.23,
      icon: <Icons.Car className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 5,
      description: "Restaurant",
      category: "Food",
      date: "28/06/2023",
      amount: -65.50,
      icon: <Icons.Utensils className="h-4 w-4 text-blue-500" />,
    },
  ];

  const COLORS = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE", "#DBEAFE"]; // Blue color palette

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Custom tooltip for pie chart
  const PieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-medium text-gray-900">{payload[0].name}</p>
          <p className="text-blue-600 font-semibold">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for line chart
  const LineTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-medium text-gray-900">{label}</p>
          <p className="text-blue-600 font-semibold">
            Expenses: {formatCurrency(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-1 p-6 space-y-6">
        {/* Main Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Balance Card */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-700">Total Balance</CardTitle>
              <Icons.Wallet className="h-5 w-5 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">$12,546.80</div>
              <p className="text-xs text-green-500 mt-1">+2.5% from last month</p>
              <p className="text-xs text-gray-500 mt-2">Sum of all your accounts</p>
            </CardContent>
          </Card>

          {/* Monthly Income Card */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-700">Monthly Income</CardTitle>
              <Icons.ArrowDownCircle className="h-5 w-5 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">$4,350.00</div>
              <p className="text-xs text-green-500 mt-1">+4.1% from last month</p>
            </CardContent>
          </Card>

          {/* Monthly Expenses Card */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-700">Monthly Expenses</CardTitle>
              <Icons.ArrowUpCircle className="h-5 w-5 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">$2,345.50</div>
              <p className="text-xs text-red-500 mt-1">-8.2% from last month</p>
            </CardContent>
          </Card>

          {/* Savings Rate Card */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-700">Savings Rate</CardTitle>
              <Icons.PiggyBank className="h-5 w-5 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">46.1%</div>
              <p className="text-xs text-green-500 mt-1">+5.4% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Expense Trend Chart */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-gray-800">Expense Trend</CardTitle>
              <CardDescription className="text-gray-500">
                Monthly expenses for the current year
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={expenseData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} stroke="#E5E7EB" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#6B7280' }}
                    axisLine={{ stroke: '#E5E7EB' }}
                  />
                  <YAxis 
                    tick={{ fill: '#6B7280' }}
                    axisLine={{ stroke: '#E5E7EB' }}
                  />
                  <Tooltip content={<LineTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ r: 4, fill: '#3B82F6' }}
                    activeDot={{ 
                      r: 6, 
                      fill: '#3B82F6',
                      stroke: '#fff',
                      strokeWidth: 2
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow rounded-xl">
  <CardHeader>
    <CardTitle className="text-gray-900 text-lg font-semibold text-center">
      Spending by Category
    </CardTitle>
    <CardDescription className="text-gray-500 text-center">
      Distribution of expenses by category
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex flex-col items-center h-[300px]">
      {/* Pie Chart */}
      <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={spendingData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              isAnimationActive={true}
            >
              {spendingData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<PieTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend horizontally */}
      <div className="w-full mt-4 overflow-x-auto">
        <div className="flex flex-nowrap justify-center gap-4 px-2">
          {spendingData.map((entry, index) => (
            <div
              key={entry.name}
              className="flex items-center space-x-2 p-1"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-sm text-gray-700 whitespace-nowrap">
                {entry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </CardContent>
</Card>

        </div>

        {/* Recent Transactions Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-gray-800">Recent Transactions</CardTitle>
            <CardDescription className="text-gray-500">
              Your most recent financial activity
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              {transactions.map((transaction) => (
                <div 
                  key={transaction.id} 
                  className="flex items-center p-4 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center justify-center p-2 rounded-full bg-blue-50 mr-3">
                    {transaction.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{transaction.description}</div>
                    <div className="text-sm text-gray-500">
                      {transaction.category} • {transaction.date}
                    </div>
                  </div>
                  <div className={`text-right font-medium ${
                    transaction.amount > 0 ? "text-green-600" : "text-red-600"
                  }`}>
                    {formatCurrency(transaction.amount)}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <Button 
                asChild
                variant="ghost" 
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 w-full"
              >
                <a href="/expenses">View All Transactions</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;