import { createContext, useState } from 'react';

const MyContext = createContext();

function Provider({ children }) {
    const [sth, setSth] = useState();

    return <MyContext.Provider value={{ sth, setSth }}>{children}</MyContext.Provider>;
}

export default MyContext;
export { Provider };
