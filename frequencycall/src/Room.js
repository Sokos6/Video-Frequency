import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import * as Chance from 'chance';
import Video from './Video';

const chance = new Chance();

const Room = (props) => {
  return (
    <div>
      <h2>TEST</h2>
      <div>ROOM</div>
    </div>
  );
};

export default Room;
