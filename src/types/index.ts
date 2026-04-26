export interface Command {
  command: string;
  description: string;
  usage?: string;
  mistakes?: string;
  tip?: string;
  simulation?: string;
  tags?: string[];
}

export interface Tool {
  name: string;
  description: string;
  commands: Command[];
  whenToUse?: string;
}

export interface AttackStep {
  step: string;
  desc: string;
}

export interface Challenge {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  concept: string;
  tools: Tool[];
  attackChain: AttackStep[];
  challenges: Challenge[];
  resources?: { title: string, url: string }[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}
