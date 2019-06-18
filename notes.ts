class Point {
  x: number;
  y: number;

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();

// ==================================


class Point {
  private x: number; // make private so it is not accessible outside the Class
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let point = new Point(1, 2);

// ==================================

class Point {
  // Generate private interface with TypeScript inside the Constructor, and set x and y
  constructor(private _x?: number, private _y?: number) {
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }

  get x() {
    return this.x;
  }

  set x(value) {
    if (value < 0)
      throw new Error("value can't be less than 0");

    this.x = value;
  }
}

let x = point.x;
point.x = 10;

// ==================================

// MODULES

// In typeScript, every file is a module

// in point.ts

export class Point {
  constructor(private _x?: number, private _y?: number) {
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

// in main.ts

// We can import Types (classes, functions, variables...)

import { Point } from './point';
import { OtherType } from '@angular/core'; // External libraries

let point = new Point(1, 2);
point.draw();
