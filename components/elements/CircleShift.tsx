import React from "react";
let Sketch

if (typeof window !== "undefined") {
	Sketch = require("react-p5")
}
import p5Types from "p5"; //Import this for typechecking and intellisense

import { useToken, useColorModeValue } from "@chakra-ui/react"
import { useRef } from "react"

interface ComponentProps {
	colors?: string
}

const CircleShift: React.FC<ComponentProps> = ({ colors = 'gray.500' }: ComponentProps) => {
	const chakraColors = useToken("colors", ['bright', 'gray.700', colors])
	const bg = useColorModeValue(chakraColors[0], chakraColors[1])
	const parentRef = useRef();

	let time = 0;


	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(canvasParentRef.clientWidth, canvasParentRef.clientHeight).parent(canvasParentRef);
		p5.noFill();
	};

	const windowResized = (p5: p5Types) => {
		p5.resizeCanvas(parentRef.current.canvasParentRef.current.clientWidth, parentRef.current.canvasParentRef.current.clientHeight)
		console.log("should resize", parentRef.current.canvasParentRef.current.clientWidth)
	}

	const draw = (p5: p5Types) => {
		p5.background(bg);

		for (let i = 0; i < 360; i += 3) {
			let x = p5.cos(p5.radians(i)) * 50 + p5.width / 2
			let y = p5.sin(p5.radians(i)) * 100 + p5.height / 2
			let w = p5.sin(p5.radians(time + i)) * 200

			let col = p5.map(i, 0, 360, 360, 100)
			p5.fill(col, col, col)

			p5.noStroke();
			p5.fill(col, 0, 150);
			p5.ellipse(x, y, w, w)
			// p5.text(`w: ${w}`,p5.width*5/6, i/360*p5.height)
		}
		time++
	};

	if (Sketch) return <Sketch ref={parentRef} setup={setup} draw={draw} windowResized={windowResized} style={{ display: 'grid', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }} />;
	else return <>loading</>;
};

export default CircleShift