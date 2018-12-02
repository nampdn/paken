import * as readPkgUp from 'read-pkg-up'
import {exec, spawn} from 'child_process'

export class Paken {
  async load() {
    const pkg = await readPkgUp()
    return pkg
  }

  /**
   * Execute the command after environment has been loaded
   */
  async exec(cmd: string) {
    const cmds = cmd.split(' ')
    const process = spawn(cmds.shift() as string, [...cmds])
    process.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    process.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });
    process.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

  }

  private async setEnv(key: string, val: string | number | boolean) {
    return new Promise((resolve, reject) => {
      const e = exec(`export ${key}=${val}`, (err) => {
        if (err) {
          reject(err)
        }
        resolve()
      })
    })
  }
}

const paken = new Paken();

export default paken;
