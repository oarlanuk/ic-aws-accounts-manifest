import React from "react";
import ReactDOM from "react-dom";
import config from "./config";
import "./styles.css";
import manifestJson from "./manifest";

function App() {
  const fakeAppRoleId = () => {
    return "fake-role-id-" + Math.floor(Math.random() * 100 + 1);
  };

  return (
    <div className="App">
      <h1>{config.departmentDescription} AWS Accounts</h1>
      <p>
        {/* <button onClick={this.downloadFile}>Download Manifest</button> */}
        <button onClick={window.print}>Print</button>
      </p>
      <table>
        <thead>
          <tr key="header">
            <td>AD Group Name</td>
            <td>App Role Id</td>
            <td>AWS Account Id</td>
            <td>AWS IAM Role</td>
          </tr>
        </thead>
        <tbody>
          {config.teams.map(team =>
            team.accounts.map(account =>
              config.roles.map(role => (
                <tr>
                  <td>
                    {config.departmentShortName}-{team.shortName}-{account.name}
                    -{role}
                  </td>
                  <td>{fakeAppRoleId()}</td>
                  <td>{account.id}</td>
                  <td>{role}</td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
      <section>
        <h2>Manifest</h2>
        <textarea
          readOnly
          id="manifestTextArea"
          cols="80"
          rows="10"
          value={JSON.stringify(manifestJson(), null, 2)}
        />
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
