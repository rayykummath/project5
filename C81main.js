canvas= document.getElementById("canvas");
canvas_ref= canvas.getContext("2d");

canvas_ref.beginPath();
canvas_ref.strokeStyle="blue";
canvas_ref.lineWidth=7;
canvas_ref.arc(200,200,40,0,2*Math.PI);
canvas_ref.stroke();

canvas_ref.beginPath();
canvas_ref.strokeStyle="black";
canvas_ref.lineWidth=7;
canvas_ref.arc(300,200,40,0,2*Math.PI);
canvas_ref.stroke();

canvas_ref.beginPath();
canvas_ref.strokeStyle="red";
canvas_ref.lineWidth=7;
canvas_ref.arc (400,200,40,0,2*Math.PI);
canvas_ref.stroke();

canvas_ref.beginPath();
canvas_ref.strokeStyle="yellow";
canvas_ref.lineWidth=7;
canvas_ref.arc (250,240,40,0,2*Math.PI);
canvas_ref.stroke();

canvas_ref.beginPath();
canvas_ref.strokeStyle="green";
canvas_ref.lineWidth=7;
canvas_ref.arc (350,240,40,40,0,2*Math.PI);
canvas_ref.stroke();