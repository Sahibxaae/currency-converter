import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <div className="box">Currency converter</div>
        <div className="convert">
          <label htmlFor="from">Currency</label>
          <select id="from">
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
          </select>
          <label htmlFor="to">Currency</label>
          <select id="to">
            <option value="USD">USD - United states Dollar</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="INR">INR - Indian Rupees</option> 
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
