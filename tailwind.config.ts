import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], theme: { extend: { colors: { cream:'#fcf8f2', plum:'#39243c', lavender:'#b8a5d6', rose:'#dc94a8', ink:'#211722' }, boxShadow: { soft:'0 18px 55px rgba(78, 50, 77, .12)' }, fontFamily: { display:['Georgia','serif'] } } }, plugins: [] };
export default config;
