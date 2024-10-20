import "./background.css";
import useCanvasAnimation from "./useCanvasAnimation";

function Background() {
    const canvasRef = useCanvasAnimation();
    return (
        <div className='canvas-background'>
            <canvas className='canvas-element' ref={canvasRef} />
        </div>
    );
}

export default Background;