import "./background.css";
import useCanvasAnimation from "./useCanvasAnimation";

function Background() {
	const canvasRef = useCanvasAnimation();
	return (
		<div className='background-container'>
			<canvas className='bg-canvas' ref={canvasRef} />
		</div>
	);
}

export default Background;
