const { exec } = require('child_process');

const asciiArt = `
  _   _  ______      __      _ 
 | \\ | |/ __ \\ \\    / / /\\  | |
 |  \\| | |  | \\ \\  / / /  \\ | |
 | . \` | |  | |\\ \\/ / / /\\ \\| |
 | |\\  | |__| | \\  / / ____ \\_|_
 |_| \\_|\\____/   \\/ /_/    \\_(_)
`;

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function progressBar(label, minSeconds, maxSeconds) {
    console.log(label);
    const duration = Math.floor(Math.random() * (maxSeconds - minSeconds + 1) + minSeconds) * 1000;
    const steps = 20;
    const stepDuration = duration / steps;

    for (let i = 0; i <= steps; i++) {
        const percentage = Math.round((i / steps) * 100);
        const bar = '█'.repeat(i) + '░'.repeat(steps - i);
        process.stdout.write(`\r[${bar}] ${percentage}%`);
        await delay(stepDuration);
    }
    console.log('\n            COMPLETE            \n');
}

async function startInstaller() {
    console.clear();
    console.log(asciiArt);
    console.log("This Is The Latest Version Of This Tutorial! V.1\n");

    // First Bar: 10s to 16s
    await progressBar("Downloading Commands From Repository >", 10, 16);

    // Second Bar: 6s to 9s
    await progressBar("Downloading Other Important Commands >", 6, 9);

    console.log("Running Commands...");
    await delay(7000);

    const dockerCommand = `docker rm -f windows-vm 2>/dev/null || true && \
docker run -d --name windows-vm \
  -p 8006:8006 \
  --shm-size="2gb" \
  -v "$(pwd):/storage" \
  -e VERSION="Windows11" \
  -e RAM_SIZE="10G" \
  -e DISK_SIZE="35G" \
  -e KVM="N" \
  dockurr/windows`;

    exec(dockerCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        console.log("\n🚀 NOVA VM is now running on Port 8006!");
        console.log("Check the 'Ports' tab to open your Ubuntu screen.");
    });
}

startInstaller();
