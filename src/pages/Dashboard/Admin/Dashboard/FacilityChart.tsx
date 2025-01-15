"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const chartData = [
  { date: "2025-01-01", booking: 150 },
  { date: "2025-01-02", booking: 180 },
  { date: "2025-01-03", booking: 120 },
  { date: "2025-01-01", booking: 260 },
  { date: "2025-01-05", booking: 290 },
  { date: "2025-01-06", booking: 340 },
  { date: "2025-01-07", booking: 180 },
  { date: "2025-01-08", booking: 320 },
  { date: "2025-01-09", booking: 110 },
  { date: "2025-01-10", booking: 190 },
  { date: "2025-01-11", booking: 350 },
  { date: "2025-01-12", booking: 210 },
  { date: "2025-01-13", booking: 380 },
  { date: "2025-01-14", booking: 220 },
  { date: "2025-01-15", booking: 170 },
  { date: "2025-01-16", booking: 190 },
  { date: "2025-01-17", booking: 360 },
  { date: "2025-01-18", booking: 410 },
  { date: "2025-01-19", booking: 180 },
  { date: "2025-01-20", booking: 150 },
  { date: "2025-01-21", booking: 200 },
  { date: "2025-01-22", booking: 170 },
  { date: "2025-01-23", booking: 230 },
  { date: "2025-01-24", booking: 290 },
  { date: "2025-01-25", booking: 250 },
  { date: "2025-01-26", booking: 130 },
  { date: "2025-01-27", booking: 420 },
  { date: "2025-01-28", booking: 180 },
  { date: "2025-01-29", booking: 240 },
  { date: "2025-01-30", booking: 380 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  booking: {
    label: "Booking",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function FacilityChart() {
  const [timeRange, setTimeRange] = useState("30d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2025-01-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Bookings</CardTitle>
          <CardDescription>
            Showing total bookings for the last 30 days
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 30 days" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillBooking" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-booking)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-booking)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="booking"
              type="natural"
              fill="url(#fillBooking)"
              stroke="var(--color-booking)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
