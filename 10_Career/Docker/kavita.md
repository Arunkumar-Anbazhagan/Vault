Launching kavita
```bash
docker run -d --name kavita -p 5000:5000 -v D:\Kavita\config:/kavita/config -v D:\Kavita\Series:/manga jvmilazz0/kavita:latest
```

to list the container running
```bash
docker ps -a
```

closing the container forcibly
```bash
docker rm -f {container-name}
```