/*!
 * This source file is part of the EdgeDB open source project.
 *
 * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// A "char" type polyfil. ¯\_(ツ)_/¯

type char = number;
export default char;

export const $0: char = ord("0");
export const $1: char = ord("1");

export const $C: char = ord("C");
export const $D: char = ord("D");
export const $E: char = ord("E");
export const $H: char = ord("H");
export const $I: char = ord("I");
export const $K: char = ord("K");
export const $L: char = ord("L");
export const $O: char = ord("O");
export const $P: char = ord("P");
export const $Q: char = ord("Q");
export const $R: char = ord("R");
export const $S: char = ord("S");
export const $T: char = ord("T");
export const $V: char = ord("V");
export const $Y: char = ord("Y");
export const $Z: char = ord("Z");

export const $b: char = ord("b");
export const $j: char = ord("j");
export const $m: char = ord("m");
export const $n: char = ord("n");
export const $o: char = ord("o");
export const $p: char = ord("p");
export const $v: char = ord("v");

export function ord(str: string): char {
  const ch: char = str.charCodeAt(0);
  if (ch <= 0 || ch >= 255) {
    throw new TypeError(`char "${ch}" is outside ASCII`);
  }
  return ch & 0xff;
}

export function chr(ch: char): string {
  if (ch <= 0 || ch >= 255) {
    throw new TypeError(`char "${ch}" is outside ASCII`);
  }
  return String.fromCharCode(ch);
}