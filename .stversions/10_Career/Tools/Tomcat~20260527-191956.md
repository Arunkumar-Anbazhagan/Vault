# Apache Tomcat — Notes (with Architecture)

---

## 1. What is Tomcat

- Apache Tomcat = Java web server + servlet container
- Runs Java-based web applications (Servlets, JSP)
- Converts HTTP requests into Java method calls and returns responses

---

## 2. Key Concepts

- Server → listens for client requests
- Port → entry point (default: 8080)
- Servlet → Java class handling request/response
- JSP → converted into servlet internally
- WAR → packaged web application

---

## 3. Folder Structure

TOMCAT_HOME/
│
├── bin/        → startup & shutdown scripts
├── conf/       → configuration files (server.xml, web.xml)
├── webapps/    → deployed applications (.war or folders)
├── logs/       → logs for debugging
└── lib/        → libraries used by Tomcat

---

## 4. Architecture (Core Components)

                +----------------------+
                |      Browser         |
                | (Client Request)     |
                +----------+-----------+
                           |
                           v
                +----------------------+
                |      Connector       |
                | (HTTP/HTTPS Handler) |
                +----------+-----------+
                           |
                           v
                +----------------------+
                |      Engine          |
                | (Request Processing) |
                +----------+-----------+
                           |
                +----------+-----------+
                |                      |
                v                      v
        +---------------+      +---------------+
        |     Host      |      |     Host      |
        | (Virtual App) |      | (Virtual App) |
        +-------+-------+      +-------+-------+
                |                      |
                v                      v
          +-----------+          +-----------+
          | Context   |          | Context   |
          | (Web App) |          | (Web App) |
          +-----+-----+          +-----+-----+
                |                      |
                v                      v
        +----------------+      +----------------+
        |   Servlet      |      |   Servlet      |
        | (Business Logic)|     | (Business Logic)|
        +----------------+      +----------------+

---

## 5. Request Flow

1. Browser sends request:
   http://localhost:8080/app

2. Connector:
   - Listens on port 8080
   - Accepts HTTP request

3. Engine:
   - Decides which Host (virtual server)

4. Host:
   - Maps to specific domain/app

5. Context:
   - Identifies web app inside /webapps

6. Servlet:
   - Executes business logic

7. Response sent back to browser

---

## 6. Why Tomcat is Used

- Lightweight Java server
- Easy deployment (.war file)
- Supports Servlet & JSP specifications
- Widely used in enterprise applications

---

## 7. HTTP vs HTTPS

HTTP:
http://localhost:8080
- Not secure
- Plain text communication

HTTPS:
https://localhost:8443
- Encrypted (SSL/TLS)
- Secure communication

---

## 8. Why Current Setup is Not Secure

- Running on HTTP (port 8080)
- No SSL/TLS configured
- Data can be intercepted

---

## 9. Enable HTTPS in Tomcat

### Step 1 — Generate Keystore

keytool -genkeypair -alias tomcat -keyalg RSA -keystore keystore.jks -keysize 2048

---

### Step 2 — Configure server.xml

File: TOMCAT_HOME/conf/server.xml

<Connector 
    port="8443"
    protocol="org.apache.coyote.http11.Http11NioProtocol"
    SSLEnabled="true">

    <SSLHostConfig>
        <Certificate 
            certificateKeystoreFile="conf/keystore.jks"
            certificateKeystorePassword="yourpassword"
            type="RSA" />
    </SSLHostConfig>
</Connector>

---

### Step 3 — Restart Tomcat

Access:
https://localhost:8443

---

## 10. Redirect HTTP → HTTPS (Optional)

Add in web.xml:

<security-constraint>
  <web-resource-collection>
    <url-pattern>/*</url-pattern>
  </web-resource-collection>
  <user-data-constraint>
    <transport-guarantee>CONFIDENTIAL</transport-guarantee>
  </user-data-constraint>
</security-constraint>

---

## 11. Production Notes

- Self-signed certificate → browser warning
- Use valid SSL certificates (e.g., Let's Encrypt)
- Often use reverse proxy (Nginx / Apache)

---

## 12. Quick Summary

- Tomcat = Java web app runtime
- 8080 = HTTP (not secure)
- 8443 = HTTPS (secure)
- Connector = entry point
- Servlet = logic handler
- WAR = deployable app

---