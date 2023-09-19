let then = Date.now();

function animate(fps) {
  requestAnimationFrame(animate);

  const delta = Date.now() - then;

  if (delta >= 1000 / fps) {
    cube.rotation.x += 0.0001 * delta;
    cube.rotation.y += 0.0001 * delta;

    renderer.render(scene, camera);

    then = Date.now();
  }
}

const fps = 60;

animate(fps);
