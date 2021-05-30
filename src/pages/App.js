import React, { useState, useEffect, useMemo } from "react";
import { LogList, NavBar, LogFilterForm, LoginForm } from "components";
import { Container, BodyContainer } from "./styled";
import { getLogByUser } from "API";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [logs, setLogs] = useState([]);  
  const [filters, setFilters] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    if (currentUser)
      getLogByUser(currentUser.username).then((logs) => {
        setLogs(logs);        
      });
  }, [currentUser]);

  const filteredLogs = useMemo(() => {
    if (filters)
      return logs.filter(
        (log) =>
          (!filters.event ||
            filters.event === "All" ||
            log.event === filters.event) &&
          (!filters.issue_id || log.issue_id === parseInt(filters.issue_id))
      );
    return logs;
  }, [logs, filters]);

  const events = useMemo(() => ["All", ...new Set(logs.map((log) => log.event))], [logs]);

  const handleLogout = () => {
    setCurrentUser(null);
    setLogs([]);    
    setFilters(null);
  };

  const handleAuth = () => {
    if (currentUser) handleLogout();
    else setIsLoginModalOpen(true);
  };

  return (
    <Container>
      <NavBar handleAuth={() => handleAuth()} isLogged={!!currentUser} />
      <BodyContainer>
        <LogFilterForm
          events={events}
          handleFilter={(filters) => setFilters(filters)}
        />
        <LogList logs={filteredLogs} />
      </BodyContainer>
      <LoginForm
        isLoginModalOpen={isLoginModalOpen}
        handleCloseModal={() => setIsLoginModalOpen(false)}
        handleLogin={(user) => setCurrentUser(user)}
      />
    </Container>
  );
}
