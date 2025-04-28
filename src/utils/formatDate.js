export default function formatDate(dateInput) {
    const date = new Date(dateInput);
  
    if (isNaN(date)) {
      return "Invalid Date";
    }
  
    const day = date.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
  
    return `${day} ${month}, ${year}`;
  }