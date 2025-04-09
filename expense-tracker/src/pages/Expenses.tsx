import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Input } from "../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { ArrowUpDown, Search } from "lucide-react";
import Navbar from "../components/Navbar";

function Transactions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedAccount, setSelectedAccount] = useState("All Accounts");
  const [selectedTime, setSelectedTime] = useState("All Time");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' }>({ 
    key: 'date', 
    direction: 'descending' 
  });

  // Sample transaction data matching the image
  const transactions = [
    {
      id: 1,
      date: "07/04/2025",
      description: "Payment",
      category: "Housing",
      account: "Savings Account",
      amount: -45.00,
    },
    {
      id: 2,
      date: "06/04/2025",
      description: "Walmart",
      category: "Shopping",
      account: "Personal Checking",
      amount: -13.00,
    },
    {
      id: 3,
      date: "05/04/2025",
      description: "Salary Payment",
      category: "Income",
      account: "Investment Portfolio",
      amount: 1582.00,
    },
    {
      id: 4,
      date: "04/04/2025",
      description: "Video Games",
      category: "Entertainment",
      account: "Savings Account",
      amount: -8.00,
    },
    {
      id: 5,
      date: "04/04/2025",
      description: "Salary Payment",
      category: "Income",
      account: "Active Windows Investment Portfolio",
      amount: 1898.00,
    },
    {
      id: 6,
      date: "03/04/2025",
      description: "Grocery Store",
      category: "Food & Dining",
      account: "Investment Portfolio",
      amount: -122.00,
    },
  ];

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortConfig.key === 'date') {
      // Convert dates to timestamps for comparison
      const dateA = new Date(a.date.split('/').reverse().join('-')).getTime();
      const dateB = new Date(b.date.split('/').reverse().join('-')).getTime();
      return sortConfig.direction === 'ascending' ? dateA - dateB : dateB - dateA;
    } else if (sortConfig.key === 'amount') {
      return sortConfig.direction === 'ascending' 
        ? a.amount - b.amount 
        : b.amount - a.amount;
    }
    return 0;
  });

  const filteredTransactions = sortedTransactions.filter(transaction => {
    // Filter by search query
    if (searchQuery && !transaction.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    // Filter by category
    if (selectedCategory !== "All Categories" && transaction.category !== selectedCategory) {
      return false;
    }
    // Filter by account
    if (selectedAccount !== "All Accounts" && transaction.account !== selectedAccount) {
      return false;
    }
    return true;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 p-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Transactions</h1>
          
          {/* Filter Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filter Transactions</CardTitle>
              <p className="text-sm text-muted-foreground">
                Narrow down your transactions with these filters
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search transactions..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full">
                      {selectedCategory}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setSelectedCategory("All Categories")}>
                      All Categories
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedCategory("Housing")}>
                      Housing
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedCategory("Shopping")}>
                      Shopping
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedCategory("Income")}>
                      Income
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedCategory("Entertainment")}>
                      Entertainment
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedCategory("Food & Dining")}>
                      Food & Dining
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full">
                      {selectedAccount}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setSelectedAccount("All Accounts")}>
                      All Accounts
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedAccount("Savings Account")}>
                      Savings Account
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedAccount("Personal Checking")}>
                      Personal Checking
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedAccount("Investment Portfolio")}>
                      Investment Portfolio
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full">
                      {selectedTime}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setSelectedTime("All Time")}>
                      All Time
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedTime("This Month")}>
                      This Month
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedTime("Last Month")}>
                      Last Month
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedTime("Last 3 Months")}>
                      Last 3 Months
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full">
                      {selectedStatus}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setSelectedStatus("All")}>
                      All
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedStatus("Completed")}>
                      Completed
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedStatus("Pending")}>
                      Pending
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedStatus("Failed")}>
                      Failed
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>

          {/* Transaction Count */}
          <div className="text-sm text-muted-foreground">
            {filteredTransactions.length} transactions found
          </div>

          {/* Transactions Table */}
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[120px]">
                      <Button
                        variant="ghost"
                        onClick={() => requestSort('date')}
                        className="p-0"
                      >
                        Date
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Account</TableHead>
                    <TableHead className="text-right">
                      <Button
                        variant="ghost"
                        onClick={() => requestSort('amount')}
                        className="p-0"
                      >
                        Amount
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.date}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.category}</TableCell>
                      <TableCell>{transaction.account}</TableCell>
                      <TableCell className={`text-right ${
                        transaction.amount >= 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {formatCurrency(transaction.amount)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Transactions;