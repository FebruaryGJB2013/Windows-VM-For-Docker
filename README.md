<div align="center">
  <br />
  <img src="https://icon.icepanel.io/Technology/svg/Docker.svg" width="220" alt="Docker Logo" />
  
  <h1 style="border-bottom: none;">Virtual Machine on Docker</h1>
  <p>A simple, containerized solution for running a Linux virtual machine within your Docker environment.</p>
  <br />
</div>

---

### ⚠️ Important Setup Notice
> **The installation process will take a while.** Please be patient and **only click once** when navigating the menus. During the Linux Ubuntu setup, the system lags heavily because KVM Hardware Acceleration is turned off (`KVM="N"`).

### Getting Started

To get your environment up and running, please follow the instructions below. Ensure you have Docker Desktop (or GitHub Codespaces) running before proceeding.

1. **Open your terminal** (Command Prompt, PowerShell, or Terminal).
2. **Execute the following command** to pull the image and start the container:

```bash
docker rm -f linux-vm 2>/dev/null || true && \
docker run -d --name linux-vm \
  -p 8006:8006 \
  --shm-size="2gb" \
  -v "$(pwd):/storage" \
  -e VERSION="https://mirror.math.princeton.edu/pub/ubuntu-iso/20.04/ubuntu-20.04.6-desktop-amd64.iso" \
  -e RAM_SIZE="8G" \
  -e DISK_SIZE="35G" \
  -e KVM="N" \
  dockurr/windows
```

---

### Managing the VM

To start the VM, run:

```bash
docker start linux-vm
```

To stop the VM, run:

```bash
docker stop linux-vm
```

To view the live logs (helpful for troubleshooting), run:

```bash
docker logs -f linux-vm
```

<p align="center">
  <b>It’s Just That Easy!</b>
</p>

<br />

<div align="center">
  <a href="WARNINGS.md">
    <kbd><font color="red">Click to read the warnings!</font></kbd>
  </a>
</div>
