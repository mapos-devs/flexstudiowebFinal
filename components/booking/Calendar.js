"use client";

import { useState } from "react";
import styles from "@/styles/Booking.module.css";

export default function Calendar({ onSelectDate, selectedDate }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    // Get day of week (0-6, where 0 is Sunday)
    const day = new Date(year, month, 1).getDay();
    // Convert to Monday-based (1-7, where 1 is Monday)
    return day === 0 ? 7 : day;
  };

  const renderDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const prevMonth = new Date(year, month, 0);
    const daysInPrevMonth = getDaysInMonth(
      prevMonth.getFullYear(),
      prevMonth.getMonth()
    );

    const days = [];

    // Previous month days
    for (let i = firstDay - 1; i > 0; i--) {
      days.push({
        day: daysInPrevMonth - i + 1,
        isCurrentMonth: false,
        isPrevMonth: true,
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      days.push({
        day: i,
        isCurrentMonth: true,
        date: date,
      });
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows of 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        isNextMonth: true,
      });
    }

    return days;
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const handleSelectDate = (date) => {
    if (date) {
      onSelectDate(date);
    }
  };

  const isDateSelected = (date) => {
    if (!date || !selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHeader}>
        <h3 className={styles.calendarTitle}>
          {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <div className={styles.calendarNav}>
          <button className={styles.calendarNavButton} onClick={prevMonth}>
            &#8249;
          </button>
          <button className={styles.calendarNavButton} onClick={nextMonth}>
            &#8250;
          </button>
        </div>
      </div>

      <div className={styles.calendarGrid}>
        <div className={styles.calendarWeekdays}>
          {weekdays.map((day) => (
            <div key={day} className={styles.calendarWeekday}>
              {day}
            </div>
          ))}
        </div>

        <div className={styles.calendarDays}>
          {renderDays().map((day, index) => (
            <button
              key={index}
              className={`
                ${styles.calendarDay}
                ${!day.isCurrentMonth ? styles.otherMonth : ""}
                ${day.date && isDateSelected(day.date) ? styles.selected : ""}
                ${day.date && isToday(day.date) ? styles.today : ""}
              `}
              onClick={() => day.isCurrentMonth && handleSelectDate(day.date)}
              disabled={!day.isCurrentMonth}
            >
              {day.day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
