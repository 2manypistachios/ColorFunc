import React from "react";
// let Sketch

// if (typeof window !== "undefined") {
//   Sketch = require("react-p5")
// }

import dynamic from 'next/dynamic'

const Sketch = dynamic(() => import('react-p5'), {ssr: false})
import p5Types from "p5"; //Import this for typechecking and intellisense



import { useToken, useColorModeValue } from "@chakra-ui/react"
import { useRef } from "react"
import { cos } from "mathjs";

interface ComponentProps {
  colors?: string[]
}

let colorsDefault = ["#7209b7", "#3a0ca3", "#4361ee", "#4cc9f0", "#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c", "#ffffff"]

const ColorBox: React.FC<ComponentProps> = ({ colors = colorsDefault }: ComponentProps) => {
  const chakraColors = useToken("colors", ['bright', 'gray.700', ...colors])
  const bg = useColorModeValue(chakraColors[0], chakraColors[1])
  const parentRef = useRef();

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(canvasParentRef.clientWidth, canvasParentRef.clientHeight).parent(canvasParentRef);

    p5.rectMode(p5.CENTER);

    for (let i = 0; i < 50; i++) {
      let x = p5.random(p5.width);
      let y = p5.random(p5.height);
      let w = p5.random(p5.width);
      let h = p5.random(p5.height);
      let ang = p5.int(p5.random(8)) * p5.PI * 0.25;
      p5.push();
      p5.noStroke();
      p5.fill(p5.random(colors));
      p5.translate(x, y);
      p5.rotate(ang);
      p5.rect(x, y, w, h);
      p5.pop();
    }

    for (let i = 0; i < 50; i++) {
      let x = p5.random(-0.2, 1.2) * p5.width;
      let y = p5.random(-0.2, 1.2) * p5.height;
      let s = p5.random(5, 130);
      //dripCircle(x, y, s, p5, colors);
    }

    for (let i = 0; i < 100; i++) {
      let x = p5.random(p5.width);
      let y = p5.random(p5.height);
      let s = p5.random(p5.random(p5.random(20)));
      p5.fill(p5.random(colors));
      p5.noStroke();
      p5.circle(x, y, s);
    }
  }

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(parentRef.current.canvasParentRef.current.clientWidth, parentRef.current.canvasParentRef.current.clientHeight)
    console.log("should resize", parentRef.current.canvasParentRef.current.clientWidth, 500)
  }

  if (Sketch) return <Sketch ref={parentRef} setup={setup} windowResized={windowResized} style={{ display: 'grid', alignItems: 'center', justifyContent: 'center', height: '100%' }} />;
  else return (<div>loading</div>);
};

export default ColorBox


function dripCircle(x: number, y: number, s: number, p5: p5Types, colors: string[]) {
  
  if (!p5) return
  const { cos, sin, random, noStroke, stroke, strokeWeight, line, TAU, fill, ellipse, pop } = p5;

  let col = p5.random(colors);
  let cc = p5.int(random(5, 30));
  p5.push();
  p5.translate(x, y);
  p5.fill(col);
  p5.noStroke();
  p5.circle(0, 0, s);
  for (let i = 0; i < cc; i++) {
    let a = p5.random(TAU);
    let xx = s * 0.45 * cos(a) * random();
    let yy = s * 0.45 * sin(a) * random();
    let len = random(s * 5);
    if (random() < 0.2) {
      noStroke();
      myLine(xx, yy, xx, yy + len, p5);
    } else {
      stroke(col);
      strokeWeight(random(s * 0.05));
      line(xx, yy, xx, yy + len);
    }
  }
  noStroke();
  while (s > 0) {
    let ps = s;
    s -= random(30);
    fill(random(colors));
    ellipse(0, 0, s * random(0.9, 1), s * random(0.9, 1));
  }
  pop();
}

function myLine(x1: number, y1: number, x2: number, y2: number, p5: p5Types) {
  if (!p5) return

  const { atan, PI, dist, beginShape, vertex, bezierVertex, endShape } = p5;

  let pAng = atan((y1 - y2) / (x1 - x2));
  let a1 = -(PI * 0.5) + pAng;
  let a2 = (PI * 0.5) + pAng;
  let d = dist(x1, y1, x2, y2);
  let w = d * 0.1;
  beginShape();
  vertex(x1, y1);
  bezierVertex(x2, y2 - w * 0.5, x2 - w * 0.5, y2 - w * 0.1, x2, y2);
  bezierVertex(x2 + w * 0.5, y2 - w * 0.1, x2, y2 - w * 0.5, x1, y1);
  endShape();
}