const textarea = document.getElementById('text');
  const paceSelect = document.getElementById('pace');
  const speedSlider = document.getElementById('speed');
  const speedValue = document.getElementById('speedValue');
  const effectOutput = document.getElementById('effectOutput');
  const audio = document.getElementById('audio');
  const button = document.querySelector('button');
  const modal = document.getElementById('processingModal');
  const shortcuts = document.getElementById('shortcuts');

  // Update speed display
  speedSlider.addEventListener('input', () => {
    speedValue.textContent = parseFloat(speedSlider.value).toFixed(1) + 'x';
  });

  // Ctrl+Enter to speak
  textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault();
      speak();
    }
  });

  // Show modal
  function showModal() {
    modal.style.display = 'flex';
  }

  // Hide modal
  function hideModal() {
    modal.style.display = 'none';
  }

  async function speak() {
    const text = textarea.value.trim();
    if (!text) return alert("Please enter some text!");

    const pace = paceSelect.value;
    const speed = parseFloat(speedSlider.value);

    button.disabled = true;
    button.textContent = "Speaking...";
    showModal();
    shortcuts.style.display = 'none';
    effectOutput.style.display = 'none';
    effectOutput.textContent = '';

    try {
      const response = await fetch('https://fgzn2ld7ghpqmengm2yvvt6tsi0vikug.lambda-url.ap-south-1.on.aws/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, pace, speed })
      });

      if (!response.ok) {
        const err = await response.text();
        throw new Error(`${response.status}: ${err}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      if (audio.src) URL.revokeObjectURL(audio.src);
      audio.src = url;
      audio.playbackRate = speed;

      // Wait for audio to be playable
      await audio.play();
      hideModal();
      shortcuts.style.display = 'block';

    } catch (err) {
      hideModal();
      alert("Error: " + err.message);
      console.error(err);
    } finally {
      button.disabled = false;
      button.textContent = "Speak";
    }
  }

  // === Keyboard Controls ===
  let isListening = false;

  audio.addEventListener('play', () => {
    isListening = true;
  });

  audio.addEventListener('pause', () => {
    isListening = false;
  });

  audio.addEventListener('ended', () => {
    isListening = false;
  });

  document.addEventListener('keydown', (e) => {
    if (!isListening || document.activeElement === textarea) return;

    if (e.code === 'Space') {
      e.preventDefault();
      audio.paused ? audio.play() : audio.pause();
    }
    else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      audio.currentTime = Math.max(0, audio.currentTime - 3);
    }
    else if (e.code === 'ArrowRight') {
      e.preventDefault();
      audio.currentTime = Math.min(audio.duration, audio.currentTime + 3);
    }
  });