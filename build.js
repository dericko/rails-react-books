const fs = require('fs');
const esbuild = require('esbuild');

// Load the environment variables from the .env file
const ENV_FILE = '.env.local';
const envFileContent = fs.readFileSync(ENV_FILE, 'utf8');
const envVariables = envFileContent
  .split('\n')
  .filter(line => line.trim() !== '')
  .filter(line => line.startsWith('REACT_APP'))
  .reduce((result, line) => {
    const [key, value] = line.split('=');
    result[`process.env.${key}`] = JSON.stringify(value);
    return result;
  }, {});

// Build your React app with esbuild
esbuild.build({
  entryPoints: ['app/javascript/application.js'],
  bundle: true,
  sourcemap: true,
  publicPath: '/assets',
  outdir: 'app/assets/builds',
  define: envVariables, // Inject environment variables
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
