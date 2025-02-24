import p5 from "p5";

new p5((p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);

    // p.circle(0, 0, 200);
    // コレだと円がはみ出る

    // p.circle(p.width / 2, p.height / 2, 100);

    // p.strokeWeight(10); フチの太さ
    // p.stroke(100); フチの色
    // p.fill(240); 塗りの色
    // p.circle(p.width / 2, p.height / 4, 100);

    p.noStroke();
    p.fill(234);
  }

  p.draw = () => {
    p.clear();
    // Canvasに描いた円を残さないようにしたいならこれを呼ぶ。

    // p.circle(p.mouseX, p.mouseY, p.mouseX);

    p.circle(p.mouseY, p.mouseX, 100);
    // コレの挙動めちゃめちゃ面白い！！！！！

    p.circle(p.mouseX, p.mouseY, p.random(25, 100));
    // randamで直径を暴れさせた。
  }
})