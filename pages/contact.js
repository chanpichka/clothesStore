import Link from "next/Link";
import Layout from "../comps/Layout";
// import React, { useState } from 'react';
import { useState, createContext } from "react";
const Contact = () => {
  // const [count, setCount] = useState(0);
  // const UserContext = createContext()
  // const [user, setUser] = useState(0);

  return (
    <div>
      <h1>ConactPage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
        aspernatur earum nulla facere qui exercitationem repellat debitis et
        dicta veritatis ad laboriosam nemo ipsum nostrum in, dolorem harum
        dolore quisquam aliquid facilis corrupti. Mollitia repudiandae atque
        beatae molestiae dolor magni saepe error quo officiis aliquam, unde
        sequi ab doloribus alias rerum pariatur exercitationem ratione.
      </p>

      {/* <div>
                <p> {count}</p>
                <button onClick={() => setCount(count + 1)}>
                    +
                </button>
                <button onClick={() => setCount(count - 1)}>
                    -
                </button>
            </div> */}
      {/* const user = useContext(UserContext);
                <UserContext.Provider value={user}>
                    <button onClick={() => setUser(user + 1)}>
                        +
                    </button>
                    <button onClick={() => setUser(user - 1)}>
                        -
                    </button>
                </UserContext.Provider> */}
    </div>
  );
};
export default Contact;

// Contact.Layout = navbar;
