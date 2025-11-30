import { useState } from 'react'

const App = () => {
    const [data, setData] = useState("");
      const fetchData = async () => {
            try {
                const res = await fetch("/api/test");
                setData(res.ok ? await res.text() : "Error: " + res.statusText);
            } catch (err) {
                setData("Error: " + (err instanceof Error ? err.message : String(err)));
            }
        };
    fetchData();    
  return (
      <div>
          Welcome to Hono + React Router and bun. 100% Bun. No vite needed.
          Example response from hono: {data}
      </div>
  )
}

export default App