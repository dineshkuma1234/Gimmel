"use client"
const calculateMonthsAgo = (createdAt) => {
    if (!createdAt) {
        return 'Invalid date';
    }
 
    // Parse the date
    const createdDate = new Date(createdAt);
    if (isNaN(createdDate)) {
        console.error('Invalid createdAt format:', createdAt);
        return 'Invalid date';
    }
 
    const now = new Date();
 
    // Calculate year and month differences
    let yearsDiff = now.getFullYear() - createdDate.getFullYear();
    let monthsDiff = now.getMonth() - createdDate.getMonth();
 
    // Adjust for day difference
    const totalMonths = yearsDiff * 12 + monthsDiff;
    const isPartialMonth = now.getDate() < createdDate.getDate();
    const adjustedMonths = totalMonths - (isPartialMonth ? 1 : 0);
 
    // Return the result
    if (monthsDiff < 0) {
        yearsDiff -= 1;
        monthsDiff += 12;
    }
 
    if (yearsDiff > 0) {
        return `${yearsDiff} year${yearsDiff > 1 ? 's' : ''} ago`;
    } else if (monthsDiff > 0) {
        return `${monthsDiff} month${monthsDiff > 1 ? 's' : ''} ago`;
    } else {
        return 'Less than a month ago';
    }
};
function formatTime(timeString) {
    let parts = timeString.split(":").map(num => String(num).padStart(2, '0'));

    if (parts.length === 3 && parts[0] !== "00") {
        return parts.join(":"); // HH:MM:SS
    } else {
        return parts.slice(-2).join(":"); // MM:SS
    }
}

export { calculateMonthsAgo,formatTime};
