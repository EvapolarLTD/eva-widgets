import { v4 as uuid } from 'uuid';

function genKey() {
  return uuid();
}

export default genKey;
