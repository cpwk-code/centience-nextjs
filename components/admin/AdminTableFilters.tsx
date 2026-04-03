import { format } from "date-fns";
import { Search, Filter, CalendarIcon, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface AdminTableFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  filterValue?: string;
  onFilterChange?: (value: string) => void;
  filterOptions?: { value: string; label: string }[];
  filterPlaceholder?: string;
  secondFilterValue?: string;
  onSecondFilterChange?: (value: string) => void;
  secondFilterOptions?: { value: string; label: string }[];
  secondFilterPlaceholder?: string;
  dateRange?: DateRange;
  onDateRangeChange?: (range: DateRange) => void;
}

const AdminTableFilters = ({
  searchQuery,
  onSearchChange,
  searchPlaceholder = "Search...",
  filterValue,
  onFilterChange,
  filterOptions,
  filterPlaceholder = "Filter",
  secondFilterValue,
  onSecondFilterChange,
  secondFilterOptions,
  secondFilterPlaceholder = "Filter",
  dateRange,
  onDateRangeChange,
}: AdminTableFiltersProps) => {
  const handleClearDates = () => {
    onDateRangeChange?.({ from: undefined, to: undefined });
  };

  return (
    <div className="flex flex-col gap-4 p-4 border-b border-border">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
        {filterOptions && onFilterChange && (
          <Select value={filterValue} onValueChange={onFilterChange}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder={filterPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {filterOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        {secondFilterOptions && onSecondFilterChange && (
          <Select value={secondFilterValue} onValueChange={onSecondFilterChange}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder={secondFilterPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {secondFilterOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      {onDateRangeChange && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="text-sm text-muted-foreground whitespace-nowrap">Date range:</span>
          <div className="flex flex-wrap items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "w-[140px] justify-start text-left font-normal",
                    !dateRange?.from && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange?.from ? format(dateRange.from, "MMM d, yyyy") : "From"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dateRange?.from}
                  onSelect={(date) =>
                    onDateRangeChange({ ...dateRange, from: date, to: dateRange?.to })
                  }
                  disabled={(date) =>
                    date > new Date() || (dateRange?.to ? date > dateRange.to : false)
                  }
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>

            <span className="text-muted-foreground">to</span>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "w-[140px] justify-start text-left font-normal",
                    !dateRange?.to && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange?.to ? format(dateRange.to, "MMM d, yyyy") : "To"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dateRange?.to}
                  onSelect={(date) =>
                    onDateRangeChange({ ...dateRange, from: dateRange?.from, to: date })
                  }
                  disabled={(date) =>
                    date > new Date() || (dateRange?.from ? date < dateRange.from : false)
                  }
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>

            {(dateRange?.from || dateRange?.to) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearDates}
                className="h-8 px-2"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Clear dates</span>
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTableFilters;
