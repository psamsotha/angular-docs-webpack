import { DEFAULT_MESSAGE } from 'src/app/constants';


export function getDefaultMessage(): Message {
  return { value: DEFAULT_MESSAGE };
}

export class Message {
  value: string;
}
