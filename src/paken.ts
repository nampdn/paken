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
