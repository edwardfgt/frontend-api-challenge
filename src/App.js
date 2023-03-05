import "./index.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
    const [post, setPost] = useState([]);

    const [token, setToken] = useState("_2a_12_uDNKJIWzdHBVKJrBL1dsQO");
    const [id, setId] = useState("1269");
    const [body, setBody] = useState("");
    

    useEffect(() => {
      posts()
    }, [])
    

    const posts = async () => {
        const response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
        const data = await response.json();
        console.log(data);
        setPost(data);
    }
    return <div className="app">
    <div id="posts">
    {post.map((data) => {
        return (
            <div id="divOutline" className="row-span-1 m-3 py-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 w-full content-center">
                <div id="textbox" className="text-center space-y-2 sm:text-left">
                    <p>{data.body}</p>
                    <p>{data.user.handle}</p>
                </div>
            </div>
        )
    })}

    </div>
    
    </div>
}
export default App;


// curl "https://chitter-backend-api-v2.herokuapp.com/peeps" \
//   -X POST \
//   -H "Authorization: Token token=_2a_12_uDNKJIWzdHBVKJrBL1dsQO" \
//   -H "Content-Type: application/json" \
//   -d '{"peep": {"user_id":1269, "body":"Does this thing work?"}}'