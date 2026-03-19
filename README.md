<div style="display: flex; align-items: center; justify-content: center; gap: 40px; margin: 40px 0;">

  <!-- First icon -->
  <a href="https://your-first-link.com" target="_blank">
    <img src="https://icon.icepanel.io/Technology/svg/Docker.svg" width="150" alt="Docker Logo" />
  </a>

  <!-- Big gray slash divider -->
  <div style="width: 20px; height: 150px; background-color: gray;"></div>

  <!-- Second icon -->
  <a href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEUAeNT////v+P0AdNMAetVind4AedVem94AcdIAdtMAfdaNtuZdn+Dz+f0Ac9Ndn9/t/wXuAAAB5UlEQVR4nO3cTVKEMAAFYeRnQgYY739bq0Ys3WTla60w3Rd4fJuEVYa3qzf89wfgKew/hf2nsP8U9t9rCbeysO3Hc+fY4Z2yNYRlndAedXzujJXdmdbSEC51QKvzKZzhoWlRCKUwlkIshbEUYimMpRBLYSyFWApjKcRSGEshlsJYCrEUxlKIpTCWQiyFsRRiKYylEEthLIVYCmMpxFIYSyGWwlgKsRTGUoilMJZCLIWxFGIpjKUQS2EshVgKYynEUhhLIZbCWAqxFMZSiKUwlkIshbEUYimMpRBLYSyFWApjKcRSGEshlsJYTWGZKtuX8AbvNIV7ndFu91N4v7FD9b0hHPH+auhoCK+Zwv5T2H8/hQd+xp1D+E7rLN0H9pr6vg/ZnbnuDeFl/mker/tfqvC3KYylEEthLIVYCmMpxFIYSyGWwlgKsRTGUoilMJZCLIWxFGIpjKUQS2EshVgKYynEUhhLIZbCWAqxFMZSiKUwlkIshbEUYimMpRBLYSyFWApjKcRSGEshlsJYCrEUxlKIpTCWQiyFsRRiKYylEEthLIVYCmMpxFIYSyGWwlgKsRTGUoilMFb7xfKVfXRzGk5hhZ8RXUtDuJUFreyfb8OOOz20NYTXTGH/Kew/hf2nsP8U9t8HVBp7dWLkcCgAAAAASUVORK5CYII=" target="_blank">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEUAeNT////v+P0AdNMAetVind4AedVem94AcdIAdtMAfdaNtuZdn+Dz+f0Ac9Ndn9/t/wXuAAAB5UlEQVR4nO3cTVKEMAAFYeRnQgYY739bq0Ys3WTla60w3Rd4fJuEVYa3qzf89wfgKew/hf2nsP8U9t9rCbeysO3Hc+fY4Z2yNYRlndAedXzujJXdmdbSEC51QKvzKZzhoWlRCKUwlkIshbEUYimMpRBLYSyFWApjKcRSGEshlsJYCrEUxlKIpTCWQiyFsRRiKYylEEthLIVYCmMpxFIYSyGWwlgKsRTGUoilMJZCLIWxFGIpjKUQS2EshVgKYynEUhhLIZbCWAqxFMZSiKUwlkIshbEUYimMpRBLYSyFWApjKcRSGEshlsJYTWGZKtuX8AbvNIV7ndFu91N4v7FD9b0hHPH+auhoCK+Zwv5T2H8/hQd+xp1D+E7rLN0H9pr6vg/ZnbnuDeFl/mker/tfqvC3KYylEEthLIVYCmMpxFIYSyGWwlgKsRTGUoilMJZCLIWxFGIpjKUQS2EshVgKYynEUhhLIZbCWAqxFMZSiKUwlkIshbEUYimMpRBLYSyFWApjKcRSGEshlsJYCrEUxlKIpTCWQiyFsRRiKYylEEthLIVYCmMpxFIYSyGWwlgKsRTGUoilMFb7xfKVfXRzGk5hhZ8RXUtDuJUFreyfb8OOOz20NYTXTGH/Kew/hf2nsP8U9t8HVBp7dWLkcCgAAAAASUVORK5CYII=" width="150" alt="Windows Logo" />
  </a>

</div>

<div style="text-align: center; margin-top: 20px;">
  <h1 style="border-bottom: none;">Virtual Machine on Docker</h1>
  <p>A simple, containerized solution for running a Windows11 virtual machine within your Docker environment.</p>
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
