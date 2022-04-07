#!/usr/bin/env node
import startGame from '../src/index.js';
import { typeGames } from '../src/constants.js';

startGame(typeGames.PRIME);
