import React, { useState, useEffect } from "react";
import { 
  FiChevronDown, 
  FiChevronUp
} from "react-icons/fi";

const Table = ({
  columns,
  data,
  renderRow,
  initialSortField = null,
  initialSortDirection = 'asc',
  onSortChange = () => {},
  selectedRows = {},
  onSelectRow = () => {},
  onSelectAll = () => {},
  headerColor = "#8E8E8E"
}) => {
  const [sortField, setSortField] = useState(initialSortField);
  const [sortDirection, setSortDirection] = useState(initialSortDirection);
  const [sortedData, setSortedData] = useState([...data]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    // If sorting is active, sort the data
    if (sortField) {
      const sorted = [...data].sort((a, b) => {
        if (a[sortField] < b[sortField]) {
          return sortDirection === 'asc' ? -1 : 1;
        }
        if (a[sortField] > b[sortField]) {
          return sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
      setSortedData(sorted);
    } else {
      setSortedData([...data]);
    }
  }, [data, sortField, sortDirection]);

  useEffect(() => {
    // Notify parent about sort changes
    onSortChange({ field: sortField, direction: sortDirection });
  }, [sortField, sortDirection, onSortChange]);

  const handleSort = (field) => {
    const newDirection = field === sortField && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortDirection(newDirection);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    onSelectAll(newSelectAll, sortedData);
  };

  return (
    <div className="w-full bg-gray-50 rounded-[10px] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className={`border-b text-sm bg-[${headerColor}]`}>
              {columns.map((column, index) => (
                <th key={index} className={`py-3 px-2.5 text-left font-bold text-black ${column.widthClass || ''}`}>
                  {column.type === 'checkbox' ? (
                    <input 
                      type="checkbox" 
                      className="h-4 w-4"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  ) : (
                    column.sortable ? (
                      <button 
                        className="flex items-center w-full" 
                        onClick={() => handleSort(column.field)}
                      >
                        {column.label}
                        {sortField === column.field ? (
                          sortDirection === 'asc' ? 
                            <FiChevronUp className="ml-1 h-4 w-4" /> : 
                            <FiChevronDown className="ml-1 h-4 w-4" />
                        ) : (
                          <FiChevronDown className="ml-1 h-4 w-4 font-bold" />
                        )}
                      </button>
                    ) : (
                      <div className="flex items-center">
                        {column.label}
                      </div>
                    )
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row) => renderRow(row, selectedRows, onSelectRow))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;