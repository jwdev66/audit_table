import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Select, Option, Button } from "./styled";

export default function LogFilterForm({ events, handleFilter }) {
  const [event, setEvent] = useState(events[0]);
  const [issueID, setIssueID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter({ event: event, issue_id: issueID });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Select onChange={(e) => setEvent(e.target.value)}>
        {events.map((event) => (
          <Option value={event} key={event}>
            {event}
          </Option>
        ))}
      </Select>
      <Input
        type="text"
        placeholder="Issue ID"
        onChange={(e) => setIssueID(e.target.value)}
        value={issueID}
      />
      <Button type="submit">Search</Button>      
    </Form>
  );
}

LogFilterForm.propTypes = {
  handleFilter: PropTypes.func,
  events: PropTypes.arrayOf(PropTypes.string),
};

LogFilterForm.defaultProps = {
  handleFilter: () => {},
  events: [],
};
