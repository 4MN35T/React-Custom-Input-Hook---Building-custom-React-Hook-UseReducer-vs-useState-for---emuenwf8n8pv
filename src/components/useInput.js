import { useState } from "react";


const useInput = (initialValue) => {
  const [value, setValue1] = useState(initialValue);
  
  const onChange1 = (e) => {
    setValue1(e.target.value)
  }
  
  return {value, onChange : onChange1,};
};

export default useInput;
