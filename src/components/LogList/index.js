import React from "react";
import PropTypes from "prop-types";
import { Container, Table, THead, TBody, TR, TH, TD } from "./styled";

export default function LogList({ logs }) {
  return (
    <Container>
      <Table>
        <THead>
          <TR>
            <TH>Division</TH>
            <TH>Issue ID</TH>
            <TH>Event</TH>
            <TH>Time</TH>
            <TH>User</TH>
          </TR>
        </THead>
        <TBody>
          {logs.map((log) => (
            <TR key={log.time}>
              <TD>{log.division}</TD>
              <TD>{log.issue_id}</TD>
              <TD>{log.event}</TD>
              <TD>{log.time}</TD>
              <TD>{log.user}</TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </Container>
  );
}

LogList.propTypes = {
  logs: PropTypes.arrayOf(
    PropTypes.shape({
      division: PropTypes.string.isRequired,
      issue_id: PropTypes.number.isRequired,
      event: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    })
  ).isRequired,
};

LogList.defaultProps = {
  logs: [],
};
