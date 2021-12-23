import io from 'socket.io-client';
// const host = 'localhost:3000';
const socket = io.connect('https://10.18.3.88:3000'); // 自己的ip
export default socket;
