'use client';
import { useState, useMemo } from "react";

export interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface UseTablePaginationProps<T> {
  data: T[];
  searchFn: (item: T, query: string) => boolean;
  filterFn?: (item: T, filter: string) => boolean;
  secondFilterFn?: (item: T, filter: string) => boolean;
  dateField?: keyof T;
  defaultPageSize?: number;
}

interface UseTablePaginationReturn<T> {
  paginatedData: T[];
  filteredData: T[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
  searchQuery: string;
  filterValue: string;
  secondFilterValue: string;
  dateRange: DateRange;
  setCurrentPage: (page: number) => void;
  setPageSize: (size: number) => void;
  setSearchQuery: (query: string) => void;
  setFilterValue: (value: string) => void;
  setSecondFilterValue: (value: string) => void;
  setDateRange: (range: DateRange) => void;
}

export function useTablePagination<T>({
  data,
  searchFn,
  filterFn,
  secondFilterFn,
  dateField,
  defaultPageSize = 10,
}: UseTablePaginationProps<T>): UseTablePaginationReturn<T> {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  const [secondFilterValue, setSecondFilterValue] = useState("all");
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });

  const filteredData = useMemo(() => {
    let result = data;

    // Apply search filter
    if (searchQuery.trim()) {
      result = result.filter((item) => searchFn(item, searchQuery.toLowerCase()));
    }

    // Apply first filter
    if (filterFn && filterValue && filterValue !== "all") {
      result = result.filter((item) => filterFn(item, filterValue));
    }

    // Apply second filter
    if (secondFilterFn && secondFilterValue && secondFilterValue !== "all") {
      result = result.filter((item) => secondFilterFn(item, secondFilterValue));
    }

    // Apply date range filter
    if (dateField && (dateRange.from || dateRange.to)) {
      result = result.filter((item) => {
        const dateValue = item[dateField];
        if (!dateValue) return false;
        
        const itemDate = new Date(dateValue as string);
        
        if (dateRange.from && dateRange.to) {
          const fromStart = new Date(dateRange.from);
          fromStart.setHours(0, 0, 0, 0);
          const toEnd = new Date(dateRange.to);
          toEnd.setHours(23, 59, 59, 999);
          return itemDate >= fromStart && itemDate <= toEnd;
        } else if (dateRange.from) {
          const fromStart = new Date(dateRange.from);
          fromStart.setHours(0, 0, 0, 0);
          return itemDate >= fromStart;
        } else if (dateRange.to) {
          const toEnd = new Date(dateRange.to);
          toEnd.setHours(23, 59, 59, 999);
          return itemDate <= toEnd;
        }
        
        return true;
      });
    }

    return result;
  }, [data, searchQuery, filterValue, secondFilterValue, dateRange, searchFn, filterFn, secondFilterFn, dateField]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));

  // Reset to first page when filters change
  useMemo(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredData.length, pageSize]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
    setCurrentPage(1);
  };

  const handleSecondFilterChange = (value: string) => {
    setSecondFilterValue(value);
    setCurrentPage(1);
  };

  const handleDateRangeChange = (range: DateRange) => {
    setDateRange(range);
    setCurrentPage(1);
  };

  return {
    paginatedData,
    filteredData,
    currentPage,
    totalPages,
    pageSize,
    searchQuery,
    filterValue,
    secondFilterValue,
    dateRange,
    setCurrentPage,
    setPageSize: handlePageSizeChange,
    setSearchQuery: handleSearchChange,
    setFilterValue: handleFilterChange,
    setSecondFilterValue: handleSecondFilterChange,
    setDateRange: handleDateRangeChange,
  };
}
