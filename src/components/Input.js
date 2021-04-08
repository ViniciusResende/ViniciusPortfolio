import React, { useCallback } from 'react';

import { cellphone } from '../utils/masks';

const Input = ({ mask,...props}) => {
  
  const handleKeyUp = useCallback((e) => {
    if(mask === 'cellphone'){
      cellphone(e);
    }
  }, [mask])

  return(
    <div className="input-group prefix">
      <input {...props} onKeyUp={handleKeyUp}/>
    </div>
  );
}

export default Input;