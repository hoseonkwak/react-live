import { createContext, useContext } from "react";
const defaultUser = {
  name: 'kwak',
  id: 'hoseon',
};
// const defaultName = 'kwak';
// const defaultId = 'hoseon';

const UserNameContext = createContext(defaultUser.name);
const UserIdContext = createContext(defaultUser.id);
const HelloName = () => {
  const { name } = useContext(UserNameContext);
  return (
    <div>
      this is HelloName. and Name is {name}
    </div>
  );
};
const HelloId = () => {
  const { id } = useContext(UserIdContext);
  return (
    <div>
      this is HelloId. and Id is {id}
    </div>
  );
};

function Prac3_2() {
  return (
    <UserNameContext.Provider value={defaultUser.name} >
      <UserIdContext.Provider value={defaultUser.id} >
        <HelloName />
        <HelloId />
      </UserIdContext.Provider>
    </UserNameContext.Provider>
  );
}

export default Prac3_2;