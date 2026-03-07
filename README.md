<div align="center">
  <br />
  <img src="[https://icon.icepanel.io/Technology/svg/Docker.svg](https://icon.icepanel.io/Technology/svg/Docker.svg)" width="120" alt="Docker Logo" />
  
  <h1 style="border-bottom: none;">Virtual Machine on Docker</h1>
  <p>A simple, containerized solution for running a Linux virtual machine within your Docker environment.</p>
  <br />
</div>

---

### Getting Started

To get your environment up and running, please follow the instructions below. Ensure you have Docker Desktop installed and running before proceeding.

1. **Open your terminal** (Command Prompt, PowerShell, or Terminal).
2. **Execute the following command** to pull the image and start the container:

```bash
docker run -d --name linux-vm \
  -p 8006:8006 \
  --device=/dev/kvm \
  --cap-add NET_ADMIN \
  -e VERSION="ubuntu" \
  -e DISK_SIZE="45G" \
  -e RAM_SIZE="4G" \
  dockurr/windows
Managing the VM

To start and stop the vm run commands:

docker start linux-vm or docker stop linux-vm.

<p align="center">
<b>It’s Just That Easy!</b>
</p>
