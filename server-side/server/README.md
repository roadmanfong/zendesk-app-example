# Start server

## GENERATE PRIVATE KEY (key.pem)

```cmd
openssl req -newkey rsa:2048 -new -nodes -keyout key.pem -out csr.pem
```

## GENERATE CERTIFICATE (cert.pem)

```cmd
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```
