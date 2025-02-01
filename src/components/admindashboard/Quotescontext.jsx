import React, { createContext, useState } from "react";

// Create a context
export const QuotesContext = createContext();

// Context provider component
export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([]);

  // Function to add a new quote
  const addQuote = (quote) => {
    setQuotes((prevQuotes) => [
      ...prevQuotes,
      { id: prevQuotes.length + 1, name: quote.destination, status: "Pending" },
    ]);
  };

  return (
    <QuotesContext.Provider value={{ quotes, addQuote }}>
      {children}
    </QuotesContext.Provider>
  );
};