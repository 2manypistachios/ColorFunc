import React, { MutableRefObject, useRef } from "react";
import { useToken } from "@chakra-ui/react"


import p5Types from "p5"; //Import this for typechecking and intellisense
import { SketchProps } from "react-p5";
interface SketchProps2 extends SketchProps {
	ref?: MutableRefObject<HTMLDivElement>
}
import dynamic from 'next/dynamic'
const Sketch: React.ComponentType<SketchProps2> = dynamic(() => import('react-p5'), {ssr: false})


interface ComponentProps {
	bg?: string
}

const CircleShift: React.FC<ComponentProps> = ({ bg = 'gray.200' }: ComponentProps) => {
	const chakraBg = useToken("colors", [bg])
	const parentRef = useRef<HTMLDivElement>(null);

	let time = 0;


	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(canvasParentRef.clientWidth, canvasParentRef.clientHeight).parent(canvasParentRef);
		p5.noFill();
	};

	const windowResized = (p5: p5Types, ref) => {
    ref.current.retry()
  }

	const draw = (p5: p5Types) => {
		p5.background(chakraBg);

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

	if (Sketch) return <Sketch ref={parentRef} setup={setup} draw={draw} windowResized={(p5) => windowResized(p5, parentRef)} style={{ display: 'grid', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }} />;
	else return <>loading</>;
};

export default CircleShift