import { createContext, useContext } from "react";
const defaultUser = {
  name: 'kwak',
  id: 'hoseon',
};
const UserContext = createContext(defaultUser);
const HelloName = () => {
  const { name } = useContext(UserContext);
  return (
    <div>
      this is HelloName. and Name is {name}
    </div>
  );
};
const HelloId = () => {
  const { id } = useContext(UserContext);
  return (
    <div>
      this is HelloId. and Id is {id}
    </div>
  );
};

function Prac3() {
  return (
    <UserContext.Provider value={defaultUser} >
      <HelloId />
      <HelloName />
    </UserContext.Provider>
  );
}

export default Prac3;