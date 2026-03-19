<div align="center">
  <br />
  <img src="https://icon.icepanel.io/Technology/svg/Docker.svg" width="150" alt="Docker Logo" style="vertical-align: middle;" />
  <span style="font-size: 100px; color: #ccc; margin: 0 20px; vertical-align: middle; font-weight: 100;">/</span>
  <img src="https://skillicons.dev
" width="150" alt="Windows Logo" style="vertical-align: middle;" />
  
  <h1 style="border-bottom: none; margin-top: 40px;">Virtual Machine on Docker</h1>
  <p>A simple, containerized solution for running a Windows 11 virtual machine within your Docker environment.</p>
  <br />
</div>

---

### ⚠️ Important Setup Notice
> **The installation process will take a while.** Please be patient and **only click once** when navigating the menus. During the Windows 11 setup, the system lags heavily because KVM Hardware Acceleration is turned off (`KVM="N"`), And Make Sure You Have Enough Monthly Time To Do This If Your Using Github Codespaces!

### Getting Started

To get your environment up and running, please follow the instructions below. Ensure you have Docker Desktop (or GitHub Codespaces) running before proceeding.

1. **Open your terminal** (Command Prompt, PowerShell, or Terminal).
2. **Execute the following command** to pull the image and start the container:

```bash
docker rm -f windows-vm 2>/dev/null || true && \
docker run -d --name windows-vm \
  -p 8006:8006 \
  --shm-size="2gb" \
  -v "$(pwd):/storage" \
  -e VERSION="Windows11" \
  -e RAM_SIZE="10G" \
  -e DISK_SIZE="35G" \
  -e KVM="N" \
  dockurr/windows
```

---

### Managing the VM

To start the VM, run:

```bash
docker start windows-vm
```

To stop the VM, run:

```bash
docker stop windows-vm
```

To view the live logs (helpful for troubleshooting), run:

```bash
docker logs -f windows-vm
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
