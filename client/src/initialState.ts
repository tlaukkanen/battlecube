import { IBotFormState } from './botFormModule';
import { State } from 'hyperapp';

export enum GameStatus {
  started,
  stopped
}

export enum MessageType {
  special,
  tick,
  result
}

export enum PlayerStatus {
  inactive,
  active
}

export interface IPlayer extends State {
  name: string;
  url: string;
  status: PlayerStatus;
  color: string;
  position: {
    x: number | null,
    y: number | null,
    z: number | null
  };
  wins: number;
}

export interface IGameSetup {
  maxNumOfTicks: number;
  edgeLength: number;
  speed: number;
  numOfTasksPerTick: number;
  [key: string]: number;
}

export interface ISetup extends State {
  setup: IGameSetup;
  players: IPlayer[];
}

export interface ILogItem {
  name?: string;
  message: any;
  type?: MessageType;
  color: string;
}

export interface IAppState extends ISetup {
  sliderSpeedValue: number;
  gameStatus: GameStatus;
  error: any;
  log: ILogItem[];
  cube: any;
  botForm: IBotFormState;
  [key: string]: any;
}

export default {
  sliderSpeedValue: 200,
  setup: {
    maxNumOfTicks: 1000,
    edgeLength: 8,
    speed: 200,
    numOfTasksPerTick: 1
  },
  players: [
    {
      name: 'John',
      url: 'http://localhost:4001',
      color: '#FF6767',
      status: PlayerStatus.inactive,
      position: { x: null, y: null, z: null },
      wins: 0
    },
    {
      name: 'Petra',
      url: 'http://localhost:4002',
      color: '#EAEA00',
      status: PlayerStatus.inactive,
      position: { x: null, y: null, z: null },
      wins: 0
    },
    {
      name: 'Carmine',
      url: 'http://localhost:4003',
      color: '#00FFFF',
      status: PlayerStatus.inactive,
      position: { x: null, y: null, z: null },
      wins: 0
    },
    {
      name: 'Whoopie',
      url: 'http://localhost:4004',
      color: '#FF2EFF',
      status: PlayerStatus.inactive,
      position: { x: null, y: null, z: null },
      wins: 0
    }
  ],
  gameStatus: GameStatus.stopped,
  error: null,
  log: [],
  cube: null
};
