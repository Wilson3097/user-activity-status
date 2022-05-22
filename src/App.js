import "./App.css";
import { UserActivity } from "./userActivity";
function App() {
  const active = UserActivity(2000);
  return (
    <div className="container">
      <div className={active ? "active" : "inactive"}>
        {active ? (
          <div className="button">User is Active</div>
        ) : (
          <div className="button1">User is Inactive</div>
        )}
      </div>
    </div>
  );
}

export default App;
