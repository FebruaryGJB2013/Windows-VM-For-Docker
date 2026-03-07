# <img src="https://raw.githubusercontent.com/docker/docs/main/static/favicons/favicon-32x32.png" width="32" height="32" valign="middle"> Virtual Machine on Docker

A simple, containerized solution for running a Linux virtual machine within your Docker environment.

---

### Getting Started

To get your environment up and running, please follow the instructions below. Ensure you have Docker Desktop installed and running before proceeding.

1. **Open your terminal** (Command Prompt, PowerShell, or Terminal).
2. **Execute the following command** to pull the image and start the container:

`docker run -d --name linux-vm -p 8006:8006 --device=/dev/kvm --cap-add NET_ADMIN -e VERSION="ubuntu" -e DISK_SIZE="45G" -e RAM_SIZE="4G" dockurr/windows`

---

### Managing the VM

To start and stop the vm run commands:

`docker start linux-vm` or `docker stop linux-vm`.

<p align="center">
  <b>It’s Just That Easy!</b>
</p>
