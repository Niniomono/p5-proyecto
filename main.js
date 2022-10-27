function preload() {

}
function setup() {
    canvas = createCanvas(940, 680);
    canvas.position(610,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw() {
    image(video, 250, 100, 500, 500);
    tint(tint_color);
    circle(910, 650, 210,);
    fill('green');
    circle(910, 40, 210,);
    fill('green');
    circle(50, 40, 210,);
    fill('green');
    circle(50, 650, 210,);
    fill('green');
    line(910, 650, 910, 40);
    line(50, 650, 50, 40);
    line(50, 40, 910, 40);
    line(50, 650, 50, 40);
    line(50, 650, 910, 650);
}
function take_snapshot() {
    save('guest_name.png');
}
function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}