import React from "react";
import ReactDOM from "react-dom";
import config from "./config";
import "./styles.css";
import manifestJson from "./manifest";

function App() {
  const fakeAppRoleId = () => {
    return "fake-role-id-" + Math.floor(Math.random() * 100 + 1);
  };

  const adGroupName = (accountName, ) => {

  }

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
            <td>AWS Account Id</td>
            <td>AD Group Name</td>            
            <td>AWS IAM Role</td>
          </tr>
        </thead>
        <tbody>
          {config.teams.map(team =>
            team.accounts.map(account =>
              config.roles.map(role => (                
                <tr>
                  <td>{account.id}</td>
                  <td>AWS-{config.departmentShortName}-{team.shortName}{account.name !== undefined ? "-" + account.name : ''}-{role}</td>                  
                  <td>{role}</td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
      <section>
        <h2>Manifest</h2>
        <div>
          <pre>{JSON.stringify(manifestJson(), null, 2)}</pre>
        </div>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
